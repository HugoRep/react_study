import React from 'react';
import LifeCycleSample from './component/LifeCycleSample';
import Errorboundary from './component/Errorboundary';
function getRandomColor()
{
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
class App extends React.Component
{
  state={
    color:'#000000'
  }
  handleClick =()=>{
    this.setState({
      color:getRandomColor()
    })
  }
  render()
  {
    return(
      <div>
        <button onClick={this.handleClick}>랜던 색상</button>
        <Errorboundary>
          <LifeCycleSample color={this.state.color}/>
        </Errorboundary>
      </div>
    )
  }
}

export default App;