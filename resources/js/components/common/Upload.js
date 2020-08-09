import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';

const Upload = () => {

    const [progreso, guardarProgreso] = useState(0);
    const [preview, guardarPreviews] = useState([]);
    
    const handleChange = (e) => {
        guardarPreviews([]);
        guardarProgreso(0);
        for (let index = 0; index < e.target.files.length; index++) {

            var reader = new FileReader();

            const element = e.target.files[index];

            reader.onload = function(e) {
                guardarPreviews(p => [...p,e.target.result])
            }
            reader.readAsDataURL(element);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        guardarProgreso(0);
        const files = e.target.file.files;
        let data = new FormData();
        data.append('subida',true);
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            data.append(`archivos[archivo_${index+1}]`, element);
        }
  
        const config = {
            onUploadProgress: function(progressEvent) {
                console.log('progressEvent',progressEvent)
                var percentCompleted = ((progressEvent.loaded * 100) / progressEvent.total).toFixed(2);
                guardarProgreso(percentCompleted)
            }
        }
        axios.post('/api/upload_files', data, config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    Subir archivos con React.js y Laravel
                </div>
                <div className="card-body">
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="archivo">Ingresa el archivo aqui...</label><br/>
                            <input type="file" name="file" onChange={handleChange} multiple id="archivo"/>
                        </div>
                        {
                            preview.length !== 0 ?
                            preview.map( (preview,key) => (
                                <img src={preview} key={key} className="col-md-3" width="100%" alt=""/>
                            )):
                            null
                        }
                        {
                            progreso ? 
                            (
                                <ProgressBar>
                                    <ProgressBar striped variant="success" max="100" now={progreso} key={1} />
                                </ProgressBar>
                            ) :
                            null
                        }
                        
                        <input type="submit" className="btn btn-primary mt-3 btn-block" value="Subir Archivos"/>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Upload;