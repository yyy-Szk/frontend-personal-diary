import React from 'react';

class NavBar extends React.Component {
  render() {
    const { changePages, pages: { MemoPage, YearlyPage, MonthlyPage, DaylyPage } } = this.props
    return (
      <div className="header" style={{height: '10vh', display: 'flex', backgroundColor: 'white'}}>
        <div className={(MemoPage && 'active')} style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('MemoPage')}><span style={{color: '#696969'}}>Memo</span></div>
        <div className={(YearlyPage && 'active')} style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('YearlyPage')}><span style={{color: '#696969'}}>Diary</span></div>
        <div className={((MonthlyPage || DaylyPage) && 'active')} style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('MonthlyPage')}><span style={{color: '#696969'}}>List</span></div>
        <div className={'fdfd'} style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}><span style={{color: '#696969'}}>log out</span></div>
      </div>
    );
  }
}

export default NavBar
