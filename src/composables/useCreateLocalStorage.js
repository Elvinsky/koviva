import { ErrorHandler } from '@/utils/errorHandler';

export const useCreateLocalStorage =(key) => {
  const set = (value) => {
    ErrorHandler(() => {
      localStorage.setItem(key, value);
    });
  };

  const get = () => {
    return ErrorHandler(() => localStorage.getItem(key) ?? null);
  };

  return { get, set };
};
