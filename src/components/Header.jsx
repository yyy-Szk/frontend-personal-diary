import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header" style={{height: '15vh', display: 'flex'}}>
        <div style={{height: '100%', width: '70%', backgroundColor: 'red'}}></div>
        <div style={{height: '100%', width: '30%',  backgroundColor: 'yellow'}} onClick={() => alert('clicked yellow div')}></div>
      </div>
    );
  }
}

export default Header
