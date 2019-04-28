import React from 'react';
import { Grid } from '@material-ui/core'

class ChatList extends React.Component {
  render() {
    const { chats } = this.props
    return (
      <div className="chat_list" style={{height: '100%', width: '100%', overflow: 'auto'}}>
      {chats.map((_, i) => {
        return (
          <Grid key={i} container spacing={0} style={{padding: 10}}>
            <Grid item xs={3}><div style={{backgroundColor: 'white', height: '50px'}}></div></Grid>
            <Grid item xs={9}><div style={{backgroundColor: 'white', height: '50px', marginLeft: 10}}>{chats[i]}</div></Grid>
          </Grid>
          )
        })
      }
      </div>
    );
  }
}

export default ChatList
