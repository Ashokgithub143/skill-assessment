import axios from '../api/api'

const POST_JOBSEEKERASSESSMENT_URL = 'api/JobseekerAssessment/postjobseekerassessment'
const GET_JOBSEEKERASSESSMENT_URL = 'api/JobseekerAssessment/getjobseekerassessments'
const PUT_CHANGECOMPLETIONDATE_URL = 'api/JobseekerAssessment/changecompletiondate'
const PUT_ADDJOBSEEKERPROFILEs_URL = 'api/JobseekerAssessment/addjobseekerprofiles'
const DELETE_JOBSEEKER_ASSESSMENT_URL = 'api/JobseekerAssessment/deletejobseekerassessment'

const getJobseekerAssessments = async() => {
    try{
        const response = await axios.get(GET_JOBSEEKERASSESSMENT_URL);
        return response.data;
    }
    catch(error){
        return error;
    }
}

const postJobseekerAssessment = async(data) => {
    try{
        const response = await axios.post(POST_JOBSEEKERASSESSMENT_URL, data, {
            headers: {
                'Content-Type': 'application/json'
              }
            }
            );
        return response.data;
    }
    catch(error){
        return error;
    }
}

const changeCompletionDateJobseeker = async(data, id) => {
    try{
        const response = await axios.put(`${PUT_CHANGECOMPLETIONDATE_URL}?id=${id}`, {
            headers: {
                'Content-Type': 'application/json'
              }
            }
            );
        return response.data;
    }
    catch(error){
        return error;
    }
}

const addjobseekerProfiles = async(data, id) => {
    try{
        const response = await axios.put(`${PUT_ADDJOBSEEKERPROFILEs_URL}?id=${id}`, {
            headers: {
                'Content-Type': 'application/json'
              }
            }
            );
        return response.data;
    }
    catch(error){
        return error;
    }
}

const deleteJobseekerAssessment = async(id) => {
    try{
        const response = await axios.delete(`${DELETE_JOBSEEKER_ASSESSMENT_URL}?id=${id}`, {
            headers: {
                'Content-Type': 'text/plain'
              }
            }
            );
        return response.data;
    }
    catch(error){
        return error;
    }
}

export {postJobseekerAssessment, getJobseekerAssessments, changeCompletionDateJobseeker, addjobseekerProfiles, deleteJobseekerAssessment}