import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Layouts/Header";

function App() {
    return (
        <div>
            <Header/>

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
