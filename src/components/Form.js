import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
const Form = (props) => {
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {console.log(`${name} ${id} ${username} ${password}`)};
    const changeValue = (evt) => {
        switch(evt.target.id){ 
        case 'Name':
           setName(evt.target.value); 
           break;
        case 'ID':
            setID(evt.target.value);
            break;
        case 'Username':
            setUserName(evt.target.value);
            break;
        case 'Password':
            setPassword(evt.target.value);
            break;
        default:
            setID('');
            setName(''); 
            setUserName('');  
            setPassword(''); 
         break;}; };
    //const changeID = (evt) => {setID(evt.target.value)};
    //const changeUserName = (evt) => {setUserName(evt.target.value)};
    //const changePassword = (evt) => {setPassword(evt.target.value)};
    return (<div>
        <Input name='Name' value={name} onChange={changeValue}/>
        <Input name='ID' value={id} onChange={changeValue}/>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
            <Input name='Username' value={username} onChange={changeValue}></Input>
            <Input name='Password' value={password} onChange={changeValue}></Input>
        </div>
        <Button value='Submit' onPress={handleSubmit} />
    </div>);
};
export default Form;