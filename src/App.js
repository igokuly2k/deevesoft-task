import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
const App = (props) => {
  return (<div style={styles}>
    <Header text='Sample Task'/>
    <Form style={{alignSelf:'center'}}/>
    <Footer justifyContent='flex-end'/>
  </div>);
};
const styles = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative'
};
export default App;