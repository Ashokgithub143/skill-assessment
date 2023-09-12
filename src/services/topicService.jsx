import axios from '../../api/api'

const GET_TOPICS_URL = 'api/Topics/gettopics'
const POST_TOPIC_URL = 'api/Topics/posttopic'

const getTopics = async() => {
    try{
        const response = await axios.get(GET_TOPICS_URL);
        return response.data;
    }
    catch(error){
        return error;
    }
}

const postTopic = async(data) => {
    try{
        const response = await axios.post(POST_TOPIC_URL, data, {
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

export {getTopics, postTopic}