import React from 'react';
import Memo from './Memo'
import Diary from './Diary'
import MonthlyDiaryList from './MonthlyDiaryList'
import DaylyDiaryList from './DaylyDiaryList'
import ErrorPage from './ErrorPage'

class Main extends React.Component {

  render() {
    const { pages:{MemoPage, YearlyPage, MonthlyPage, DaylyPage}, memo, chats, handleMemo, handleSubmit } = this.props
    return (
      <div className="main" style={{height: '80vh'}}>
      { MemoPage ?
          <Memo chats={chats} memo={memo} handleMemo={(e) => handleMemo(e)} handleSubmit={() => handleSubmit()} />
        : YearlyPage ?
          <Diary chats={chats} memo={memo} handleMemo={(e) => handleMemo(e)} handleSubmit={() => handleSubmit()} />
        : MonthlyPage ?
          <MonthlyDiaryList />
        : DaylyPage ?
          <DaylyDiaryList />
        : <ErrorPage />
      }
      </div>
    );
  }
}

export default Main
