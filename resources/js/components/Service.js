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

//save task
export const saveTask = async (label) => {
  
  try{
    const task = {
      label: label,
    }
      const {data:{message,status,data}} =   await Axios.post(`${BASE_URL}/tasks`,task);
      return {
          status,
          data,
          message
        };
    }
    catch(error){
      const  {status, data:{errors}} =error.response
      return {
        status,
        errors
      }
    }
}

//update task
export const updateTask =  async(label,id)=> {
  try{
      const task = {
        label: label,
      }
        const {data:{message,status,data}} =   await Axios.put(`${BASE_URL}/tasks/${id}`,task);
        return {
            status,
            data,
            message
          };
      }
      catch(error){
        const  {status, data:{errors}} =error.response
        return {
          status,
          errors
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

// get sorted tasks
export function getSortedTask(oldTasks, newTasks) {
  const finalTasks = [];
  oldTasks.forEach((task1, index1) => {
      newTasks.forEach((task2, index2) => {
          if (task1.id === task2.id && index1 !== index2) {
              finalTasks.push({
                  id: task1.id,
                  sort_order: index2+1,
                  label: task1.label,
              });
          }
      });
  });
  return finalTasks;
}

export const updateTaskOrders =  async(updatedTasks)=> {
  try{
        const {data:{message,status,data}} =  await Axios.post(`${BASE_URL}/tasks/update-order`,updatedTasks)
        return {
            status,
            data,
            message
          };
      }
      catch(error){
        const  {status, data:{errors}} =error.response
        return {
          status,
          errors
        }
  }
}