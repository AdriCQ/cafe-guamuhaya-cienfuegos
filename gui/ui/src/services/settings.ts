/**
 * -----------------------------------------
 *	Types
 * -----------------------------------------
 */

import { $api } from "./_axios";

export interface ISettingsSocial {
    key: string;
    link: string;
    label: string;
    icon: string;
}
export interface ISiteSettings {
    id: number;
    site_title: string;
    site_about: string[];
    address: string;
    social: ISettingsSocial[];
}

/**
 * -----------------------------------------
 *	Service
 * -----------------------------------------
 */
const path = "settings";
export const SettingsService = {
    index: async () => $api.get<ISiteSettings>(path),
    update: async (p: ISiteSettings) => $api.patch<ISiteSettings>(path),
};
