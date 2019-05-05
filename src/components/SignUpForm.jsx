import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';

class SignUpForm extends React.Component {

  render() {
    const { email, password, password_confirm, handleInput, signUp, changePages } = this.props
    return (
      <div className="login-form" style={{backgroundColor: '#F5F5F5', height: '90vh'}}>
        <h2>サインアップ</h2>
        <Grid container>
          <Grid item xs={12} style={{marginTop: 30}}>
            <TextField
              id="email"
              value={email}
              label="email"
              onChange={e => handleInput('email', e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} style={{marginTop: 30}}>
            <TextField
              id="password"
              type="password"
              value={password}
              label="password"
              onChange={e => handleInput('password', e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} style={{marginTop: 30}}>
            <TextField
              id="password_confirm"
              type="password"
              value={password_confirm}
              label="password_confirm"
              onChange={e => handleInput('password_confirm', e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={6} style={{marginTop: 30}}>
            <Button variant="contained" onClick={() => changePages('LoginForm')}>ログイン</Button>
          </Grid>
          <Grid item xs={6} style={{marginTop: 30}}>
            <Button variant="contained" onClick={() => signUp()}>登録する</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignUpForm
