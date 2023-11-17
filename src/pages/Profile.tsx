import Content from "../components/Content"
import Btn from "../components/Forms/Btn"

const Profile: React.FC = () => {
  return (
    <Content btn={<Btn text="Save" />}>
      <h1>Profile Details</h1>
      <article className="article">Add your details to create a personal touch to your profile.</article>
    </Content>
  )
}

export default Profile
