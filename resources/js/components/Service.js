import Axios from 'axios'

import BASE_URL from '../Constant.js'

//get all task
export const getAllTasks = async ()=>{
  try{
    const { status, data } =   await Axios.get(`${BASE_URL}/tasks`);
    return {
      status,
      data
    };
  }
  catch(error){
    const {data:{message},status}=error.response
    return {
        status,
        message,
    }
  }
}

//toggle tasks
export const toggleTaskStatus = async (id)=>{
  try{
    const { status, data } =   await Axios.put(`${BASE_URL}/tasks/${id}/toggle-status`);
    return {
      status,
      data
    };
  }
  catch(error){
    const {data:{message},status}=error.response
    return {
        status,
        message,
    }
  }
}