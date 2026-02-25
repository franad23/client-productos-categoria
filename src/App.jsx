import { BrowserRouter, Route, Routes } from "react-router"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import HomePage from "./pages/home"
import ProtectedRoutes from "./pages/protectedRoutes"
import AdminPage from "./pages/admin"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/admin" element={<AdminPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
