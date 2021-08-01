import React from 'react';
import "../Cads/card-style.css";

const Card= props=>{
return(
    <div className="card text-center shadow ">
        <div className="overflow">
        <img src={props.imgsrc} alt="Image 1"  className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title" font="Lucida Console">{props.title}</h4>
            <p className="card-text text-secondary">{props.text}
            </p>
            <a href={props.link} class="btn btn-outline-primary dropdown-toggle btn-responsive">Read more</a>
            </div>
        </div>
);

}
export default Card;