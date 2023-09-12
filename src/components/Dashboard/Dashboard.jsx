import styles from "./Dashboard.module.css";
import { CreateAssessment } from "./AssessmentForms/CreateAssessment";
import Explorecard from "./Card/Explorecard";

import {DrawerHeight, DrawerStyled} from '../../components/Dashboard/Card/StyledElementsMui';

const Dashboard = () => {

  return (
    <DrawerStyled>
      <div className={styles.grid}>
        <DrawerHeight>
        <Explorecard></Explorecard>   
        </DrawerHeight>    
      </div>
    </DrawerStyled>
  );
};

export { Dashboard };
