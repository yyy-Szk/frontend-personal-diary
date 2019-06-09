import React from 'react';
import NavBar from './NavBar'
import Main from './Main'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import ErrorPage from './ErrorPage'
import Top from './Top'

import axios from 'axios';
import timestamp from 'time-stamp'

class Index extends React.Component {

  state = {
    pages: {MemoPage: true, DiaryPage: false, ListPage: false, DayryDetailPage: false, SignUpForm: false, LoginForm: true},
    chats: [],
    text: '',
    memo: '',
    diaryList: [],
    diaryForm: '',
    diaryContent: '',
    today: '',
    email: '',
    password: '',
    password_confirm: '',
    login: false,
    top: true
  }

  componentDidMount() {
    const [today] = [timestamp('YYYY年MM月DD日')]
    this.checkValidateToken()
    this.setState({today})
  }

  signUp() {
    const { email, password, password_confirm } = this.state
    email && password && password_confirm ?
      password === password_confirm ?
        axios.post(`${process.env.REACT_APP_API_URL}/v1/auth`,
          { email: email, password: password }
        )
        .then(results => {
          this.setState({email: '', password: '', password_confirm: ''})
          alert('登録に成功しました。')
        }).catch(err => {
          alert('エラーが発生しました。すでに登録済みのメールアドレスの可能性があります')
        })
      : alert('パスワードが一致しません')
    : alert('メールアドレスとパスワードを入力してください')
  }

  login() {
    const { email, password } = this.state
    email && password ?
      axios.post(`${process.env.REACT_APP_API_URL}/v1/auth/sign_in`,
        { email: email, password: password }
      )
      .then(results => {
        const { data: {data}, headers } = results
        const user_data = { uid: headers.uid, "access-token": headers["access-token"], client: headers.client,
                        id: data.id, email: data.email }
        localStorage.setItem('user_data', JSON.stringify(user_data))
        this.changePages('MemoPage')
        this.getUserInfo(user_data)
      }).catch(err => {
        alert('IDまたはパスワードが間違っています')
      })
    : alert('メールアドレスとパスワードを入力してください')
  }

  logout() {
    const user_data = JSON.parse(localStorage.getItem('user_data'))
    axios.delete(`${process.env.REACT_APP_API_URL}/v1/auth/sign_out`,{
      headers: { uid: user_data.uid, "access-token": user_data["access-token"], client: user_data.client },
      data: {}
    })
    .then(results => {
      console.log(results.data)
      localStorage.removeItem("user_data")
      this.setState({login: false, user_data: ''})
      this.changePages('LoginForm')
    })
  }

  checkValidateToken() {
    const user_data = JSON.parse(localStorage.getItem('user_data'))
    user_data && axios.get(`${process.env.REACT_APP_API_URL}/v1/auth/validate_token`, {
      headers: { uid: user_data.uid, "access-token": user_data["access-token"], client: user_data.client },
      data: {}
    })
    .then(results => {
      console.log(results.data);
      this.getUserInfo(user_data)
    })
  }

  getUserInfo(user_data) {
    this.getMemoList(user_data)
    this.getDiaryList(user_data)
    this.setState({login: true, user: user_data, email: '', password: '', password_confirm: '', user_data})
  }

  getMemoList(user_data) {
    axios.get(`${process.env.REACT_APP_API_URL}/v1/memos?id=${user_data.id}`, {
      headers: { uid: user_data.uid, client: user_data.client, "access-token": user_data["access-token"] },
      data: {}
    })
    .then(results => {
      const chats = results.data.memos
      this.setState({chats})
    });
  }

  getDiaryList(user_data) {
    axios.get(`${process.env.REACT_APP_API_URL}/v1/diaries?id=${user_data.id}`, {
      headers: { uid: user_data.uid, "access-token": user_data["access-token"], client: user_data.client },
      data: {}
    })
    .then(results => {
      const diaryList = results.data.diaries
      this.setState({diaryList})
    })
  }

  changePages(name) {
    const pages = { MemoPages: false, DiaryPage: false, ListPage: false, DaaryDetailPage: false, LoginForm: false, SignUpForm: false }
    pages[name] = true
    this.setState({pages})
  }

  handleInput(stateName, content) {
    this.setState({[stateName]: content})
  }

  handleSubmitMemo() {
    const user_data = JSON.parse(localStorage.getItem('user_data'))
    axios.post(`${process.env.REACT_APP_API_URL}/v1/memos`,
      { attributes: { content:this.state.memo, user_id: user_data.id }} ,
      { headers: {"uid": user_data.uid, "client": user_data.client, "access-token": user_data["access-token"]} }
    )
    .then(results => {
      console.log(results.data)
      this.getMemoList(user_data)
      this.setState({memo: ''})
    })
  }

  handleSubmitDiary() {
    const user_data = JSON.parse(localStorage.getItem('user_data'))
    axios.post(`${process.env.REACT_APP_API_URL}/v1/diaries`,
      { attributes: { content: this.state.diaryForm, user_id: user_data.id }},
      { headers: {uid: user_data.uid, client: user_data.client, "access-token": user_data["access-token"]} }
    )
    .then(results => {
      console.log(results.data)
      this.getDiaryList(user_data)
      this.setState({diaryForm: ''})
    })
  }

  handleDeleteMemo(id) {
    const user_data = JSON.parse(localStorage.getItem('user_data'))
    axios.delete(`${process.env.REACT_APP_API_URL}/v1/memos/${id}`,{
      headers: { uid: user_data.uid, client: user_data.client, "access-token": user_data["access-token"] }
    })
    .then(results => {
      console.log(results.data)
      this.getMemoList(user_data)
    })
  }

  render() {
    console.log();
    const { pages, memo, chats, diaryForm, today, diaryList, diaryContent, email, password,
          password_confirm, login, top } = this.state
    return (
      <div className="index" style={{backgroundColor: '#F5F5F5'}}>
          { login ?
            <>
              <Main
                pages={pages}
                memo={memo}
                diaryList={diaryList}
                diaryForm={diaryForm}
                diaryContent={diaryContent}
                chats={chats}
                handleInput={(stateName, e) => this.handleInput(stateName, e)}
                handleSubmitMemo={() => this.handleSubmitMemo()}
                handleSubmitDiary={() => this.handleSubmitDiary()}
                changePages={(name) => this.changePages(name)}
                handleDeleteMemo={(id) => this.handleDeleteMemo(id)}
                today={today}
              />

              <NavBar
                changePages={(name) => this.changePages(name)}
                logout={() => this.logout()}
                pages={pages}
              />
            </>
          : top ?
            <Top handleInput={(stateName, content) => this.handleInput(stateName, content)}/>
          : pages.LoginForm ?
            <LoginForm
              email={email}
              password={password}
              login={() => this.login()}
              handleInput={(stateName, e) => this.handleInput(stateName, e)}
              changePages={(name) => this.changePages(name)}
            />
          : pages.SignUpForm ?
            <SignUpForm
              email={email}
              password={password}
              password_confirm={password_confirm}
              signUp={() => this.signUp()}
              handleInput={(stateName, e) => this.handleInput(stateName, e)}
              changePages={(name) => this.changePages(name)}
            />
          : <ErrorPage />
        }
      </div>
    );
  }
}

export default Index
