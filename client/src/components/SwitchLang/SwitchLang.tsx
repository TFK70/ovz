import React from 'react';
import './SwitchLang.css';
import { Button } from '../Button/Button';
import { MouseEvent } from 'react';

const SwitchLang = ({ eventSwitch, lang }: { eventSwitch: (event: MouseEvent<HTMLButtonElement>) => void, lang: string }) => {
    return (
        <div className="lang-block">
            <Button clickEvent={eventSwitch} val={lang}/>
        </div>
    )
}

export {
    SwitchLang
}