import React from 'react';
import { Paper } from '@material-ui/core'

class DiaryDetail extends React.Component {

  state = {
    diary: ''
  }

  render() {
    const { diaryContent } = this.props
    return (
      <div className="diary_detail" style={{padding: '0 20px', height: '80vh'}}>
        <Paper style={{height: '72vh', padding: 20, textAlign: 'left', overflow: 'auto'}}>
          <span style={{height: '100%', width: '100%', fontSize: 20, wordWrap: 'break-word'}}>{diaryContent}</span>
        </Paper>
      </div>
    )
  }
}

export default DiaryDetail
