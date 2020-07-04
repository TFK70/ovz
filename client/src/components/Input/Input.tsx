import React from 'react';
import './Input.css';

const Input = (props: any) => {
    return (
        <input
            type={props.type}
            className={"inpInitial " + props.class}
            placeholder={props.placeholder}
            onChange={props.changeEvent}
            value={props.value}
          />
    )
}

export {
    Input
}