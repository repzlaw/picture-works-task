import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Layouts/Header";
import {Button,Container} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./Tasks/Index";
import CreateTask from "./Tasks/Create";
import EditTask from "./Tasks/Edit";
import NotFound from "./NotFound";

function App() {
    return (
        <div>
            <Router>
            <Header />
            <div>
                <Container className="p-4">
                <Routes>
                    <Route exact path="/" element={<TaskList/>}/>
                    <Route exact path="/tasks/create" element={<CreateTask/>}/>
                    <Route exact path="/tasks/create/edit-task/:id" element={<EditTask/>}/>
                    <Route exact path="*" element={<NotFound/>}/>
                </Routes>
                </Container>
            </div>
            </Router>
        </div>
        // <div className="container p-5">
        //     <div className="row justify-content-center">
        //         <div className="col-md-8">
        //             <div className="card">
        //                 <div className="card-header">App Component</div>

        //                 <div className="card-body">I'm an App component!</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
