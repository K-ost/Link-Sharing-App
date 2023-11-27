import { useForm } from "react-hook-form"
import Content from "../components/Content"
import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import FormInput from "../components/Forms/FormInput"
import Uploader from "../components/Uploader/Uploader"
import { useState } from "react"
import Template from "../components/Template"
import { useAuth } from "../store/useApp"

const Profile: React.FC = () => {
  const { auth, updateProfile } = useAuth()
  const [photo, setPhoto] = useState<any>(auth?.photo)
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstname: auth?.firstname,
      lastname: auth?.lastname,
      email: auth?.email
    }
  })

  // saveUser
  const saveUser = (data: any) => {
    updateProfile({ ...data, photo }, auth?.id!)
  }

  return (
    <Template>
      <Content btn={<Btn text="Save" handler={handleSubmit(saveUser)} />}>
        <h1>Profile Details</h1>
        <article className="article">Add your details to create a personal touch to your profile.</article>

        <Uploader setPhoto={setPhoto} />

        <div className="greybox">
          <FormField label="First name*" line>
            <FormInput
              placeholder="e.g. John"
              valid={register('firstname', { required: "Can't be empty" })}
              error={errors.firstname && errors.firstname?.message}
            />
          </FormField>
          <FormField label="Last name" line>
            <FormInput
              placeholder="e.g. Appleseed"
              valid={register('lastname')}
              error={errors.lastname && errors.lastname?.message}
            />
          </FormField>
          <FormField label="Email*" line>
            <FormInput
              placeholder="e.g. email@example.com"
              valid={register('email', {
                required: 'Required field',
                pattern: { message: 'E-mail must be correct', value: /^\S+@\S+$/i }
              })}
              error={errors.email && errors.email?.message}
            />
          </FormField>
        </div>
      </Content>
    </Template>
  )
}

export default Profile
