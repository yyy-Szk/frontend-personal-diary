import React from 'react';
import NavBar from './NavBar'
import Main from './Main'

import axios from 'axios';
import timestamp from 'time-stamp'

class Index extends React.Component {

  state = {
    pages: {MemoPage: true, YearlyPage: false, MonthlyPage: false, DaylyPage: false},
    chats: [],
    text: '',
    memo: '',
    diaryList: [],
    diaryForm: '',
    diaryContent: '',
    today: ''
  }

  componentDidMount() {
    const [today] = [timestamp('YYYY年MM月DD日')]
    this.getMemoList()
    this.getDiaryList()
    this.setState({today})
  }

  getMemoList() {
    axios.get('http://localhost:3000/v1/memos')
    .then(results => {
      const chats = results.data.memos
      this.setState({chats})
    });
  }

  getDiaryList() {
    axios.get('http://localhost:3000/v1/diaries')
    .then(results => {
      const diaryList = results.data.diaries
      this.setState({diaryList})
    })
  }

  changePages(name) {
    const pages = { MemoPages: false, YearlyPage: false, MonthlyPage: false, DaylyPage: false }
    pages[name] = true
    this.setState({pages})
  }

  handleInput(stateName, content) {
    this.setState({[stateName]: content})
  }

  handleSubmit() {
    axios.post('http://localhost:3000/v1/memos', {
      attributes: { content: this.state.memo, user_id: 1 }
    })
    .then(result => {
      console.log(result.data)
      this.getMemoList()
      this.setState({memo: ''})
    })
  }

  handleSubmitDiary() {
    axios.post('http://localhost:3000/v1/diaries', {
      attributes: { content: this.state.diaryForm, user_id: 1 }
    })
    .then(result => {
      console.log(result.data)
      this.getDiaryList()
      this.setState({diaryForm: ''})
    })
  }

  handleDeleteMemo(id) {
    axios.delete(`http://localhost:3000/v1/memos/${id}`)
    .then(result => {
      console.log(result.data)
      this.getMemoList()
    })
  }

  render() {
    const { pages, memo, chats, diaryForm, today, diaryList, diaryContent } = this.state
    return (
      <div className="index" style={{backgroundColor: '#F5F5F5'}}>
        <div className={"header"} style={{height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24}}>{today}</div>

        <Main
          pages={pages}
          memo={memo}
          diaryList={diaryList}
          diaryForm={diaryForm}
          diaryContent={diaryContent}
          chats={chats}
          handleInput={(stateName, e) => this.handleInput(stateName, e)}
          handleSubmit={() => this.handleSubmit()}
          handleSubmitDiary={() => this.handleSubmitDiary()}
          changePages={(name) => this.changePages(name)}
          handleDeleteMemo={(id) => this.handleDeleteMemo(id)}
        />

        <NavBar
          changePages={(name) => this.changePages(name)}
          pages={pages}
        />
      </div>
    );
  }
}

export default Index
