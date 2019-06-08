import React from 'react';

class Top extends React.Component {

render() {
  const { handleInput } = this.props
  return(
    <div style={{height: '100vh'}}>
      <h1 style={{margin: 0, paddingTop: 100}}>Personal Diary!!</h1>
      <p>個人でつぶやくようにメモをして、続けられる日記</p>
      <div
        onClick={() => handleInput("top", false)}
        style={{backgroundColor: 'blue', width: '100%', fontSize: 20, color: 'white', marginTop: 60}}
      >早速始める</div>
    </div>
  )
}

}

export default Top
