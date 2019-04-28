import React from 'react';
import Paper from '@material-ui/core/Paper';
// import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

class Diary extends React.Component {

  state = {
    diary: ''
  }

  handleDiary(diary) {
    this.setState({diary})
  }

  render() {
    // const { memo, handleMemo, handleSubmit } = this.props
    return (
      <div className="Diary" style={{padding: '0 20px', height: '80vh'}}>
        <Paper style={{height: '72vh', padding: 20}}>
          <textarea style={{height: '90%', width: '100%', fontSize: 20}} value={this.state.diary} onChange={e => this.handleDiary(e.target.value)} placeholder="日記を書く" />
          <div style={{height: '10%', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
          <Button variant="contained" style={{textAlign: 'right'}} onClick={() => this.setState({diary: ''})}>入力完了</Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Diary
