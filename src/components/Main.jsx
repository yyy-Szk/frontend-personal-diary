import React from 'react';
import Memo from './Memo'
import Diary from './Diary'
import DiaryList from './DiaryList'
import DiaryDetail from './DiaryDetail'
import ErrorPage from './ErrorPage'

class Main extends React.Component {

  render() {
    const { pages:{MemoPage, DiaryPage, ListPage, DiaryDetailPage}, memo, chats, handleInput, handleSubmitMemo, changePages, diaryForm,
              diaryList, handleSubmitDiary, handleDeleteMemo, diaryContent, today } = this.props
    return (
      <div className="main" style={{height: '90vh'}}>
        <div className={"header"} style={{height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24}}>{today}</div>

        { MemoPage ?
            <Memo
              chats={chats}
              memo={memo}
              handleInput={(stateName, e) => handleInput(stateName, e)}
              handleSubmitMemo={() => handleSubmitMemo()}
              handleDeleteMemo={(id) => handleDeleteMemo(id)}
            />
          : DiaryPage ?
            <Diary
              memo={memo}
              diaryForm={diaryForm}
              handleSubmitDiary={() => handleSubmitDiary()}
              handleInput={(stateName, e) => handleInput(stateName, e)}
            />
          : ListPage ?
            <DiaryList
              chats={chats}
              diaryList={diaryList}
              changePages={(name) => changePages(name)}
              handleInput={(stateName, e) => handleInput(stateName, e)}
            />
          : DiaryDetailPage ?
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
