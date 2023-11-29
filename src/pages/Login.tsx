import { Link } from "react-router-dom"
import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import FormInput from "../components/Forms/FormInput"
import logo from "../assets/images/logo-devlinks-large.svg"
import { useAuth } from "../store/useApp"
import { useForm } from "react-hook-form"

const Login: React.FC = () => {
  const loginUser = useAuth(state => state.loginUser)
  const { handleSubmit, register, formState: { errors } } = useForm()

  // loginHandler
  const loginHandler = (data: any) => {
    loginUser(data)
  }

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
          <form onSubmit={handleSubmit(loginHandler)} noValidate>
            <FormField label="Email address">
              <FormInput
                valid={register('email', {
                  required: 'Required field',
                  pattern: { message: 'E-mail must be correct', value: /^\S+@\S+$/i }
                })}
                error={errors.email && errors.email.message}
                placeholder="e.g. alex@email.com"
                icon="mail"
                type="email"
              />
            </FormField>
            <FormField label="Password">
              <FormInput
                valid={register('password', {
                  required: 'Required field',
                  minLength: { value: 8, message: 'Should contain at least 8 characters' }
                })}
                error={errors.password && errors.password.message}
                placeholder="Enter your password"
                icon="lock"
                type="password"
              />
            </FormField>
            <FormField>
              <Btn type="submit" text="Login" expand />
            </FormField>
          </form>
          <div className="module-text text-center">
            Don't have an account? <Link to="/register" aria-label="Create account link">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
