import { ReactNode, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Auth/firebaseAuth";

import Home from "./pages/Home";
import Login from "./pages/Login";

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
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
