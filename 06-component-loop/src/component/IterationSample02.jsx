import React, {useState} from 'react';
const IterationSample02 = ()=>
{
    const [names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const namesList = names.map(value =><li key={value.id}>{value.text}</li>);

    return <ul>{namesList}</ul>
}

export default IterationSample02;