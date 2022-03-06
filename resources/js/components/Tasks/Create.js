import React,{useState,useEffect} from 'react';
import '../Assets/Style.css'
import {Spinner,Container,Row,Col,Card,Badge,Button,Modal} from 'react-bootstrap'

function Create(props) {
    const [label,setLabel] = useState('');
    // const [errors,setErrors] = useState([])
    const errors =props.errors;

    const AddTaskHandler = (e)=>{
        e.preventDefault()
        props.onAdd(label)
    }

    const labelHandler = (e)=>{
        setLabel(e.target.value)
        
    }

    return (
        <Modal
        show={props.show} onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Task
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={AddTaskHandler}>
            <Modal.Body>
                
                <div>
                    <div className="form-group">
                        <div className="input-group mb-2" >
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Label</span>
                            </div>
                            <input type="text" value={label} className="form-control" placeholder="enter label" onChange={labelHandler} required />
                        </div>
                        <div className='text-danger'>
                            {errors.length>0 &&errors.map(err=>{
                                return <li className='list' key={err}>{err}</li>
                            })}
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <button type="submit" className="btn btn-success float-end" >Create  </button>

            </Modal.Footer>
        </form>

      </Modal>
    );
}

export default Create;

