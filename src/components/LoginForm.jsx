import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';

class LoginForm extends React.Component {

  render() {
    const { email, password, handleInput, login, changePages } = this.props
    return (
      <div className="login-form" style={{backgroundColor: '#F5F5F5', height: '100vh'}}>
        <h2 style={{margin: 0, paddingTop: 100}}>ログイン</h2>
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
          <Grid item xs={6} style={{marginTop: 30}}>
            <Button variant="contained" onClick={() => changePages('SignUpForm')}>新規登録</Button>
          </Grid>
          <Grid item xs={6} style={{marginTop: 30}}>
            <Button variant="contained" onClick={() => login()}>ログイン</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginForm
