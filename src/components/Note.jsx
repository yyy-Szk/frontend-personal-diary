import React from 'react';
import ChatList from './ChatList'

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <ChatList />
        <div style={{backgroundColor: 'green', width: '100%', height: '10vh'}}>
          <input value="form"/>
          <input type="submit" />
        </div>
      </div>
    );
  }
}

export default Note
