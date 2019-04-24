import React from 'react';
import Note from './Note'
import YearlyDiaryList from './YearlyDiaryList'
import MonthlyDiaryList from './MonthlyDiaryList'
import DaylyDiaryList from './DaylyDiaryList'
import ErrorPage from './ErrorPage'

class Main extends React.Component {

  render() {
    const { NotePage, YearlyPage, MonthlyPage, DaylyPage } = this.props.pages
    return (
      <div className="main">
      { NotePage ?
          <Note />
        : YearlyPage ?
          <YearlyDiaryList />
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
