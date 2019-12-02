import React from 'react';
import './App.css';
import ValidationSample from './component/ValidationSample';
import RefSample from './component/RefSample';
import ScrollBox from './component/ScrollBox';


function App() {
  
  return (
    <div>
      <ValidationSample/>
      <RefSample/>
      <ScrollBox ref={(ref)=>{
        //this.ScrollBox = ref;
        console.log (this.ScrollBox);
      }}/>
      {/* <button onClick={this.ScrollBox} /> */}
    </div>
  );
}

export default App;
