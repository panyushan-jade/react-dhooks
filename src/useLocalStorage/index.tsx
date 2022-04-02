interface localStorage {
  key: string;
  value: any;
  expires?: Number;
  prefix?: string | number;
  [item: string]: any;
}

const isEmpty = (obj: any) => {
  if (typeof obj === 'undefined' || obj === null || obj === '') {
    return true;
  } else {
    return false;
  }
};

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
    const { key, prefix, expires } = params;
    const cusKey = prefix ? JSON.stringify(prefix + key) : JSON.stringify('__' + key);
    let cusValue = expires ? { ...params, nowDate: Date.now() } : params;
    Object.keys(cusValue).forEach((item) => {
      if (isEmpty(cusValue[item])) {
        delete cusValue[item];
      }
    });
    window.localStorage.setItem(cusKey, JSON.stringify(cusValue));
  };
  const deleteLocalStorage = (key: string) => {
    window.localStorage.removeItem(key);
  };
  const clearLocalStorage = () => {
    window.localStorage.clear();
  };
  const storage = {
    getLocalStorage,
    setLocalStorage,
    deleteLocalStorage,
    clearLocalStorage,
  };
  return storage;
};
