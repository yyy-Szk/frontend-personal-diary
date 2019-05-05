import React from 'react';
import Paper from '@material-ui/core/Paper';
// import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

class Diary extends React.Component {

  render() {
    const { diaryForm, handleInput, handleSubmitDiary } = this.props
    return (
      <div className="Diary" style={{padding: '0 20px', height: '80vh'}}>
        <Paper style={{height: '72vh', padding: 20}}>
          <textarea style={{height: '90%', width: '100%', fontSize: 20}} value={diaryForm} onChange={e => handleInput('diaryForm', e.target.value)} placeholder="日記を書く" />
          <div style={{height: '10%', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <Button variant="contained" style={{textAlign: 'right'}} onClick={() => diaryForm && window.confirm('日記を作成しますか？') && handleSubmitDiary()}>入力完了</Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Diary
