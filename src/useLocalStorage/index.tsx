import { useState } from 'react';

interface localStorage {
  key: string;
  value: any;
  expires?: Number;
  prefix?: string | number;
}
interface stateType {
  getLocalStorage: Function;
  setLocalStorage: Function;
  deleteLocalStorage: Function;
  clearLocalStorage: Function;
}

export default () => {
  const getLocalStorage = (key: string | number) => {
    const value = window.localStorage.getItem(JSON.stringify(key));
    if (value) {
      const expires = JSON.parse(value).expires;
      const time = JSON.parse(value).nowDate;
      if (expires) {
        if (Date.now() - time > expires) {
          storage.deleteLocalStorage(JSON.stringify(key));
          return null;
        } else {
          return JSON.parse(value);
        }
      } else {
        return JSON.parse(value);
      }
    } else {
      return null;
    }
  };
  const setLocalStorage = (params: localStorage) => {
    const { key, prefix = '_', expires } = params;
    const cusKey = JSON.stringify(prefix + key);
    const cusValue = JSON.stringify(expires ? { ...params, nowDate: Date.now() } : params);
    window.localStorage.setItem(cusKey, cusValue);
  };
  const deleteLocalStorage = (key: string) => {
    window.localStorage.removeItem(key);
  };
  const clearLocalStorage = () => {
    window.localStorage.clear();
  };
  // eslint-disable-next-line no-unused-vars
  const [storage, setStorage] = useState<stateType>({
    getLocalStorage,
    setLocalStorage,
    deleteLocalStorage,
    clearLocalStorage,
  });
  return storage;
};
