import { Link, useNavigate } from "react-router-dom"
import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import FormInput from "../components/Forms/FormInput"
import logo from "../assets/images/logo-devlinks-large.svg"
import { useForm } from "react-hook-form"
import { useAuth } from "../store/useApp"

const Register: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const { createUser } = useAuth()
  const navigate = useNavigate()

  // signUpHandler
  const signUpHandler = (data: any) => {
    createUser(data)
    navigate('/login')
  }

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
          <form onSubmit={handleSubmit(signUpHandler)}>
            
            <FormField label="Email address">
              <FormInput
                valid={register('email', {
                  required: 'Required field',
                  pattern: { message: 'E-mail must be correct', value: /^\S+@\S+$/i }
                })}
                placeholder="e.g. alex@email.com"
                icon="mail"
                type="email"
                error={errors.email && errors.email.message}
              />
            </FormField>

            <FormField label="Create password">
              <FormInput
                valid={register('password', {
                  required: 'Required field',
                  minLength: { value: 8, message: 'Should contain at least 8 characters' }
                })}
                placeholder="At least 8 characters"
                type="password"
                icon="lock"
                error={errors.password && errors.password.message}
              />
            </FormField>

            <FormField label="Confirm password">
              <FormInput
                valid={register('repass', {
                  required: 'Required field',
                  validate: (val: string) => {
                    if (watch('password') !== val) {
                      return 'Passwords do not matach'
                    }
                  }
                })}
                placeholder="At least 8 characters"
                type="password"
                icon="lock"
                error={errors.repass && errors.repass.message}
              />
            </FormField>

            <FormField>
              Password must contain at least 8 characters
            </FormField>
            
            <FormField>
              <Btn text="Create new account" expand type="submit" />
            </FormField>
          </form>
          <div className="module-text text-center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
