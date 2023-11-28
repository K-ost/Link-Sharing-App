import { useEffect } from "react"
import styled from "styled-components"
import { useAuth } from "../store/useApp"
import link from "../assets/images/icon-link-copied-to-clipboard.svg"

// Styles
const Response = styled.div<{ $show: boolean, $icon?: boolean }>`
  background: var(--color-grey-dark);
  border-radius: 12px;
  bottom: 40px;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);
  color: var(--color-grey-light);
  font-weight: 600;
  left: 50%;
  opaicity: 0.9;
  padding: 16px 24px;
  position: fixed;
  transform: translateX(-50%);
  transition: all 300ms ease-in-out;
  opacity: ${props => props.$show ? '1' : '0'};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  z-index: 500;
  ${props => props.$icon && `
    background-image: url(${link});
    background-position: 24px center;
    background-repeat: no-repeat;
    padding-left: 52px;
  `}
  @media screen and (max-width: 750px) {
    padding: 10px 16px;
    max-width: 300px;
    width: 100%;
    ${props => props.$icon && `
      background-position: 12px center;
      padding-left: 42px;
    `}
  }
`

const ResponseBox: React.FC = () => {
  const { clearResponse, response } = useAuth()

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearResponse()
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [response])
  
  return (
    <Response $show={response.show} $icon={response.icon}>
      {response.message}
    </Response>
  )
}

export default ResponseBox
