import React from 'react';
import '../Assets/Style.css'
import {Spinner,Container,Row,Col,Card,Badge,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


function Task(props) {
    return (
        <div>
            <Card className="mt-2 task-card card card-shadow-lg" key={props.task.id} >
                <Card.Body>
                    <div className="mb-2 row" >
                        <Card.Text>
                            <strong className='label'>{props.task.label}</strong> 
                            { props.task.completed_at==null?
                                <Badge bg="primary" className="status-badge float-end mb-3" >Ongoing</Badge>:
                                <Badge bg="success" className="status-badge float-end mb-3" >Completed</Badge>
                            }
                        </Card.Text>
                    </div>

                    <Card.Subtitle className="mb-2" style={{display: 'flex', justifyContent: 'center'}}>
                        <small className="me-5 text-muted"> <strong>Created: </strong>  {props.task.created_at}</small>
                        
                        {props.task.completed_at &&
                            (<small className="ms-5 text-muted"> <strong>Completed:</strong> {props.task.completed_at}</small>)
                        }
                    </Card.Subtitle>
                    
                    <Link to="" >
                        <Button variant="outline-primary" className="button-text">Edit</Button>
                    </Link>
                    {props.task.completed_at == null?
                    <Button variant="outline-success" className="ml-4 button-text float-end" id={props.task.id} >Mark completed</Button>:
                    <Button variant="outline-warning" className="ml-4 button-text float-end" id={props.task.id} >Mark not completed</Button>
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Task;

