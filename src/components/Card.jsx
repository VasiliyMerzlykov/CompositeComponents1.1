import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            {props.content.img && <img src={props.content.img} className="card-img-top" alt="..."></img>}
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};

export default Card;
