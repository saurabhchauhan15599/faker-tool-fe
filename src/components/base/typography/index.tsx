import PropTypes from "prop-types";
import { DOMAttributes, ElementType, ReactNode, memo } from "react";
import { typographyVariantsMapping } from "../../../helpers/constant";
import { typographyVariantType } from "../../../helpers/types";
import "./index.style.scss";

interface TypographyProps extends DOMAttributes<HTMLHeadingElement> {
  variant?: typographyVariantType;
  children: ReactNode;
  className?: string;
  title?: ReactNode
}

function Typography(props: TypographyProps) {
  const { variant, children, className, ...otherProps } = props;
  const Component = (
    variant ? typographyVariantsMapping[variant] : "p"
  ) as ElementType;
  return (
    <Component
      {...otherProps}
      className={`typography--variant-${variant} ${className}`}
    >
      {children}
    </Component>
  );
}

Typography.defaultProps = {
  variant: "body",
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h2mid",
    "h3",
    "h4",
    "h5",
    "h6",
    "subheading1",
    "subheading2",
    "subheading3",
    "body",
    "body2",
    "span",
    "p",
    "ptext",
    "pdoc",
    "label",
    "label2",
    "inherit",
  ]),
};

export default memo(Typography);
