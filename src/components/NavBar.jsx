import React from 'react';

class NavBar extends React.Component {
  render() {
    const { changePages, logout, pages: { MemoPage, DiaryPage, ListPage, DayryDetailPage } } = this.props
    return (
      <div className="header" style={{height: '10vh', display: 'flex', backgroundColor: 'white'}}>
        <div className={(MemoPage ? 'active' : '')} style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('MemoPage')}><span style={{color: '#696969'}}>Memo</span></div>
        <div className={(DiaryPage ? 'active' : '')} style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('DiaryPage')}><span style={{color: '#696969'}}>Diary</span></div>
        <div className={((ListPage || DayryDetailPage) ? 'active' : '')} style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => changePages('ListPage')}><span style={{color: '#696969'}}>List</span></div>
        <div className={'fdfd'} style={{height: '100%', width: '25%', alignItems: 'center', justifyContent: 'center', display: 'flex'}} onClick={() => window.confirm('ログアウトしますか？') && logout()}><span style={{color: '#696969'}}>log out</span></div>
      </div>
    );
  }
}

export default NavBar
