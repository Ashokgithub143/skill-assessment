import styles from "./CreateAssessmentCards.module.css";
import { EmployeeAssess } from "./EmployeeAssess";
import { JobSeeker } from "./JobSeeker";

const CreateAssessment = () => {
  return (
    <div className={styles.assessment_Grid}>
      <div className={styles.job_Seeker}>
        <JobSeeker />
      </div>
      <div className={styles.employee_Assess}>
        <EmployeeAssess />
      </div>
    </div>
  );
};

export { CreateAssessment };
