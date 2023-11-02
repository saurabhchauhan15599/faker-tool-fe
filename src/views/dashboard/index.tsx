import { yupResolver } from "@hookform/resolvers/yup";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicModalDialog from "../../components/base/modal";
import { Select } from "../../components/base/select";
import Paginator from "../../components/common/Paginator/Paginator";
import { dropDownOptions } from "../../components/common/Paginator/constant";
import DataGrid from "../../components/common/data-grid";
import Header from "../../components/common/header";
import NoDocumentPlaceholder from "../../components/common/no-document-placeholder";
import SideBar from "../../components/common/sidebar";
import AddForm from "../../components/common/table-form";
import TextField from "../../components/common/text-field";
import UpdateForm from "../../components/common/update-form";
import {
  CLIENT_DROPDOWN,
  EMPLOYEE_DROPDOWN,
  PROJECT_DROPDOWN,
} from "../../helpers/constant";
import {
  employeeSchema,
  updateFormSchema,
} from "../../helpers/schema/employee.schema";
import notify from "../../helpers/toastify-helper";
import { Client, Employee, Project } from "../../helpers/types";
import { paginate } from "../../helpers/utils";
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
  Limit: number;
  skip: number;
  totalRecords: number;
  selectLimit: { id: number; label: string; value: number };
  filter: { id: number; label: string; value: string };
  search: string;
}

interface ILabelProps {
  id: number;
  label: string;
  value: string;
}

interface IEmployeeGenerateForm {
  employees?: IEmployee[];
}

interface IUpdateForm {
  name: string;
  companySize: string;
  representativeName: string;
  businessUnit: string;
  emailId: string;
  status: string;
  salary: string;
  designation: string;
  empStatus: string;
}

