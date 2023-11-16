import { Link } from "react-router-dom"
import Btn from "../components/Btn"
import FormField from "../components/FormField"
import FormInput from "../components/FormInput"
import logo from "../assets/images/logo-devlinks-large.svg"
import { useAuth } from "../store/useAuth"

const Login: React.FC = () => {
  const setLogin = useAuth(state => state.setLogin)

  return (
    <div className="container-short centered">
      <div>
        <div className="module-logo">
          <img src={logo} alt="" />
        </div>
        <div className="module">
          <h1>Login</h1>
          <div className="module-text">
            Add your details below to get back into the app
          </div>
          <FormField label="Email address">
            <FormInput handler={() => {}} placeholder="e.g. alex@email.com" icon="mail" type="email" />
          </FormField>
          <FormField label="Password">
            <FormInput handler={() => {}} placeholder="Enter your password" icon="lock" type="password" />
          </FormField>
          <FormField>
            <Btn text="Login" expand handler={setLogin} />
          </FormField>
          <div className="module-text text-center">
            Don't have an account? <Link to="/register">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
