import React from 'react';
import './Details.css';

const Topic = (props: any) => {
    return (
        <div className={`topic topic--theme-${props.theme}`}>
            <h1 className="topic__h">{props.topic}</h1>
            <p className="topic__p">{props.content}</p>
        </div>
    )
}

const Details = () => {
    type obj = {
        topic: String,
        content: String
    }

    let topics: obj[] = [
        {
            topic: 'Topic 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!'
        },

        {
            topic: 'Topic 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!'
        },

        {
            topic: 'Topic 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!'
        },

        {
            topic: 'Topic 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita optio eius sit, unde iure illo harum minima doloribus similique! Nisi consectetur nam ad officiis, voluptates suscipit nobis amet fuga.'
        }
    ]

    return(
        <div className="wrapper-details">
            {topics.map((i: obj,idx: number) => idx%2===0 ? <Topic theme="white" topic={i.topic} content={i.content} /> : <Topic theme="black" topic={i.topic} content={i.content} />)}
        </div>
    )
}

export {
    Details
}