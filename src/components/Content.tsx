import styled from "styled-components"
import { Button } from "./Forms/Btn"

interface IContent {
  btn: React.ReactNode
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
  justify-content: flex-end;
  padding: var(--gap);
  @media screen and (max-width: 750px) {
    ${Button} { width: 100%; }
  }
`

const Content: React.FC<IContent> = ({ btn, children }) => {
  return (
    <ContentBox>
      <ContentTop>
        {children}
      </ContentTop>
      <ContentBottom>
        {btn}
      </ContentBottom>
    </ContentBox>
  )
}

export default Content
