import {
  ButtonHTMLAttributes,
  MouseEvent,
  KeyboardEvent,
  ReactElement,
  createContext,
  useContext,
} from "react";
import css from "./index.module.scss";

interface SideBarProps {
  children: ReactElement<SideBarItemProps> | ReactElement<SideBarItemProps>[];
  activeStep?: number;
  onClick?: (value: number, event: MouseEvent<HTMLButtonElement>) => void;
  onEnter?: (value: number, event: KeyboardEvent<HTMLButtonElement>) => void;
}

interface ISideBarContext {
  activeStep: number;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}

const SideBarContext = createContext<ISideBarContext | null>(null);

const SideBar = (props: SideBarProps) => {
  const { children, activeStep = 0 } = props;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;
    const value = event.currentTarget.value;
    onClick?.(parseInt(value, 10), event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const { onEnter } = props;
    const value = event.currentTarget.value;
    if (event.key === "Enter") onEnter?.(parseInt(value), event);
  };

  return (
    <SideBarContext.Provider
      value={{ activeStep, onClick: handleClick, onKeyDown: handleKeyDown }}
    >
      <aside className={css.addSupplierSidebarWrapper}>{children}</aside>
    </SideBarContext.Provider>
  );
};

interface SideBarItemProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement | HTMLDivElement>,
    "onClick" | "onKeyDown"
  > {
  label: string;
  value: number;
  isButton?: boolean;
}

const SideBarItem = (props: SideBarItemProps) => {
  const { label, className, value, children, isButton, ...otherProps } = props;
  const sidebarContextConsumer = useContext(SideBarContext);
  if (!sidebarContextConsumer) throw new Error("No context available");

  const { activeStep, onClick, onKeyDown } = sidebarContextConsumer;

  const wrapperClassName =
    activeStep === value
      ? `${css.sidebarItem} ${css.sidebarActiveItem} ${className}`
      : `${css.sidebarItem} ${className}`;
  return (
    <button
      {...otherProps}
      value={value}
      type="button"
      className={wrapperClassName}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {label}
    </button>
  );
};

SideBar.Item = SideBarItem;

export default SideBar;
