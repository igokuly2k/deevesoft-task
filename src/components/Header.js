import React from 'react';
import logo from '../assets/deeve-logo-white.png';
const Header = (props) => {
    const { text } = props;
    return (<div style={styles}>
        <img src={logo} alt='logo'  style={imageStyle}/>
        <div style={textStyle}>{text}</div>
        </div>);
};
const styles={
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
};
const imageStyle={
    maxWidth: '100%', 
    flex:1,
    backgroundColor: 'black'
}
const textStyle={
    flex: 2,
    color: 'white', 
    alignSelf: 'center', 
    marginLeft: '20px',
    paddingLeft: '5px', 
    fontSize: '8vw',
    backgroundColor: 'black'
};
export default Header;