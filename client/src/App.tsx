import { ReactNode, useContext, useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Auth/firebaseAuth";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import Chanel from "./pages/Chanel";
import Search from "./pages/Search";
import Notfound from "./pages/Notfound";
import DragTest from "./pages/DragTest";
import TextEditor from "./pages/TextEditor";
import Landing from "./pages/Landing";

function App() {
  const { currentUser } = useContext(AuthContext);
  const [progress, setProgress] = useState(0)
  const [expanded, setExpanded] = useState(true)

  type ProtectedRouteProps = {
    children: ReactNode;
  };

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    } else {
      return <>{children}</>;
    }
  };
  useEffect(()=>{
    setProgress(40)
    setTimeout(()=>{
      setProgress(100)
    },500)
  },[])

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#2563eb'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path='/'>
            <Route index element={
              <>
                <Navbar expanded={expanded} setExpanded={setExpanded}/>
                <div className="mt-[7vh]">
                  <Home expanded={expanded} setExpanded={setExpanded}/>
                </div>
              </>
            }/>
            <Route path='login' element={<Login/>}/>
            <Route path='watch/:videolink' element={
              <>
                <Navbar expanded={expanded} setExpanded={setExpanded}/>
                <Watch/>
              </>
            }/>
            <Route path='chanel' element={<Chanel/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='drag' element={<DragTest/>}/>
            <Route path='textEditor' element={<TextEditor/>}/>
            <Route path='landing' element={<Landing/>}/>
            <Route path='*' element={<Notfound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
