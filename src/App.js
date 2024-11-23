import React, { useRef, useState } from 'react';
import './App.css';

function App() {
    const inputRef = useRef(null);
    const [fileSrc, setFileSrc] = useState(null);

    const handleFileUpload = e => {
        const file = e.target.files[0];
        if (file){
            const objectURL = URL.createObjectURL(file);
            setFileSrc(objectURL);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Object Detection Demo</h1>
                <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
                    rel="stylesheet" 
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
                    crossOrigin="anonymous" 
                />
            </header>
            <main className="d-flex" id="ui" style={{ height: '80vh' }}>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <strong className="align-middle">Upload a file here</strong>
                    <input type="file" ref={inputRef} hidden onChange={handleFileUpload} />
                    <button onClick={() => inputRef.current?.click()}>Upload</button>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <strong>IMAGE</strong>
                    {
                        fileSrc ? (
                            <img src={fileSrc} alt="uploaded" />
                        ) : (
                            <p>No image seleacted.</p>
                        )
                    }
                </div>
            </main>
        </div>
    );
}

export default App;
