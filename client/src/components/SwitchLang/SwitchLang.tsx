import React from 'react';
import './SwitchLang.css';
import { Button } from '../Button/Button';

const SwitchLang = (props: any) => {
    return (
        <div className="lang-block">
            <Button clickEvent={props.eventSwitch} val={props.lang}/>
        </div>
    )
}

export {
    SwitchLang
}