import React from 'react';
// import { Button, Grid } from '@material-ui/core';
import ChatList from './ChatList'
import InputForm from './InputForm'

class Memo extends React.Component {

  render() {
    const { memo, chats, handleInput, handleSubmitMemo, handleDeleteMemo } = this.props
    return (
      <div className="memo">
        <div style={{height: '72vh'}}>
          <ChatList chats={chats} handleDeleteMemo={(id) => handleDeleteMemo(id)} />
        </div>
        <InputForm
          memo={memo}
          handleInput={(stateName, e) => handleInput(stateName, e)}
          handleSubmitMemo={() => handleSubmitMemo()}
        />
      </div>
    );
  }
}

export default Memo
