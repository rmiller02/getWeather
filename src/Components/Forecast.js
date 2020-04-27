import React, { Component } from 'react';

const Forecast = (props) =>{
    return(
        <div className="weather">
            {props.country && props.city && <p>Location:
            {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature:
            {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}
            </p>}
            {props.pressure && <p>Pressure: {props.pressure}   
            </p>} 
            {props.icon && <img src = {`https://openweathermap.org/img/w/${props.icon}.png`}
            alt="wthr img" />}
            {props.description && <p>Conditions:
            {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}
    export default Forecast;
