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
                    <Route exact path="*" element={<NotFound/>}/>
                </Routes>
                </Container>
            </div>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
