export type typographyVariantType =
  | "h1"
  | "h2"
  | "h2mid"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h6"
  | "subheading1"
  | "subheading2"
  | "subheading3"
  | "body"
  | "body2"
  | "span"
  | "p"
  | "ptext"
  | "pdoc"
  | "label"
  | "label2"
  | "inherit";

export type buttonVariantType =
  | "contained"
  | "outlined"
  | "outlined-secondary"
  | "text";
export type chipVariantType =
  | "filled"
  | "outlined"
  | "filled-blue"
  | "filled-red"
  | "filled-yellow"
  | "filled-green";
export type chipPriorityType = "High" | "Low" | "Medium" | "Critical";
export type severityType = "error" | "info" | "success" | "warning" | "none";
export type statusChipVariantType =
  | "filled-yellow"
  | "filled-green"
  | "filled-red";

export interface IUserSliceState {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface IEmailField {
  email: string;
}

export interface ILoginCredential {
  email: string;
  password: string;
}

export interface IPasswordSetup extends ILoginCredential {
  confirmPassword: string;
}

export interface IPasswordResetParam {
  password: string;
  token: string;
  uidb64: string;
}

export interface ISelect {
  label: string;
  value: string;
}

export type SVGProps = JSX.IntrinsicElements["svg"];

export interface Client {
  clientId: string;
  name: string;
  companySize: number;
  contact: string;
  email: string;
  salesCoordinator: string;
  agreementType: string;
  dateOfClientOnboarding: Date;
  location: string;
  address: string;
  companyDomain: string;
  representativeName: string;
  representativeEmail: string;
  representativeContact: string;
}

export interface Employee {
  employeeId: string;
  zohoId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  costToClient: number;
  utilization: number;
  isBillable: boolean;
  profilePic: string;
  gender: string;
  bloodGroup: string;
  address: string;
  salary: number;
  empStatus: string;
  workLocation: string;
  workExperience: string;
  employmentType: string;
  workExperienceDetails: workExperienceDetails[];
  educationDetails: educationDetails[];
  reportingTo: string;
  reportingManager: string;
  leaveApprover: string;
  name: string;
  roleId: string;
  businessUnit: string;
  ctc_CURR: number;
  level: string;
  isOnBench: boolean;
  revenue_CURR: number;
  joiningDate: Date;
  dob: Date;
}

type workExperienceDetails = {
  id: string;
  toDate: Date;
  Employer: string;
  fromDate: Date;
  jobTitle: string;
  relevance: string;
};

type educationDetails = {
  degree: string;
  enddate: Date;
  university: string;
  specialization: string;
};

export interface Project {
  projectId: string;
  logo: string;
  name: string;
  type: string;
  projectManagerId: string;
  partnerId: string;
  businessUnit: string;
  description: string;
  startDate: Date;
  endDate: Date;
  services: string[];
  linkPlatform: { link: string; platform: string }[];
  status: string;
  clientId: string;
}
