import { Route, Routes } from "react-router-dom"
import Desktop from "./pages/Desktop"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PublicRoutes from "./components/PublicRoutes"
import { useAuth } from "./store/useApp"
import Preview from "./pages/Preview"
import ResponseBox from "./components/ResponseBox"

function App() {
  const { auth } = useAuth()

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoutes isAuth={!!auth} />}>
          <Route index path="/" element={<Desktop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preview" element={<Preview />} />
        </Route>
        <Route path="/" element={<PublicRoutes isAuth={!!auth} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <ResponseBox />
    </div>
  )
}

export default App
