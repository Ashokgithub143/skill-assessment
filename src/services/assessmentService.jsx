import axios from '../api/api'

const GET_ASSESSMENTS_URL = 'api/Assessment/getassessments'
const GET_ASSESSMENTTOPICS_URL = 'api/Assessment/getassessmenttopics'

const getAllAssessments = async () => {
    try{
        const response = await axios.get(GET_ASSESSMENTS_URL);
        return response.data;
    }
    catch(error){
        return error;
    }
  }
  const getAllAssessmentTopics = async () => {
    try{
        const response = await axios.get(GET_ASSESSMENTTOPICS_URL);
        return response.data;
    }
    catch(error){
        return error;
    }
  }


  export {getAllAssessments, getAllAssessmentTopics}