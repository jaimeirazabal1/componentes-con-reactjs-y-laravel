import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// or less ideally
import Header from './common/Header';
import Menu from './common/Menu';
import Upload from './common/Upload';



const Inicio = () => {
    return (
        <div>
            <div className="container mt-2">
            <Header width="100%" height="300px"/>
            </div>
            <Upload/>
        </div>
        
    );
}
 
export default Inicio;


if (document.getElementById('inicio')) {
    ReactDOM.render(<Inicio />, document.getElementById('inicio'));
}
