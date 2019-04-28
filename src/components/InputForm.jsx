import React from 'react';
import { Button, Grid } from '@material-ui/core';

class InputForm extends React.Component {

  render() {
    const { memo, handleMemo, handleSubmit } = this.props
    return (
        <div style={{backgroundColor: '#696969', width: '100%', height: '8vh'}}>
          <Grid container spacing={0} style={{height: '100%'}} alignItems="center" justify="center">
            <Grid item xs={9}><input value={memo} placeholder="メモを書く" style={{width: '80%'}} onChange={(e) => handleMemo(e.target.value)} /></Grid>
            <Grid item xs={3}><Button variant="contained" onClick={() => {memo && handleSubmit(memo)}}>送信</Button></Grid>
          </Grid>
        </div>
    );
  }
}

export default InputForm
