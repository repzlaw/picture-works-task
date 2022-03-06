import React,{useState,useEffect} from 'react';
import '../Assets/Style.css'
import {Spinner,Container,Row,Col,Card,Badge,Button,Modal} from 'react-bootstrap'

function Edit(props) {
    const [label,setLabel] = useState(props.task.label);
    const errors =props.errors ?? [];

    const labelHandler = (e)=>{
        setLabel(e.target.value)
    }

    const EditTaskHandler = (e)=>{
        e.preventDefault()
        props.onEdit(label,props.task.id)
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
            Edit Task
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={EditTaskHandler}>
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
            <button type="submit" className="btn btn-success float-end" >Update  </button>

            </Modal.Footer>
        </form>

      </Modal>
    );
}

export default Edit;

