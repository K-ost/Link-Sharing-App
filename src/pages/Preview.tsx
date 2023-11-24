import styled from "styled-components"
import PreviewHeader from "../components/Preview/PreviewHeader"
import PreviewScreen from "../components/Preview/PreviewScreen"

// Styles
const mobileSize: string = '540px'
const PreviewPageContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  &::before {
    background: var(--color-purple); height: 357px;
    border-radius: 0px 0px 32px 32px; content: ''; display: block;
    position: absolute; width: 100%; top: 0; left: 0;
  }
  @media screen and (max-width: ${mobileSize}) {
    background: var(--color-white);
    &::before { content: none; display: none; }
  }
`
const PreviewPageInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: var(--gap);
  position: relative;
  z-index: 10;
  @media screen and (max-width: ${mobileSize}) {
    padding: 0;
  }
`
const PreviewPageBody = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: auto;
`
const PreviewArea = styled.div`
  background: var(--color-white);
  border-radius: var(--gap);
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);
  margin: 0 auto;
  max-width: 349px;
  padding: 48px 56px;
  width: 100%;
  @media screen and (max-width: ${mobileSize}) {
    box-shadow: none;
  }
`

const Preview: React.FC = () => {
  return (
    <PreviewPageContainer>
      <PreviewPageInner>
        <PreviewHeader />
        <PreviewPageBody>
          <PreviewArea>
            <PreviewScreen />
          </PreviewArea>
        </PreviewPageBody>
      </PreviewPageInner>
    </PreviewPageContainer>
  )
}

export default Preview
