import database from './db/db.json'
import { useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import MainComponent from './components/MainComponent';
import VideoPage  from './components/VideoPage';
import { Layout } from './layout/LayoutPage';

function App() {
  // const [database, setDatabase] = useState([])
  // useEffect(() => {
  //   fetch("../src/db/db.json")
  //   .then((res) => res.json())
  //   .then((data) => setDatabase(data));
  // }, [])
    // console.log(database);
  return (
      <Layout>

      <Routes>
        <Route path="/" element={<MainComponent db={database}/>} />
        {
          database.map((data) => (
            
            <Route key={data.idVideo} path={`client/${data.cliente}`}  element={<VideoPage db={data}/>} />
            ))
        }
        <Route path='/*' element={ <Navigate to='/' />  } />
      </Routes>
      </Layout>
      )
}

export default App
