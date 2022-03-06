import React,{useState,useEffect} from 'react';
import '../Assets/Style.css'
import {Spinner,Container,Row,Col,Card,Badge,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import  Task  from "./Task";
import BASE_URL from "../../Constant"
import  {getAllTasks} from '../Service';


function Index() {
    const [tasks,setTasks] = useState([]);
    const [loading,setLoading] = useState(false);
    const items = [
        {
            "id":1,
             "label":"mac",
             "completed_at":'8457'
        },
         {
            "id":2,
             "label":"dell",
             "completed_at":null

        },
    ]

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
                    <h4>Tasks</h4>
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
                </Col>
            </Row>
            
        </Container>
    );
}

export default Index;

