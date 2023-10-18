export const alertIconMapping: any = {
  error: "alertError",
  info: "alertInfo",
  success: "alertSuccess",
  warning: "alertWarning",
};

export const crossIconMapping: Record<string, string> = {
  error: "crossRed",
  info: "crossBlue",
  success: "crossGreen",
  warning: "crossYellow",
  none: "crossBlack",
};

export const typographyVariantsMapping: Record<string, string> = {
  h1: "h1",
  h2: "h2",
  h2mid: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  subheading3: "h6",
  body: "p",
  body2: "p",
  span: "span",
  p: "p",
  ptext: "span",
  pdoc: "span",
  label: "label",
  label2: "label",
  inherit: "span",
};

export const MAX_FILE_SIZE = 10485760; // 10 MB

export const DIGIT_REGEX = new RegExp(/^\d+$/);

export const ASCII_KEYS = {
  backspace: "Backspace",
  arrowRight: "ArrowRight",
  arrowLeft: "ArrowLeft",
  arrowUp: "ArrowUp",
  arrowDown: "ArrowDown",
  space: "Space",
  escape: "Escape",
  enter: "Enter",
};

export const SERVER_CONFIG = {
  users: "users",
  otpSend: "otp/send",
  otpVerify: "otp/verify",
  emailVerification: "email/isverified",
  sendEmailVerification: "send/email",
};

export const data_types_options = [
  { label: "bigint", value: "bigint" },
  { label: "boolean", value: "boolean" },
  { label: "char", value: "char" },
  { label: "date", value: "date" },
  { label: "decimal", value: "decimal" },
  { label: "float", value: "float" },
  { label: "int", value: "int" },
  { label: "varchar", value: "varchar" },
];
