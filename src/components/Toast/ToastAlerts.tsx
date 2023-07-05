import { toast, cssTransition } from 'react-toastify';

export function MSGsuccess(message: string) {
  toast.success(message, {
    icon: false,
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
}
export function MSGerror(message: string) {
  toast.success(message, {
    icon: false,
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
}
