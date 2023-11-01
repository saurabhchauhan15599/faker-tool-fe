import { memo } from "react";
import Button from "../../base/button";
import Typography from "../../base/typography";
import css from "./index.module.scss";

interface NoDocumentPlaceholderProps {
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  supportingText?: string;
  buttonText?: string;
}

const NoDocumentPlaceholder = (props: NoDocumentPlaceholderProps) => {
  const {
    onClick,
    disabled,
    title = "No Data!",
    supportingText = "Add entries if not present, they will show up here.",
    buttonText = "Generate",
  } = props;
  return (
    <div className={css.documentPlaceholder}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="span" className={css.placeholderLabel}>
        {supportingText}
      </Typography>
      <Button
        onClick={onClick}
        variant="outlined"
        className={css.button}
        disabled={disabled}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default memo(NoDocumentPlaceholder);
