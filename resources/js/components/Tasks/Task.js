import React,{useState,useEffect} from 'react';
import '../Assets/Style.css'
import {Spinner,Container,Row,Col,Card,Badge,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import  {toggleTaskStatus} from '../Service';


function Task(props) {
    const [item,setItem] = useState(props.task);
    const handleMarkTaskToggle = async () => {
        const response = await toggleTaskStatus(props.task.id)
        setItem(()=>{
            return response.data.data;
        });
    }
    return (
        <div>
            <Card className="mt-2 task-card card card-shadow-lg" key={item.id} >
                <Card.Body>
                    <div className="mb-2 row" >
                        <Card.Text>
                            <strong className='label'>{item.label}</strong> 
                            { item.completed_at==null?
                                <Badge bg="primary" className="status-badge float-end mb-3" >Ongoing</Badge>:
                                <Badge bg="success" className="status-badge float-end mb-3" >Completed</Badge>
                            }
                        </Card.Text>
                    </div>

                    <Card.Subtitle className="mb-2" style={{display: 'flex', justifyContent: 'center'}}>
                        <small className="me-5 text-muted"> <strong>Created: </strong>  {item.created_at}</small>
                        
                        {item.completed_at &&
                            (<small className="ms-5 text-muted"> <strong>Completed:</strong> {item.completed_at}</small>)
                        }
                    </Card.Subtitle>
                    
                    <Link to="" >
                        <Button variant="outline-primary" className="button-text">Edit</Button>
                    </Link>
                    {item.completed_at == null?
                    <Button variant="outline-success" className="ml-4 button-text float-end" id={item.id} onClick={handleMarkTaskToggle}>Mark completed</Button>:
                    <Button variant="outline-warning" className="ml-4 button-text float-end" id={item.id} onClick={handleMarkTaskToggle}>Mark not completed</Button>
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Task;

