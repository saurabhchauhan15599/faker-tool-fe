import AlertError from "../assets/icons/AlertError";
import AlertInfo from "../assets/icons/AlertInfo";
import AlertSuccess from "../assets/icons/AlertSuccess";
import AlertWarning from "../assets/icons/AlertWarning";
import CrossBlue from "../assets/icons/CrossBlue";
import CrossGreen from "../assets/icons/CrossGreen";
import CrossRed from "../assets/icons/CrossRed";
import CrossYellow from "../assets/icons/CrossYellow";

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

export const SERVER_CONFIG = {
  client: "client",
  project: "project",
  employee: "employee",
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

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Images: any = {
  alertError: AlertError,
  alertSuccess: AlertSuccess,
  alertInfo: AlertInfo,
  alertWarning: AlertWarning,
  crossRed: CrossRed,
  crossGreen: CrossGreen,
  crossBlue: CrossBlue,
  crossYellow: CrossYellow,
};

export const designationDropdown = [
  { id: 1, label: "Senior QA Engineer", value: "Senior_QA_Engineer" },
  {
    id: 2,
    label: "Business Unit Head- Healthcare",
    value: "Business_Unit_Head-_Healthcare",
  },
  { id: 3, label: "Office Assistant", value: "Office_Assistant" },
  { id: 4, label: "Director", value: "Director" },
  { id: 5, label: "Associate Data Engineer", value: "Associate_Data_Engineer" },
  { id: 6, label: "Senior Data Engineer", value: "Senior_Data_Engineer" },
  {
    id: 7,
    label: "Senior Data Quality Analyst",
    value: "Senior_Data_Quality_Analyst",
  },
  { id: 8, label: "Legal Officer", value: "Legal_Officer" },
  {
    id: 9,
    label: "Associate Solutions Architect",
    value: "Associate_Solutions_Architect",
  },
  { id: 10, label: "Technical Architect", value: "Technical_Architect" },
  {
    id: 11,
    label: "Vendor Management Associate",
    value: "Vendor_Management_Associate",
  },
  { id: 12, label: "UX Writer", value: "UX_Writer" },
  { id: 13, label: "Software Engineer", value: "Software_Engineer" },
  {
    id: 14,
    label: "Market Research Analyst",
    value: "Market_Research_Analyst",
  },
  { id: 15, label: "Lead - Data Quality", value: "Lead_-_Data_Quality" },
  { id: 16, label: "Lead UX Designer", value: "Lead_UX_Designer" },
  {
    id: 17,
    label: "Associate Director - HR",
    value: "Associate_Director_-_HR",
  },
  {
    id: 18,
    label: "Associate Architect DevOps",
    value: "Associate_Architect_DevOps",
  },
  {
    id: 19,
    label: "Associate Software Engineer",
    value: "Associate_Software_Engineer",
  },
  { id: 20, label: "SDET", value: "SDET" },
  {
    id: 21,
    label: "Head of Content Writing",
    value: "Head_of_Content_Writing",
  },
  {
    id: 22,
    label: "Senior Big Data Engineer",
    value: "Senior_Big_Data_Engineer",
  },
  { id: 23, label: "Senior Data Analyst", value: "Senior_Data_Analyst" },
  {
    id: 24,
    label: "Associate Manager Business Development",
    value: "Associate_Manager_Business_Development",
  },
  {
    id: 25,
    label: "Associate Sales Director - DevOps",
    value: "Associate_Sales_Director_-_DevOps",
  },
  { id: 26, label: "Content Marketer", value: "Content_Marketer" },
  { id: 27, label: "Solutions Architect", value: "Solutions_Architect" },
  {
    id: 28,
    label: "Associate Manager - Digital Transformation",
    value: "Associate_Manager_-_Digital_Transformation",
  },
  {
    id: 29,
    label: "Talent Acquisition Specialist",
    value: "Talent_Acquisition_Specialist",
  },
  {
    id: 30,
    label: "Senior Executive - Sales",
    value: "Senior_Executive_-_Sales",
  },
  {
    id: 31,
    label: "Associate Project Manager",
    value: "Associate_Project_Manager",
  },
  {
    id: 32,
    label: "DevOps Business Unit Head",
    value: "DevOps_Business_Unit_Head",
  },
  { id: 33, label: "Lead Data Engineer", value: "Lead_Data_Engineer" },
  {
    id: 34,
    label: "Senior Python Developer",
    value: "Senior_Python_Developer",
  },
  { id: 35, label: "Presales Expert", value: "Presales_Expert" },
  {
    id: 36,
    label: "Associate Director - Digital Transformation",
    value: "Associate_Director_-_Digital_Transformation",
  },
  { id: 37, label: "Finance Associate", value: "Finance_Associate" },
  { id: 38, label: "Legal Manager", value: "Legal_Manager" },
  { id: 39, label: "Associate UX Writer", value: "Associate_UX_Writer" },
  {
    id: 40,
    label: "Senior Business Analyst",
    value: "Senior_Business_Analyst",
  },
  { id: 41, label: "HR Executive", value: "HR_Executive" },
  { id: 42, label: "Associate Manager- HR", value: "Associate_Manager-_HR" },
  { id: 43, label: "Head - Marketing", value: "Head_-_Marketing" },
  { id: 44, label: "UX Designer", value: "UX_Designer" },
  {
    id: 45,
    label: "Senior Software Developer",
    value: "Senior_Software_Developer",
  },
  {
    id: 46,
    label: "Associate Director - L & D",
    value: "Associate_Director_-_L_&_D",
  },
  {
    id: 47,
    label: "Associate Director - Technology",
    value: "Associate_Director_-_Technology",
  },
  { id: 48, label: "Tech Lead", value: "Tech_Lead" },
  { id: 49, label: "System Admin", value: "System_Admin" },
  {
    id: 50,
    label: "Associate Director - Talent Acquisition",
    value: "Associate_Director_-_Talent_Acquisition",
  },
  {
    id: 51,
    label: "Sr. Market Research Analyst",
    value: "Sr._Market_Research_Analyst",
  },
  { id: 52, label: "Lead Database Engineer", value: "Lead_Database_Engineer" },
  { id: 53, label: "Senior Product Manager", value: "Senior_Product_Manager" },
  { id: 54, label: "DevOps Engineer", value: "DevOps_Engineer" },
  { id: 55, label: "Senior Solutions Architect", value: "Senior_S" },
];

export const STATUS_DROPDOWN = [
  { id: 1, label: "Upcoming", value: "upcoming" },
  { id: 2, label: "Ongoing", value: "ongoing" },
  { id: 3, label: "Completed", value: "completed" },
  { id: 4, label: "Overdue", value: "overdue" },
];

export const CLIENT_DROPDOWN = [
  { id: 1, value: "name", label: "Name" },
  { id: 2, value: "email", label: "Email" },
  { id: 3, value: "contact", label: "Contact" },
  { id: 4, value: "companyDomain", label: "Company Domain" },
  { id: 5, value: "representativeName", label: "Representative Name" },
  { id: 6, value: "representativeContact", label: "Representative Contact" },
];

export const EMPLOYEE_DROPDOWN = [
  { id: 1, value: "name", label: "Name" },
  { id: 2, value: "emailId", label: "Email" },
  { id: 4, value: "department", label: "Department" },
  { id: 5, value: "designation", label: "Designation" },
  { id: 6, value: "empStatus", label: "Employee Status" },
  { id: 7, value: "businessUnit", label: "Business Unit" },
  { id: 8, value: "reportingTo", label: "Reporting To" },
];

export const PROJECT_DROPDOWN = [
  { id: 1, value: "name", label: "Name" },
  { id: 2, value: "services", label: "Services" },
  { id: 3, value: "status", label: "Status" },
  { id: 4, value: "type", label: "Type" },
];

export default Images;
