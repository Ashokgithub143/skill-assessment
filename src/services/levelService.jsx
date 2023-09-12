import axios from '../../api/api'

const GET_LEVELS_URL = 'api/Levels/getlevels'

const getLevels = async() => {
    try{
        const response = await axios.get(GET_LEVELS_URL);
        return response.data;
    }
    catch(error){
        return error;
    }
}

export {getLevels}