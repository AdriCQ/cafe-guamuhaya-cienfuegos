import { NavigationGuard } from 'vue-router';
import { $user } from 'src/injectables';
import { ROUTE_NAME } from './names';
/**
 * Auth Guard
 */
export const authGuard: NavigationGuard = (to, from, next) => {
  if (!$user.apiToken && from.name !== ROUTE_NAME.AUTH)
    next({ name: ROUTE_NAME.AUTH });
  else next();
};
