import { useEffect } from "react"
import styled from "styled-components"
import { useAuth } from "../store/useApp"

// Styles
const Response = styled.div<{ $show: boolean }>`
  background: var(--color-grey-dark);
  border-radius: 12px;
  bottom: 40px;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);
  color: var(--color-grey-light);
  font-weight: 600;
  left: 50%;
  padding: 16px 24px;
  position: fixed;
  transform: translateX(-50%);
  transition: all 400ms ease-in-out;
  opacity: ${props => props.$show ? '1' : '0'};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  z-index: 500;
`

const ResponseBox: React.FC = () => {
  const { clearResponse, response } = useAuth()

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearResponse()
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [response])
  
  return (
    <Response $show={!!response}>
      {response}
    </Response>
  )
}

export default ResponseBox
