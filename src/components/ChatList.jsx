import React from 'react';
import { Grid } from '@material-ui/core'

class ChatList extends React.Component {
  render() {
    const { chats, handleDeleteMemo } = this.props
    return (
      <div className="chat_list" style={{height: '100%', overflow: 'auto', padding: '0 30px'}}>
        {chats.map((_, i) => {
          return (
            <Grid key={i} container spacing={0} style={{padding: 10}}>
              <Grid item xs={3}>
                <div>
                  {chats[i]["time"]}
                </div>
                <div onClick={() => { window.confirm('このメモを削除しますか？') && handleDeleteMemo(chats[i]["id"]) }} style={{height: 20, backgroundColor: 'red', margin: '10px auto', width: 30}}>
                  ✖︎
                </div>
              </Grid>
              <Grid item xs={9}>
                <div style={{padding: 10, backgroundColor: '#1dcd00', textAlign: 'left', color: 'black', marginLeft: 10, borderRadius: 15}}>
                  <span style={{wordWrap: 'break-word'}}>{chats[i]["content"]}</span>
                </div>
              </Grid>
            </Grid>
            )
          })
        }
      </div>
    );
  }
}

export default ChatList
