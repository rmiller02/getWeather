import React, { Component } from 'react';
const Form = (props) =>{
    return(
        <form onSubmit = {props.loadWeather}>
            <input type="text" name="city" placeholder="Choose a City"/>
            <input type="text" name="country" placeholder="Choose a Country"/>
            <button>get Weather</button>
        </form>
    )
    
}

export default Form;