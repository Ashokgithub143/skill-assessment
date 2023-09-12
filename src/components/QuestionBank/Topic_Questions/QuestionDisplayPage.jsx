import styles from "./QuestionDisplayPage.module.css";
import QuestionDisplay from "./question_display";
import Header from "../../Header/Header";
import SideMenu from "../../SideMenu/SideMenu";

const QuestionDisplayPage = () => {
  return (
    <>
    <Header />
        <SideMenu />
    <div className="container" style={{marginLeft:'20%'}}>
      <div className={styles.displayGrid}>
        
        <div className={styles.questionDisplayPage}>
          <QuestionDisplay />
        </div>
      </div>
      </div>
    </>
  );
};

export { QuestionDisplayPage };
