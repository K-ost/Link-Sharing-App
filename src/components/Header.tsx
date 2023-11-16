import styled from "styled-components"
import logo from "../assets/images/logo-devlinks-large.svg"
import Nav from "./Nav"
import Btn from "./Forms/Btn"

// Styles
export const HeaderBox = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 16px var(--gap);
`
const HeaderLogo = styled.div`
  img { display: block; }
`

const Header: React.FC = () => {
  return (
    <HeaderBox className="module">
      <HeaderLogo>
        <img src={logo} alt="" />
      </HeaderLogo>
      <Nav />
      <Btn text="Preview" bordered />
    </HeaderBox>
  )
}
export default Header
