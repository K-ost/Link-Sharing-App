import styled from "styled-components"
import Btn from "../components/Btn"
import FormField from "../components/FormField"
import empty from "../assets/images/illustration-empty.svg"

// Styled
export const ArticleText = styled.article`
  margin: 0 0 40px;
`

const Desktop: React.FC = () => {
  return (
    <div>
      <h1>Customize your links</h1>
      <ArticleText>Add/edit/remove links below and then share all your profiles with the world!</ArticleText>

      <FormField>
        <Btn text="+ Add new link" bordered expand />
      </FormField>

      <img src={empty} alt="" />
      <div className="h1">Let's get you started</div>
      <ArticleText>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</ArticleText>
    </div>
  )
}

export default Desktop
