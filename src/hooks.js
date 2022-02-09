import { useEffect, useState, useCallback } from "react";

import { setting } from "./storage";

const settingInitialValues = {
  tfaRows: 7,
  wsrRows: 7,
  replace1: "\\s",
  replace2: '<span style="color: red">*</span>',
}

const useSettingConfig = () => {
  const [config, setConfig] = useState({});

  const loadSetting = useCallback(async () => {
    try {
      let data = await setting.getItem("config");
      if (!data) {
        setting.setItem('config', settingInitialValues);
        data = settingInitialValues;
      }
      setConfig(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateSettingConfig = useCallback(async (data) => {
    try {
      setConfig(old => old = data);
      await setting.setItem("config", data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadSetting();
  }, [loadSetting]);

  return [config, updateSettingConfig];
};

export { useSettingConfig, settingInitialValues };
