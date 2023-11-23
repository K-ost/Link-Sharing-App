import { Route, Routes } from "react-router-dom"
import Desktop from "./pages/Desktop"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PublicRoutes from "./components/PublicRoutes"
import { useAuth } from "./store/useAuth"
import Preview from "./pages/Preview"

function App() {
  const isAuth = useAuth(state => state.auth)

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route index path="/" element={<Desktop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preview" element={<Preview />} />
        </Route>
        <Route path="/" element={<PublicRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
