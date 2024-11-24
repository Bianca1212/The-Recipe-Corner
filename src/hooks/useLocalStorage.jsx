export const useLocalStorage = (key) => {
  const item = JSON.parse(localStorage.getItem(key));

  const set = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return { item, set, remove };
};
