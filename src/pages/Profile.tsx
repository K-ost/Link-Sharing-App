import Content from "../components/Content"
import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import FormInput from "../components/Forms/FormInput"
import Uploader from "../components/Uploader"

const Profile: React.FC = () => {
  return (
    <Content btn={<Btn text="Save" />}>
      <h1>Profile Details</h1>
      <article className="article">Add your details to create a personal touch to your profile.</article>

      <Uploader />

      <div className="greybox">
        <FormField label="First name*" line>
          <FormInput placeholder="e.g. John" />
        </FormField>
        <FormField label="Last name*" line>
          <FormInput placeholder="e.g. Appleseed" />
        </FormField>
        <FormField label="Email" line>
          <FormInput placeholder="e.g. email@example.com" />
        </FormField>
      </div>
    </Content>
  )
}

export default Profile
