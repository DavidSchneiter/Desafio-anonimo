import database  from './db/db.json'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import MainComponent from './components/MainComponent';
import VideoPage  from './components/VideoPage';
import { Layout } from './layout/LayoutPage';

function App() {
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
