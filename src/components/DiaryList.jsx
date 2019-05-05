import React from 'react';
import { Paper, Grid } from '@material-ui/core'

class DiaryList extends React.Component {

  state = {
    diary: ''
  }

  render() {
    const { changePages, diaryList, handleInput } = this.props
    return (
      <div className="monthly_diary_list" style={{padding: '0 20px', height: '80vh'}}>
        <div style={{height: '72vh', overflow: 'auto'}}>
          <Grid container spacing={0}>
            {
              diaryList.map((val, i) => {
                return (
                  <Grid key={i+1} item md={4} xs={12}>
                    <Paper
                      style={{height: '4vh', margin: 10}}
                      onClick={() => {
                        changePages('DiaryDetailPage', val)
                        handleInput('diaryContent', val.content)
                      }}
                    >
                    {`${val.year}年 ${val.month}月${val.day}日`}
                    </Paper>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </div>
    );
  }
}

export default DiaryList
