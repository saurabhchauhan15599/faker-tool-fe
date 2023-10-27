import PropTypes from "prop-types";
import { CSSProperties, ReactNode, SyntheticEvent } from "react";
import Images, {
  alertIconMapping,
  crossIconMapping,
} from "../../../helpers/constant";
import AlertTitle from "./alert-title";
import "./index.style.scss";

export type severityType = "error" | "info" | "success" | "warning" | "none";
export interface AlertProps {
  style?: CSSProperties;
  title?: ReactNode;
  severity?: severityType;
  children: ReactNode;
  icon?: boolean;
  actions?: ReactNode;
  onClose?: (event: SyntheticEvent) => void;
}

const Alert = (props: AlertProps) => {
  const {
    title,
    icon,
    style,
    children,
    actions,
    onClose,
    severity = "success",
  } = props;

  const AlertImgSource = Images[alertIconMapping[severity]];
  const CrossImgSource = Images[crossIconMapping[severity]];

  return (
    <div role="alert" style={style} className={`alert-root alert-${severity}`}>
      {icon && (
        <div className="alert-icon-wrapper">
          <AlertImgSource className="alert-icon" />
        </div>
      )}
      <div className="alert-message">
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </div>
      {!actions && onClose && (
        <button className="alert-close-icon-wrapper" onClick={onClose}>
          <CrossImgSource className="alert-icon" />
        </button>
      )}
      {actions}
    </div>
  );
};

Alert.defaultProps = {
  severity: "success",
  icon: true,
};

Alert.propTypes = {
  severity: PropTypes.oneOf(["error", "info", "warning", "success", "none"]),
};

export default Alert;
