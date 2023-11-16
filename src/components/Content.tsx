import styled from "styled-components"
import Btn from "./Forms/Btn"
import { useAuth } from "../store/useAuth"

interface IContent {
  btnText?: string
  children: React.ReactNode
}

// Styles
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`
const ContentTop = styled.div`
  flex: 1;
  overflow: auto;
  padding: var(--gap);
`
const ContentBottom = styled.div`
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  padding: var(--gap);
`

const Content: React.FC<IContent> = ({ btnText = 'Save', children }) => {
  const setLogout = useAuth(state => state.setLogout)

  return (
    <ContentBox>
      <ContentTop>
        {children}
      </ContentTop>
      <ContentBottom>
        <Btn text="Logout" bordered handler={setLogout} />
        <Btn text={btnText} disabled />
      </ContentBottom>
    </ContentBox>
  )
}

export default Content
