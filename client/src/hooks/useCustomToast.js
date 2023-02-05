import { useToast } from "@chakra-ui/react";

const toastConfig = {
  variant: "solid",
  position: "top-right",
};
const useCustomToast = () => {
  const toast = useToast();
  const success = ({ message, onCloseComplete = null }) => {
    if (onCloseComplete) {
      toastConfig["onCloseComplete"] = onCloseComplete;
    }
    toast({
      ...toastConfig,
      status: "success",
      description: message,
    });
  };
  const error = ({ message }) => {
    toast({ ...toastConfig, status: "error", description: message });
  };
  const info = (message) => {
    toast({ ...toastConfig, status: "info", description: message });
  };
  const warn = (message) => {
    toast({ ...toastConfig, status: "warning", description: message });
  };
  return { success, error, info, warn };
};

export default useCustomToast;
