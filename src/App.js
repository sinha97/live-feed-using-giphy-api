import React,{useState} from 'react';
import Feed from './components/Feed/Feed';

const App = ()=> {
  const [customDB,setCustomDB] = useState([])
  return (
    <div className="App" style={{padding: '0 250px 0 250px'}}>
      <Feed />
    </div>
  );
}

export default App;
