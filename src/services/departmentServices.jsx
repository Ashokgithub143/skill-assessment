import axios from '../../api/api'

const GET_DEPARTMENTS_URL = 'api/Departments/getdepartments'
const POST_DEPARTMENT_URL = 'api/Departments/postdepartment'

const getDepartments = async() => {
    try{
        const response = await axios.get(GET_DEPARTMENTS_URL);
        return response.data;
    }
    catch(error){
        return error;
    }
}

const postDepartment = async(data) => {
    try{
        const response = await axios.post(POST_DEPARTMENT_URL, data, {
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

export {getDepartments, postDepartment}