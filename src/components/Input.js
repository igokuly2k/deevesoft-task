import React from 'react';
const Input = (props) => {
    const { name, onChange, value } = props;
    return(<div> 
        <input id={name} placeholder={name} onChange={onChange} value={value}/>
         </div>)
};
export default Input;