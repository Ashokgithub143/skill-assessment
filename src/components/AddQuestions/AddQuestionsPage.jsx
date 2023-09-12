import styles from './AddQuestionsPage.module.css';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import {AddQuestions} from './AddQuestions';

const AddQuestionsPage = () => {
    return(
        <>
            <div className = {styles.left}>
                <SideMenu/>
            </div>
            <div className = {styles.right}>
                <AddQuestions/>
            </div>
        </>
    );
}

export {AddQuestionsPage};