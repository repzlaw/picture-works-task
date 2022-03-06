import React,{useState,useEffect} from 'react';
import '../Assets/Style.css'
import {Spinner,Container,Row,Col,Card,Badge,Button,Modal} from 'react-bootstrap'
import { Link } from "react-router-dom";
import  Task  from "./Task";
import  Create  from "./Create";
import  Edit  from "./Edit";
import  {getAllTasks,saveTask} from '../Service';


function Index() {
    const [tasks,setTasks] = useState([]);
    const [loading,setLoading] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [errors,setErrors] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getAllTasks()
            setTasks(previousTasks=>{
                return[...response.data.data]
            });
        }
        fetchTasks();
        setLoading(true);
    }, []); 

    const addTaskHandler = async (label) =>{
        const response =  await saveTask(label)
        if (response.status === 422) {
            setErrors(previousErrors=>{
                return[...response.errors.label]
            });
        }
        if (response.status ==='success') {
            alert(response.message);
            setTasks(previousTasks=>{
                return[...previousTasks, response.data]
            });
            setModalShow(false)
        }
    }


    return (
        <Container>
            {!loading &&(
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
                </div>
            )}
            <Row className="g-3" className='mt-4 justify-content-center'>
                <Col xs={12} md={8}>
                    <h4 className='mb-4'>Tasks
                        <Button variant="primary" className='float-end' onClick={() => setModalShow(true)}>
                            Add Task
                        </Button>

                        <Create
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            onAdd={addTaskHandler}
                            errors={errors}
                        />
                    </h4>



                    <div>
                        {tasks.length > 0 && 
                            tasks.map((task, index) => {
                                return (
                                    <Task task={task} key={index}/>
                                )
                            })
                        }
                        {tasks.length === 0 && 
                            <h6>No Task Found</h6>
                        
                        }
                        
                    </div>
                </Col>
            </Row>
            
        </Container>
    );
}

export default Index;

