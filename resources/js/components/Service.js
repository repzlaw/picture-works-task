import Axios from 'axios'

import BASE_URL from '../Constant.js'
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