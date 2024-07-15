import { useEffect } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastType = 'success' | 'error' | 'info';

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
