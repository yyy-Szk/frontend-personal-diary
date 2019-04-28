import React from 'react';
import NavBar from './NavBar'
import Main from './Main'

class Index extends React.Component {

  state = {
    pages: {MemoPage: true, YearlyPage: false, MonthlyPage: false, DaylyPage: false},
    text: '',
    chats: [],
    memo: ''
  }

    // componentDidMount() {
    // const fetchInit = {
    //   method: "GET",
    //   headers: { "content-type": "application/json" }
    // };

  //   fetch(new URL("hello_world", 'http://localhost:3000'), fetchInit)
  //     .then(response => response.json())
  //     .then(response => this.setState(response));
  // }

  changePages(name) {
    const pages = { MemoPages: false, YearlyPage: false, MonthlyPage: false, DaylyPage: false }
    pages[name] = true
    this.setState({pages})
  }

  handleMemo(memo) {
    this.setState({memo})
  }

  handleSubmit() {
    const chats = this.state.chats.slice()
    chats.push(this.state.memo)
    this.setState({chats, memo: ''})
  }

  render() {
    const { pages, memo, chats } = this.state
    return (
      <div className="index" style={{backgroundColor: '#F5F5F5'}}>
        <div className={"header"} style={{height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24}}>2019年12月24日</div>
        <Main pages={pages} memo={memo} chats={chats} handleMemo={(e) => this.handleMemo(e)} handleSubmit={() => this.handleSubmit()}/>
        <NavBar changePages={(name) => this.changePages(name)}/>
      </div>
    );
  }
}

export default Index
