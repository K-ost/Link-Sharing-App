import { useForm } from "react-hook-form"
import Content from "../components/Content"
import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import FormInput from "../components/Forms/FormInput"
import Uploader from "../components/Uploader/Uploader"
import { useAuth } from "../store/useAuth"
import { useState } from "react"

const Profile: React.FC = () => {
  const { profile, updateProfile } = useAuth()
  const [photo, setPhoto] = useState<any>(profile?.photo)
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstname: profile?.firstname,
      lastname: profile?.lastname,
      email: profile?.email
    }
  })

  // saveUser
  const saveUser = (data: any) => {
    updateProfile({ ...data, photo })
  }

  return (
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
        <FormField label="Last name*" line>
          <FormInput
            placeholder="e.g. Appleseed"
            valid={register('lastname', { required: "Can't be empty" })}
            error={errors.lastname && errors.lastname?.message}
          />
        </FormField>
        <FormField label="Email" line>
          <FormInput
            placeholder="e.g. email@example.com"
            valid={register('email')}
          />
        </FormField>
      </div>
    </Content>
  )
}

export default Profile
