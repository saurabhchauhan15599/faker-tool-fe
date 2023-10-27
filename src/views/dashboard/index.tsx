import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicModalDialog from "../../components/base/modal";
import DataGrid from "../../components/common/data-grid";
import Header from "../../components/common/header";
import SideBar from "../../components/common/sidebar";
import AddForm from "../../components/common/table-form";
import UpdateForm from "../../components/common/update-form";
import notify from "../../helpers/toastify-helper";
import { Client, Employee, Project } from "../../helpers/types";
import {
  deleteClient,
  getClients,
  saveClients,
  updateClient,
} from "../../services/client.service";
import {
  deleteEmployee,
  getEmployees,
  saveEmployees,
  updateEmployee,
} from "../../services/employee.service";
import {
  deleteProject,
  getProjects,
  saveProjects,
  updateProject,
} from "../../services/project.service";
import css from "./index.module.scss";
import { columnsClient, columnsEmployees, columnsProjects } from "./utils";

interface IState {
  isLoading: boolean;
  silentLoading: boolean;
  generate: boolean;
  edit: boolean;
  currentStep: number;
  tableData: any;
  user: any;
}

interface IEmployeeForm {
  employees: IEmployee[];
}

interface IUpdateForm {
  name: string;
  companySize: string;
  representativeName: string;
  businessUnit: string;
  status: {
    label?: string;
    value?: string;
  };
  salary: string;
  designation: {
    label?: string;
    value?: string;
  };
}

interface IEmployee {
  limit: string;
  min: string;
  max: string;
  designation: {
    label?: string;
    value?: string;
  };
}

