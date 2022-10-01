import { InjectionKey, ref } from 'vue';
import { IUser, IUserRequestLogin, UserService } from 'src/services';
import { LocalStorage } from 'quasar';

const $service = UserService();
/**
 * Interface Storage
 */
interface IStorage {
  profile: IUser | null;
  apiToken: string | null;
}
const STORAGE_KEY = 'storage/UserInjectable';

/**
 * @class UserInjectable
 */
class UserInjectable {
  private _api_token = ref<string | null>(null);
  private _profile = ref<IUser | null>(null);
  /**
   * -----------------------------------------
   *	Setters & getters
   * -----------------------------------------
   */
  /**
   * Api Token Getter
   */
  get apiToken() {
    return this._api_token.value;
  }
  /**
   * Api Token Setter
   */
  set apiToken(token: string | null) {
    this._api_token.value = token;
  }
  /**
   * Gets User Profile
   * @returns
   */
  get profile() {
    return this._profile.value;
  }
  /**
   * Set user profile
   * @param profile
   */
  set profile(profile: IUser| null) {
    this._profile.value = profile;
  }
  /**
   * -----------------------------------------
   *	Actions
   * -----------------------------------------
   */
  /**
   * Login Action
   * @param loginParams
   */
  async login(loginParams: IUserRequestLogin) {
    const resp = await $service.authLogin(loginParams);
    this.profile = resp.data.data;
    this.apiToken = resp.data.api_token;
    this.save();
    return resp;
  }
  /**
   * -----------------------------------------
   *	Mutators
   * -----------------------------------------
   */
  /**
   * save data from localstorage
   */
  load() {
    if (!LocalStorage.getAllKeys().includes(STORAGE_KEY)) return;
    const store = LocalStorage.getItem(STORAGE_KEY);
    if (!store) return;
    const {apiToken, profile} = JSON.parse(store.toString()) as IStorage;
    this.apiToken = apiToken;
    this.profile = profile;
  }
  /**
   * logout
   */
  logout() {
    this.apiToken = null;
    this.profile = null;
    this.save();
  }
  /**
   * save data on localstorage
   */
  save() {
    const data: IStorage = {
      apiToken: this.apiToken,
      profile: this.profile
    }
    LocalStorage.set(STORAGE_KEY, JSON.stringify(data))
  }
}

/**
 * User Injectable Instance
 */
export const $user = new UserInjectable();
/**
 * User Injectable Key
 */
export const _user: InjectionKey<UserInjectable> = Symbol('UserInjectable');
