import React from 'react';
const Footer = (props) => {
    return (<div style={styles}>
        <div style={textStyle}>Footer</div>
        </div>);
};
const styles={
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black'
};
const textStyle={
    color: 'white', 
    //alignSelf: 'center', 
    fontSize: '8vw'
};
export default Footer;