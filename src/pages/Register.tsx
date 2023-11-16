import { Link } from "react-router-dom"
import Btn from "../components/Btn"
import FormField from "../components/FormField"
import FormInput from "../components/FormInput"
import logo from "../assets/images/logo-devlinks-large.svg"

const Register: React.FC = () => {
  return (
    <div className="container-short centered">
      <div>
        <div className="module-logo">
          <img src={logo} alt="" />
        </div>
        <div className="module">
          <h1>Create account</h1>
          <div className="module-text">
            Let's get you started sharing your links!
          </div>
          <FormField label="Email address">
            <FormInput handler={() => {}} placeholder="e.g. alex@email.com" icon="mail" type="email" />
          </FormField>
          <FormField label="Create password">
            <FormInput handler={() => {}} placeholder="At least 8 characters" type="password" icon="lock" />
          </FormField>
          <FormField label="Confirm password">
            <FormInput handler={() => {}} placeholder="At least 8 characters" type="password" icon="lock" />
          </FormField>
          <FormField>
            Password must contain at least 8 characters
          </FormField>
          <FormField>
            <Btn text="Create new account" expand />
          </FormField>
          <div className="module-text text-center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
