import React from 'react';
const Button = (props) => {
    const { value, onPress } = props; 
    return (<button style={styles} onClick={onPress} >{value}</button>);
};
export default Button;
const styles = {
    padding: '10px',
    position: 'relative'
};