interface IEmployee {
  limit: string;
  min: string;
  max: string;
  designation: string;
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
    skip: 0,
    Limit: 10,
    search: "",
    selectLimit: dropDownOptions[0],
    filter: { id: 0, label: "", value: "" },
    totalRecords: 0,
  });

  const {
    currentStep,
    tableData,
    generate,
    silentLoading,
    edit,
    user,
    isLoading,
    skip,
    Limit,
    totalRecords,
    selectLimit,
    filter,
    search,
  } = userData;

  const deferredValue = useDeferredValue(search);

  useEffect(() => {
    fetchClients();
  }, [currentStep, silentLoading, skip, Limit, deferredValue]);

  const fetchClients = async () => {
    setUserData((prev) => ({ ...prev, isLoading: !prev.isLoading }));
    const res: any =
      currentStep === 0
        ? await getClients(skip, Limit, filter.value, deferredValue)
        : currentStep === 1
        ? await getProjects(skip, Limit, filter?.value, deferredValue)
        : await getEmployees(skip, Limit, filter?.value, deferredValue);
    if (res.statusCode === 200) {
      setUserData((prev) => ({
        ...prev,
        tableData: res.data,
        totalRecords: res.totalRecords,
        isLoading: !prev.isLoading,
      }));
    } else {
      setUserData((prev) => ({ ...prev, isLoading: !prev.isLoading }));
    }
  };

  const registerForm = useForm<IEmployeeGenerateForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      employees: [
        {
          limit: "",
          min: "",
          max: "",
          designation: "",
        },
      ],
    },
  });
  const { reset } = registerForm;

  const updateForm = useForm<IUpdateForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(updateFormSchema),
    defaultValues: {
      name: "",
      companySize: "",
      representativeName: "",
      businessUnit: "",
      status: "",
      salary: "",
      empStatus: "",
      emailId: "",
      designation: "",
    },
  });

  const { setValue } = updateForm;

  useEffect(() => {
    setValue("name", user?.name);
    setValue("emailId", user?.emailId);
    setValue("companySize", user?.companySize);
    setValue("representativeName", user?.representativeName);
    setValue("businessUnit", user?.businessUnit);
    setValue("status", user?.status);
    setValue("designation", user?.designation);
    setValue("salary", user?.salary);
    setValue("businessUnit", user?.businessUnit);
    setValue("empStatus", user?.empStatus);
  }, [user]);

  const handleSubmit = async (data: IEmployeeGenerateForm) => {
    const reqd_data = data?.employees?.map((val) => ({
      ...val,
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
      search: "",
      filter: { id: 0, label: "", value: "" },
    }));
    setLimit("");
    if (res) {
      notify({
        message: "Employees Added",
        severity: "success",
      });
    } else {
      notify({
        message: "Something Happened!",
        severity: "error",
      });
    }
    reset();
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
      search: "",
      filter: { id: 0, label: "", value: "" },
    }));
    setLimit("");
  };

  const handleUpdateSubmit = async (data: IUpdateForm) => {
    const filtered_values = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined)
    );

    const gettingDeg = {
      ...filtered_values,
      designation: filtered_values.designation,
      status: filtered_values.status,
    };
    const formData = {
      ...user,
      ...gettingDeg,
    };

    // const formDataWithoutId = Object.fromEntries(
    //   Object.keys(formData)
    //     .filter((key) => key !== "_id")
    //     .map((key) => [key, formData[key]])
    // );

    const res: any =
      currentStep === 0
        ? await updateClient(user?.clientId, formData)
        : currentStep === 1
        ? await updateProject(user.projectId, formData)
        : await updateEmployee(user.employeeId, formData);

    if (res) {
      notify({ message: "Updated Successfully!", severity: "success" });
    } else {
      notify({ message: "Something Happened!", severity: "error" });
    }
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
    if (res) notify({ message: "Deleted Successfully!", severity: "warning" });
    setUserData((prev) => ({ ...prev, silentLoading: !prev.silentLoading }));
  };

  const handlePageChange = (offset: number) => {
    const skipCalculated = paginate(offset, Limit);
    setUserData((prev) => ({ ...prev, skip: skipCalculated }));
  };

  const handleLimitChange = (newValue: any) => {
    setUserData((prev) => ({
      ...prev,
      Limit: newValue.value,
      selectLimit: newValue,
    }));
  };

  const handleEdit = (value: Client | Project | Employee) => {
    setUserData((prev) => ({
      ...prev,
      edit: !prev.edit,
      user: value,
    }));
  };

  const handleFilter = (newValue: unknown) =>
    setUserData((prev) => ({ ...prev, filter: newValue as ILabelProps }));

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
    setUserData((prev) => ({
      ...prev,
      currentStep: value,
      search: "",
      filter: { id: 0, label: "", value: "" },
    }));
  };

  return (
    <div className={css.container}>
      <Header
        handleCLick={() =>
          setUserData((prev) => ({ ...prev, generate: !prev.generate }))
        }
      />
      <div className={css.search}>
        <Select
          getOptionLabel={(option: any) => option.label}
          getOptionValue={(option: any) => option.value}
          isDisabled={!documentData.length}
          options={
            currentStep === 0
              ? CLIENT_DROPDOWN
              : currentStep === 1
              ? PROJECT_DROPDOWN
              : EMPLOYEE_DROPDOWN
          }
          placeholder="Select Filter.."
          menuPlacement="bottom"
          onChange={handleFilter}
          value={filter.label ? filter : ""}
        />
        <TextField
          disabled={filter.value === ""}
          value={search}
          placeholder={filter.value === "" ? "Select a filter" : "Search.."}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              search: e.target.value,
              skip: 0,
            }))
          }
        />
      </div>
      <div className={css.subContainer}>
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
          {!!documentData.length ? (
            <>
              <div className={css.grid}>
                <DataGrid columns={documentColumn} data={documentData} />
              </div>
              <div className={css.pagination}>
                <Paginator
                  currentPage={skip / Limit + 1}
                  itemsPerPage={Limit}
                  handlePageChange={handlePageChange}
                  handleSelectChange={handleLimitChange}
                  totalRecords={totalRecords}
                  isItemsPerPage
                  selectedOptions={selectLimit}
                />
              </div>
            </>
          ) : (
            <div className={css.notPresent}>
              <NoDocumentPlaceholder
                onClick={() =>
                  setUserData((prev) => ({ ...prev, generate: !prev.generate }))
                }
              />
            </div>
          )}
        </section>
      </div>
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
        width={1000}
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
  );
};

export default Dashboard;
