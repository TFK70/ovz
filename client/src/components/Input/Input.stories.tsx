import React from 'react';
import { Input } from './Input'

export const ExampleInput = () => {
    return (
        <>
        <Input type="text" placeholder="Test" changeEvent={(e: any) => console.log(e.target.value)} />
        </>
    )
}

export default {
    title: 'Input'
}
