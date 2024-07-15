import { useEffect } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastType = 'success' | 'error' | 'info';

/**
 * The `useToast` function in TypeScript provides a way to display different types of toast messages
 * with options.
 * @returns The `useToast` custom hook is returning an object with a single property `showToast`, which
 * is a function used to display different types of toasts (success, error, info) based on the
 * parameters provided.
 */
const useToast = () => {
  const showToast = (type: ToastType, message: string, options?: ToastOptions) => {
    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'info':
        toast.info(message, options);
        break;
      default:
        toast(message, options);
    }
  };

  useEffect(() => {
    return () => toast.dismiss();
  }, []);

  return { showToast };
};

export default useToast;
