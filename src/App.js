import "./App.css";
import { AddQuestionsPage } from "./components/AddQuestions/AddQuestionsPage";
import { Dashboard } from "./components/Dashboard/Dashboard";
import SearchAppBar from "./components/Header/Header";
import JobSeekerPage from "./components/JobSeeker/JobSeekerPage/JobSeekerPage";
import { QuestionDisplayPage } from "./components/QuestionBank/Topic_Questions/QuestionDisplayPage";
import Settings from "./components/Settingsform/Settings";
import ResponsiveDrawer from "./components/SideMenu/SideMenu";
import { Routes, Route, useLocation } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import ResponsiveGrid from "./components/AvailableAssesment/AvailableAssesment";
import ManageEmployeeParent from "./components/Employee/Manage_Employee/ManageEmployeeParent";
import Home_Page from "./components/QuestionBank/Home_Page/Home_page";
import EmployeeAssessmentPage from "./components/JobSeeker/EmployeeAssessmentData/EmployeeAssementPage";
import ResponsiveGridEmployee from "./components/AvailableAssesment/ResponsiveGridEmployee";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
import { AssignedModal } from "./components/Dashboard/AssignedSuccessfullyModal/AssignedModal";
import NotFound from "./components/NotFound/NotFound";
import { SharedData } from "./Context/SharedData";
import ApproveEmployee from "./components/Employee/Table/ApproveTable";

function App() {
  const location = useLocation();

  const IsSigninPage = location.pathname === "/";
  const IsNotFoundPage = location.pathname === "*";

  return (
    <SharedData>
        {!IsSigninPage && !IsNotFoundPage && <ResponsiveDrawer />}
        {!IsSigninPage && !IsNotFoundPage && <SearchAppBar />}

        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addquestions" element={<AddQuestionsPage />} />
          <Route path="/questionbank" element={<Home_Page />} />
          <Route path="/questiondisplay" element={<QuestionDisplayPage />} />
          <Route path="/jobseeker" element={<JobSeekerPage />} />
          <Route path="/assessmentdata" element={<EmployeeAssessmentPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/manage-employee" element={<ManageEmployeeParent />} />
          <Route path="/employeeassessmentdata" element={<ResponsiveGrid />} />
          <Route path="/ApproveEmployee" element={<ApproveEmployee />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </SharedData>
  );
}

export default App;
