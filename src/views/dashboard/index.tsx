import { useEffect, useMemo, useState } from "react";
import DataGrid from "../../components/common/data-grid";
import SideBar from "../../components/common/sidebar";
import { Client, Employee, Project } from "../../helpers/types";
import { getClients } from "../../services/client.service";
import { getEmployees } from "../../services/employee.service";
import { getProjects } from "../../services/project.service";
import css from "./index.module.scss";
import { columnsClient, columnsEmployees, columnsProjects } from "./utils";

interface IState {
  isLoading: boolean;
  currentStep: number;
  tableData: any;
}

const Dashboard = () => {
  const [userData, setUserData] = useState<IState>({
    isLoading: false,
    currentStep: 0,
    tableData: [],
  });
  const { isLoading, currentStep, tableData } = userData;

  useEffect(() => {
    fetchClients();
  }, [currentStep]);

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
    console.log(res);
  };

  const handleDelete = (value: Client | Project | Employee) => {
    console.log(value);
  };

  const handleEdit = (value: Client | Project | Employee) => {
    console.log(value);
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
    setUserData((prev) => ({
      ...prev,
      currentStep: value,
    }));
  };

  return (
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
        <DataGrid columns={documentColumn} data={documentData} />
      </section>
    </div>
  );
};

export default Dashboard;
