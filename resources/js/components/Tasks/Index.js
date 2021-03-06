import React,{useState,useEffect} from 'react';
import '../Assets/Style.css'
import {Spinner,Container,Row,Col,Card,Badge,Button,Modal} from 'react-bootstrap'
import  Task  from "./Task";
import  Create  from "./Create";
import  {getAllTasks,saveTask, updateTask, getSortedTask, updateTaskOrders} from '../Service';
import {SortableContainer, SortableElement } from 'react-sortable-hoc';
import {arrayMoveImmutable} from 'array-move';

const EditTaskHandler = async (label,id)=>{
    const response =  await updateTask(label,id)
    if (response.status === 422) {
        alert(response.errors.label[0])

    }
    if (response.status ==='success') {
        alert(response.message)
        window.location.reload()
    }
    

    
}






const SortableItem = SortableElement(({task, index}) =>
    <Task task={task} key={task.id} index={index} onEdit={EditTaskHandler}  />
);
const SortableList = SortableContainer(({children}) => {    return <div>{children}</div>;  });


const Index = () => {
    const [tasks,setTasks] = useState([]);
    const [loading,setLoading] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [errors,setErrors] = useState([]);

    const onSortEnd = async ({oldIndex, newIndex}) => {
         setTasks((tasks) => arrayMoveImmutable(tasks, oldIndex, newIndex));
        // const response = await getAllTasks();
        // const oldTasks = response.data.data;
        const oldTasks = tasks;
        let newTasks = arrayMoveImmutable(oldTasks,oldIndex,newIndex)
        const updatedTasks = getSortedTask(oldTasks, newTasks);
        const result =  await  updateTaskOrders(updatedTasks);
    
    };

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

    const EditTaskHandler = async (label,id)=>{
        const response =  await updateTask(label,id)
        if (response.status === 422) {

            setErrors(previousErrors=>{
                return[...response.errors.label]
            });

        }
        if (response.status ==='success') {
            alert(response.message)
            window.location.reload()
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
                        <SortableList  onSortEnd={onSortEnd}  >
                            {tasks.map((task, index) => {
                                return (
                                    <SortableItem key={`item-${task.id}`} index={index} sortIndex={index} task={task} onEdit={EditTaskHandler} errors={errors} />
                                )
                            })}
                        </SortableList>
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
