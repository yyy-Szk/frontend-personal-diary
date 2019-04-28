import React from 'react';
// import { Button, Grid } from '@material-ui/core';
import ChatList from './ChatList'
import InputForm from './InputForm'

class Memo extends React.Component {

  render() {
    const { memo, chats, handleMemo, handleSubmit } = this.props
    return (
      <div className="memo">
        <div style={{height: '72vh'}}>
          <ChatList chats={chats}/>
        </div>
        <InputForm
          memo={memo}
          handleMemo={(e) => handleMemo(e)}
          handleSubmit={() => handleSubmit()}
        />
      </div>
    );
  }
}

export default Memo
