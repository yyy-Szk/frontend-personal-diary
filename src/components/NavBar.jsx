import React from 'react';

class NavBar extends React.Component {
  render() {
    const { changePages } = this.props
    return (
      <div className="header" style={{height: '10vh', display: 'flex', backgroundColor: 'white'}}>
        <div style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('MemoPage')}><span style={{color: '#696969'}}>Memo</span></div>
        <div style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('YearlyPage')}><span style={{color: '#696969'}}>Diary</span></div>
        <div style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('MonthlyPage')}><span style={{color: '#696969'}}>Monthly</span></div>
        <div style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('DaylyPage')}><span style={{color: '#696969'}}>Dayly</span></div>
      </div>
    );
  }
}

export default NavBar
