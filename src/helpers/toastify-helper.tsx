import { ToastOptions, toast } from "react-toastify";
import Alert from "../components/base/alert/alert";
import Typography from "../components/base/typography";
import { severityType } from "./types";

interface IToastType {
  message: string;
  severity?: severityType;
  dismissible?: boolean;
  showIcon?: boolean;
  title?: string;
}

function notify(data: IToastType, options?: ToastOptions) {
  const {
    message,
    severity = "success",
    dismissible = true,
    showIcon = true,
    title,
  } = data;
  toast(({ closeToast }) => {
    return (
      <Alert
        icon={showIcon}
        severity={severity}
        onClose={dismissible ? closeToast : undefined}
        title={title}
      >
        <Typography variant="inherit">{message}</Typography>
      </Alert>
    );
  }, options);
}

export default notify;
