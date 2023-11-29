import styled from "styled-components"
import logo from "../assets/images/logo-devlinks-large.svg"
import logoMobile from "../assets/images/logo-devlinks-small.svg"
import Nav from "./Nav"
import Btn from "./Forms/Btn"

// Styles
export const HeaderBox = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 16px var(--gap);
  @media screen and (max-width: 750px) {
    border-radius: 0;
  }
`
const HeaderLogo = styled.div`
  background: url(${logo}) no-repeat;
  display: block;
  height: 40px;
  width: 183px;
  @media screen and (max-width: 750px) {
    background-image: url(${logoMobile});
    height: 32px;
    width: 32px;
  }
`

const Header: React.FC = () => {
  return (
    <HeaderBox className="module" role="header">
      <HeaderLogo />
      <Nav />
      <Btn to="/preview" text="Preview" bordered preview />
    </HeaderBox>
  )
}
export default Header
