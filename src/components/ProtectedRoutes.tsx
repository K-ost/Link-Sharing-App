import { Navigate, Outlet } from "react-router-dom"
import styled from "styled-components"
import Header, { HeaderBox } from "./Header"
import preview from "../assets/images/illustration-phone-mockup.svg"
import PreviewScreen from "./Preview/PreviewScreen"

interface IProtectedRoutes {
  isAuth: boolean
}

// Styles
const AppWrap = styled.div`
  height: 100vh;
  padding: var(--gap);
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: auto 1fr;
  gap: var(--gap);
  grid-auto-rows: auto;
  grid-template-areas: 
    "Header Header"
    "Preview Content";
  ${HeaderBox} { grid-area: Header; }
  .module-preview { grid-area: Preview; display: flex; align-items: center; justify-content: center; }
  .module-content { grid-area: Content; padding: 0; overflow: hidden; }
  @media screen and (max-width: 1020px) {
    display: flex; flex-direction: column;
    .module-preview { display: none; }
    .module-content { flex: 1; }
  }
`
const PreviewWrap = styled.div`
  background: url(${preview}) 0 0 no-repeat;
  height: 632px;
  width: 307px;
  padding: 64px 35px 30px;
`

const ProtectedRoutes: React.FC<IProtectedRoutes> = ({ isAuth }) => {
  return isAuth
  ? <AppWrap>
      <Header />
      <div className="module module-preview">
        <PreviewWrap>
          <PreviewScreen />
        </PreviewWrap>
      </div>
      <div className="module module-content">
        <Outlet />
      </div>
    </AppWrap>
  : <Navigate to="/login" />
}

export default ProtectedRoutes