const Dashboard = () => {
  const [limit, setLimit] = useState("");
  const [userData, setUserData] = useState<IState>({
    isLoading: false,
    silentLoading: true,
    currentStep: 0,
    tableData: [],
    generate: false,
    edit: false,
    user: {},
  });

  const { currentStep, tableData, generate, silentLoading, edit, user } =
    userData;

  useEffect(() => {
    fetchClients();
  }, [currentStep, silentLoading]);

  const fetchClients = async () => {
    const res =
      currentStep === 0
        ? await getClients()
        : currentStep === 1
        ? await getProjects()
        : await getEmployees();
    if (res)
      setUserData((prev) => ({
        ...prev,
        tableData: res,
      }));
  };

  const registerForm = useForm<IEmployeeForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    // resolver: yupResolver(employeeFormSchema),
    defaultValues: {
      employees: [
        {
          limit: "",
          min: "",
          max: "",
          designation: {},
        },
      ],
    },
  });

  const updateForm = useForm<IUpdateForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      companySize: "",
      representativeName: "",
      businessUnit: "",
      status: {},
      salary: "",
      designation: {},
    },
  });

  const { setValue } = updateForm;

  useEffect(() => {
    setValue("name", user?.name);
    setValue("companySize", user?.companySize);
    setValue("representativeName", user?.representativeName);
    setValue("businessUnit", user?.businessUnit);
    setValue("status", { label: user?.status, value: user?.status });
    setValue("designation", {
      label: user?.designation,
      value: user?.designation,
    });
    setValue("salary", user?.salary);
  }, [user]);

  const handleSubmit = async (data: IEmployeeForm) => {
    console.log(data);
    const reqd_data = data.employees.map((val) => ({
      ...val,
      designation: val.designation.label,
      salary: {
        min: val.min,
        max: val.max,
      },
    }));

    const res = await saveEmployees({ employees: reqd_data });
    setUserData((prev) => ({
      ...prev,
      silentLoading: !prev.silentLoading,
      generate: !prev.generate,
    }));
    console.log(res);
    notify({
      message: "Employees Added",
      severity: "success",
    });
  };

  const onFormSubmit = async () => {
    const res: any =
      currentStep === 0
        ? await saveClients({ limit: limit })
        : currentStep === 1
        ? await saveProjects({ limit: limit })
        : null;

    notify({
      message: res.message,
      severity: "success",
    });
    setUserData((prev) => ({
      ...prev,
      silentLoading: !prev.silentLoading,
      generate: !prev.generate,
    }));
  };

  const handleUpdateSubmit = async (data: IUpdateForm) => {
    const filtered_values = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined)
    );
    const gettingDeg = {
      ...filtered_values,
      designation: filtered_values.designation.label,
      status: filtered_values.status.label,
    };
    const formData = {
      ...user,
      ...gettingDeg,
    };

    const res: any =
      currentStep === 0
        ? await updateClient(user?.clientId, formData)
        : currentStep === 1
        ? await updateProject(user.projectId, formData)
        : await updateEmployee(user.employeeId, formData);

    if (res) console.log(res);
    setUserData((prev) => ({
      ...prev,
      edit: !prev.edit,
      silentLoading: !prev.silentLoading,
    }));
  };

  const handleDelete = async (value: any) => {
    const res =
      currentStep === 0
        ? await deleteClient(value?.clientId)
        : currentStep === 1
        ? await deleteProject(value?.projectId)
        : await deleteEmployee(value.employeeId);
    console.log(res);
    setUserData((prev) => ({ ...prev, silentLoading: !prev.silentLoading }));
  };

  const handleEdit = (value: Client | Project | Employee) => {
    setUserData((prev) => ({
      ...prev,
      edit: !prev.edit,
      user: value,
    }));
  };

  const columnClient = columnsClient({
    handleDelete,
    handleEdit,
  });

  const columnProjects = columnsProjects({
    handleDelete,
    handleEdit,
  });

  const columnEmployees = columnsEmployees({
    handleDelete,
    handleEdit,
  });

  const [documentColumn, documentData] = useMemo(() => {
    const column: any =
      currentStep === 0
        ? columnClient
        : currentStep === 1
        ? columnProjects
        : columnEmployees;

    const row = tableData;

    return [column, row];
  }, [tableData, currentStep]);

  const handleNavigation = (value: number) => {
    setLimit("");
    setUserData((prev) => ({ ...prev, currentStep: value }));
  };

  return (
    <>
      <Header
        handleCLick={() =>
          setUserData((prev) => ({ ...prev, generate: !prev.generate }))
        }
      />
      <div className={css.container}>
        <section className={css.primary}>
          <SideBar
            onClick={handleNavigation}
            onEnter={handleNavigation}
            activeStep={currentStep}
          >
            <SideBar.Item label="Clients" value={0} />
            <SideBar.Item label="Projects" value={1} />
            <SideBar.Item label="Employees" value={2} />
          </SideBar>
        </section>
        <section className={css.secondary}>
          {!!documentData.length && (
            <DataGrid columns={documentColumn} data={documentData} />
          )}
        </section>
        <BasicModalDialog
          open={generate}
          width={1000}
          setOpen={() =>
            setUserData((prev) => ({
              ...prev,
              generate: !prev.generate,
            }))
          }
        >
          <FormProvider {...registerForm}>
            <AddForm
              setLimit={setLimit}
              handleSubmit={onFormSubmit}
              limit={limit}
              handleClose={() =>
                setUserData((prev) => ({
                  ...prev,
                  generate: !prev.generate,
                }))
              }
              type={
                currentStep === 0
                  ? "Client"
                  : currentStep === 1
                  ? "Project"
                  : "Employee"
              }
              onSubmit={handleSubmit}
            />
          </FormProvider>
        </BasicModalDialog>
        <BasicModalDialog
          open={edit}
          setOpen={() =>
            setUserData((prev) => ({
              ...prev,
              edit: !prev.edit,
            }))
          }
        >
          <FormProvider {...updateForm}>
            <UpdateForm
              onFormSubmit={handleUpdateSubmit}
              handleClose={() =>
                setUserData((prev) => ({
                  ...prev,
                  edit: !prev.edit,
                }))
              }
              type={
                currentStep === 0
                  ? "Client"
                  : currentStep === 1
                  ? "Project"
                  : "Employee"
              }
            />
          </FormProvider>
        </BasicModalDialog>
      </div>
    </>
  );
};

export default Dashboard;
