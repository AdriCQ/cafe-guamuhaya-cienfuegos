import { ISiteSettings, SettingsService } from "src/services";
import { InjectionKey, ref } from "vue";
/**
 * AppInjectable
 */
export class AppInjectable {
    private _settings = ref<ISiteSettings>();

    get settings() {
        return this._settings.value;
    }
    set settings(p: ISiteSettings) {
        this._settings.value = p;
    }
    /**
     * -----------------------------------------
     *	Actions
     * -----------------------------------------
     */

    async loadSettings() {
        const r = await SettingsService.index();
        this.settings = r.data;
        return this.settings;
    }
}

export const $appInjectable = new AppInjectable();
export const _appInjectable: InjectionKey<AppInjectable> =
    Symbol("AppInjectable");
