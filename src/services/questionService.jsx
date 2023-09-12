import axios from '../../api/api'

const GET_QUESTIONS_URL = 'api/Questions/getquestions'
const POST_QUESTION_URL = 'api/Questions/postquestion'
const PUT_QUESTION_URL = 'api/Questions//putquestion'
const DELETE_QUESTION_URL = 'api/Questions//deletequestion'



const getQuestions = async() => {
    try{
        const response = await axios.get(GET_QUESTIONS_URL);
        return response.data;
    }
    catch(error){
        return error;
    }
}

const postQuestion = async(data) => {
    try{
        const response = await axios.post(POST_QUESTION_URL, data, {
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

const PutQuestion = async(data) => {
    try{
        const response = await axios.put(PUT_QUESTION_URL, data, {
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

const deleteQuestion = async(id) => {
    try{
        const response = await axios.delete(`${DELETE_QUESTION_URL}?id=${id}`, {
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

export {getQuestions, postQuestion, PutQuestion, deleteQuestion}