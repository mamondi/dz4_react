import React from 'react'; 

function Info(props){
    return (
        <div>
            <h2>Information about me</h2>
            <p>My full name: {props.name}</p>
            <p>My phone number: {props.phone}</p>
            <p>My email: {props.email}</p>
        </div>
    );
}

export default Info;