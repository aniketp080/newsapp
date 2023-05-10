
import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

const App =()=> {
  let pageSize=15;
  let apiKey=process.env.REACT_APP_NEWS_API;

  // state={
  //   progress:0
  // }
  // let setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
 
    return (
      <div>
        <Router>
        <NavBar/>
        
        <Routes>
          <Route exact path="/general" element={<News  apiKey={apiKey}  key="general" country={"us"} pageSize={pageSize} category={"general"}/>}/>
          <Route exact path="/" element={<News  apiKey={apiKey} key="general1" country={"us"} pageSize={pageSize} category={"general"}/>}/>
          <Route exact path="/business" element={<News  apiKey={apiKey} key="business" country={"us"} pageSize={pageSize} category={"business"}/>}/>
          <Route exact path="/entertainment" element={<News  apiKey={apiKey} key="entertainment" country={"us"} pageSize={pageSize} category={"entertainment"}/>}/>
          <Route exact path="/health" element={<News  apiKey={apiKey} key="health" country={"us"} pageSize={pageSize} category={"health"}/>}/>
          <Route exact path="/science" element={<News  apiKey={apiKey} key="science" country={"us"} pageSize={pageSize} category={"science"}/>}/>
          <Route exact path="/sports" element={<News  apiKey={apiKey} key="sports" country={"us"} pageSize={pageSize} category={"sports"}/>}/>
          <Route exact path="/technology" element={<News  apiKey={apiKey} key="technology" country={"us"} pageSize={pageSize} category={"technology"}/>}/>
        </Routes>

        </Router>
      </div>
    )
  
}
export default App;



