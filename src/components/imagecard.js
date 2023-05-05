import React from "react" ;

const Image =(props)=>{

    return (
       <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 " >
        <div className="card p-0 overflow-hidden h-100 shadow zoom   " >
            <img src={props.image} alt="img" className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">{props.price}</h5>
    
                 </div>
            </div>
    </div>
    );
}

export default Image