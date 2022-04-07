interface localStorage {
  key: string;
  value: string;
  expires?: string;
  prefix?: string | number;
  [key: string]: any;
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
    const value = JSON.parse(window.localStorage.getItem(key as string) as string);
    console.log('value', value);

    if (value) {
      const expires = value.expires;
      const time = value.nowDate;
      if (expires && Number.isFinite(Number(expires))) {
        console.log('eeeeeeeee', expires);
        if (Date.now() - time > expires) {
          storage.deleteLocalStorage(key);
          return null;
        } else {
          return value;
        }
      } else {
        return value;
      }
    } else {
      return null;
    }
  };
  const setLocalStorage = (params: localStorage) => {
    const { key, prefix, expires } = params;
    const cusKey = prefix ? prefix + key : '__' + key;
    let cusValue = params;
    if (expires && Number.isFinite(Number(expires))) {
      cusValue = { ...params, nowDate: Date.now() };
    } else {
      cusValue = { ...params, expires: undefined };
    }
    cusValue.prefix = prefix ? prefix : '__';
    if (window.localStorage.getItem(cusKey)) {
      return [cusKey, JSON.parse(window.localStorage.getItem(cusKey) || '{}')];
    }
    Object.keys(cusValue).forEach((item) => {
      if (isEmpty(cusValue[item])) {
        delete cusValue[item];
      }
    });
    window.localStorage.setItem(cusKey, JSON.stringify(cusValue));
    return [cusKey, JSON.parse(JSON.stringify(cusValue))];
  };
  const deleteLocalStorage = (key: string | number) => {
    window.localStorage.removeItem(key as string);
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
