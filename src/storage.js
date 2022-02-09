/* eslint-disable no-undef */
import localforage from 'localforage';

const setting = localforage.createInstance({
    name: "app-setting",
    version: 1.0,
    storeName: 'setting-storage',
    description: 'App Setting Storage'
});

const settingConfig = setting.getItem('config');

export { setting, settingConfig };