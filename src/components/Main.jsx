import React from 'react';
import Memo from './Memo'
import Diary from './Diary'
import DiaryList from './DiaryList'
import DiaryDetail from './DiaryDetail'
import ErrorPage from './ErrorPage'

class Main extends React.Component {

  render() {
    const { pages:{MemoPage, YearlyPage, MonthlyPage, DaylyPage}, memo, chats, handleInput, handleSubmit, changePages, diaryForm,
              diaryList, handleSubmitDiary, handleDeleteMemo, diaryContent } = this.props
    return (
      <div className="main" style={{height: '80vh'}}>
      { MemoPage ?
          <Memo
            chats={chats}
            memo={memo}
            handleInput={(stateName, e) => handleInput(stateName, e)}
            handleSubmit={() => handleSubmit()}
            handleDeleteMemo={(id) => handleDeleteMemo(id)}
          />
        : YearlyPage ?
          <Diary
            memo={memo}
            diaryForm={diaryForm}
            handleSubmitDiary={() => handleSubmitDiary()}
            handleInput={(stateName, e) => handleInput(stateName, e)}
            handleSubmit={() => handleSubmit()}
          />
        : MonthlyPage ?
          <DiaryList
            chats={chats}
            diaryList={diaryList}
            changePages={(name) => changePages(name)}
            handleInput={(stateName, e) => handleInput(stateName, e)}
          />
        : DaylyPage ?
          <DiaryDetail
            diaryContent={diaryContent}
          />
        : <ErrorPage />
      }
      </div>
    );
  }
}

export default Main
