import React , {useState} from 'react';


import Counter from './component/Counter';
import Info from './component/Info';
import Info_01 from './component/Info_01';
import Counter_Reducer from './component/Counter_Reducer';
import Info_Reducer from './component/Info_Reducer';
import Average from './component/Average';
import Average_Memo from './component/Average_Memo';
import Average_useRef from './component/Average_useRef';
import Hook_Info from './component/Hook_Info';


function App() 
{
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter/>
      <Info/>
      <Info_01/>
      <div>
        <button onClick={()=>{setVisible(!visible);}}>
        {visible?'숨기기':'보이기'}
        </button>
        <hr />
        {visible && <Info/>}
      </div>
      <Counter_Reducer/>
      <Info_Reducer/>
      <Average />
      <Average_Memo/>
      <Average_useRef/>
      <Hook_Info/>
    </>
  );
}
export default App;