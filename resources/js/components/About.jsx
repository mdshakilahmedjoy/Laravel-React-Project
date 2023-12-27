import React from 'react';
import ReactDOM from 'react-dom/client';

function About() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">About Component</div>

                        <div className="card-body">I'm an about component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

if (document.getElementById('about')) {
    const Index = ReactDOM.createRoot(document.getElementById("about"));

    Index.render(
        <React.StrictMode>
            <About/>
        </React.StrictMode>
    )
}
