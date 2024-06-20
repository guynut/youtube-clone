import { ReactNode, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Auth/firebaseAuth";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import Chanel from "./pages/Chanel";
import Search from "./pages/Search";
import Notfound from "./pages/Notfound";

function App() {
  const { currentUser } = useContext(AuthContext);
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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={
              <>
                <Navbar/>
                <Home/>
              </>
            }/>
            <Route path='login' element={<Login/>}/>
            <Route path='watch' element={<Watch/>}/>
            <Route path='chanel' element={<Chanel/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='*' element={<Notfound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
