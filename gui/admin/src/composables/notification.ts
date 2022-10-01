import { AxiosError } from 'axios';
import { Notify } from 'quasar';
/**
 * useNotification
 * @returns
 */
export const useNotification = () => ({
  axios: (axiosError: AxiosError | unknown) => {
    Notify.create({
      message: String(axiosError),
      type: 'negative',
      position: 'center',
      icon: 'mdi-alert',
      timeout: 3500,
    });
  },
  /**
   * success
   * @param p
   */
  error: (p: string) => {
    Notify.create({
      message: p,
      type: 'negative',
      position: 'center',
      icon: 'mdi-alert',
      timeout: 3500,
    });
  },
  /**
   * success
   * @param p
   */
  success: (p: string) => {
    Notify.create({
      message: p,
      type: 'positive',
      position: 'center',
      icon: 'mdi-check',
      timeout: 3500,
    });
  },
});
