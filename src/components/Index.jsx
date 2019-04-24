import React from 'react';
import Header from './Header'
import Main from './Main'

class Index extends React.Component {

    state = {
      NotePage: true,
      YearlyPage: false,
      MonthlyPage: false,
      DaylyPage: false
    }

  render() {
    return (
      <div className="index">
        <Header />
        <Main pages={this.state}/>
      </div>
    );
  }
}

export default Index
