import { useEffect, useState, useCallback } from "react";

import { setting } from "./storage";

const useSettingConfig = () => {
  const [config, setConfig] = useState({});

  const loadSetting = useCallback(async () => {
    try {
      const data = await setting.getItem("config");
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

export { useSettingConfig };
