import moment from "moment";
import { CellProps } from "react-table";
import PenIcon from "../../assets/icons/PenIcon";
import TrashCanIcon from "../../assets/icons/TrashCanIcon";
import Typography from "../../components/base/typography";
import { Client, Employee, Project } from "../../helpers/types";
import { getCommaSeparatedValue } from "../../helpers/utils";
import css from "./index.module.scss";

export const columnsClient = ({
  handleDelete = (_value: Client) => {},
  handleEdit = (_value: Client) => {},
}) => {
  return [
    {
      Header: "Name",
      accessor: "name",
      Cell: (props: CellProps<Client>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Email",
      accessor: "email",
      Cell: (props: CellProps<Client>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Company Size",
      accessor: "companySize",
      Cell: (props: CellProps<Client>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Contact",
      accessor: "contact",
      Cell: (props: CellProps<Client>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Rep. Name",
      accessor: "representativeName",
      Cell: (props: CellProps<Client>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Rep. Contact",
      accessor: "representativeContact",
      Cell: (props: CellProps<Client>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (props: CellProps<Client>) => {
        return (
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <PenIcon onClick={() => handleEdit(props.row.original)} />
            <TrashCanIcon onClick={() => handleDelete(props.row.original)} />
          </div>
        );
      },
    },
  ];
};

export const columnsProjects = ({
  handleDelete = (_value: Project) => {},
  handleEdit = (_value: Project) => {},
}) => {
  return [
    {
      Header: "Name",
      accessor: "name",
      Cell: (props: CellProps<Project>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Business Unit",
      accessor: "businessUnit",
      Cell: (props: CellProps<Project>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Start Date",
      accessor: "startDate",
      Cell: (props: CellProps<Project>) => {
        const { value } = props;
        return (
          <Typography className={css.text}>
            {moment(value).format("DD/MM/YY")}
          </Typography>
        );
      },
    },
    {
      Header: "End Date",
      accessor: "endDate",
      Cell: (props: CellProps<Project>) => {
        const { value } = props;
        return (
          <Typography className={css.text}>
            {moment(value).format("DD/MM/YY")}
          </Typography>
        );
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: (props: CellProps<Project>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (props: CellProps<Project>) => {
        return (
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <PenIcon onClick={() => handleEdit(props.row.original)} />
            <TrashCanIcon onClick={() => handleDelete(props.row.original)} />
          </div>
        );
      },
    },
  ];
};

export const columnsEmployees = ({
  handleDelete = (_value: Employee) => {},
  handleEdit = (_value: Employee) => {},
}) => {
  return [
    {
      Header: "Name",
      accessor: "name",
      Cell: (props: CellProps<Employee>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Email",
      accessor: "emailId",
      Cell: (props: CellProps<Employee>) => {
        const { value } = props;
        return (
          <Typography
            title={value}
            className={[css.text, css.whiteSpace].join(" ")}
          >
            {value}
          </Typography>
        );
      },
    },
    {
      Header: "Salary",
      accessor: "salary",
      Cell: (props: CellProps<Employee>) => {
        const { value } = props;
        return (
          <Typography
            title={value}
            className={[css.text, css.whiteSpace].join(" ")}
          >
            ₹{getCommaSeparatedValue(value)}
          </Typography>
        );
      },
    },
    {
      Header: "Department",
      accessor: "department",
      Cell: (props: CellProps<Employee>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Designation",
      accessor: "designation",
      Cell: (props: CellProps<Employee>) => {
        const { value } = props;
        return (
          <Typography
            title={value}
            className={[css.text, css.whiteSpace].join(" ")}
          >
            {value}
          </Typography>
        );
      },
    },
    {
      Header: "Employee Status",
      accessor: "empStatus",
      Cell: (props: CellProps<Employee>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Reporting To",
      accessor: "reportingTo",
      Cell: (props: CellProps<Employee>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Business Unit",
      accessor: "businessUnit",
      Cell: (props: CellProps<Employee>) => {
        const { value } = props;
        return <Typography className={css.text}>{value}</Typography>;
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (props: CellProps<Employee>) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              margin: "0 1rem",
            }}
          >
            <PenIcon onClick={() => handleEdit(props.row.original)} />
            <TrashCanIcon onClick={() => handleDelete(props.row.original)} />
          </div>
        );
      },
    },
  ];
};
