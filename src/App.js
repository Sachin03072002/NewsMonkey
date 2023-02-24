import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from "react-top-loading-bar";

// export default function App() {
const App=()=>{
  const pageSize = 15;
  const apikey=process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />
      <LoadingBar
        height="3"
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<News apikey={apikey} setProgress={setProgress} key="everything" pageSize={pageSize} country="in" category="general" />} />
        <Route path="/business" element={<News apikey={apikey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" />} />
        <Route path="/entertainment" element={<News apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
        <Route path="/general" element={<News apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />} />
        <Route path="/health" element={<News apikey={apikey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" />} />
        <Route path="/science" element={<News apikey={apikey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />} />
        <Route path="/sports" element={<News apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />} />
        <Route path="/technology" element={<News apikey={apikey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />} />
      </Routes>
    </Router>
  );
}
export default App;