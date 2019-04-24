import React from 'react';
import ChatDetail from './ChatDetail'
import DiaryDetail from './DiaryDetail'

class ChatDiaryList extends React.Component {
  render() {
    return (
      <div className="chat_diary_list">
        <ChatDetail />
        <DiaryDetail />
      </div>
    );
  }
}

export default ChatDiaryList
