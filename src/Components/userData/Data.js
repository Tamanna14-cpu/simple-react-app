import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Data.css';

const Data = (props) => {
    const {name, image, email, income} = props.user;
    const handleAddData = props.handleAddData;
    // const userStyle = {border : '2px solid gray', margin: '10px', padding: '10px'}

    return (
        <div className = 'user'>
            <div>
                <img style = {{height : '90px'}} src= {image} alt=""/>
            </div>

            <div>
                <h3 className = 'user-name'>She is {name}</h3>
                <h4>Email her on {email}</h4>
                <h4>Income : {income}</h4>
                <button onClick = {() => handleAddData(props.user)}  className = 'main-button'>
                <FontAwesomeIcon icon={faUserPlus} />Add Her
                </button>
            </div>
            
        </div>
    );
};

export default Data;