import styled from "styled-components"
import link from "../../assets/images/icon-link.svg"
import mail from "../../assets/images/icon-email.svg"
import lock from "../../assets/images/icon-password.svg"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"

export type InputIconType = 'link' | 'mail' | 'lock' | null

interface IFormInput {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  handler?: () => void
  icon?: InputIconType
  placeholder?: string
  type?: 'password' | 'text' | 'email'
  valid?: any
}

// Styled
export const InputWrap = styled.div<{ $icon: InputIconType }>`
  position: relative;
  width: 100%;
  &::before {
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => 
      props.$icon === 'link' ? `url(${link})` :
      props.$icon === 'lock' ? `url(${lock})` :
      props.$icon === 'mail' ? `url(${mail})` :
      'none'
    };
    content: '';
    display: block;
    height: 16px;
    left: 16px;
    margin-top: -8px;
    position: absolute;
    top: 50%;
    width: 16px;
  }
`
export const InputError = styled.div`
  color: var(--color-red);
  font-size: 12px;
  line-height: 18px;
  margin-top: -9px;
  position: absolute;
  right: 16px;
  top: 50%;
`
const Input = styled.input<{ $error: boolean, $icon: InputIconType }>`
  background: var(--color-white);
  border-radius: 8px;
  border: 1px solid ${props => props.$error ? 'var(--color-red) !important' : 'var(--color-border)'};
  color: ${props => props.$error ? 'var(--color-red)' : '#4C4C4C'};
  font-family: var(--ff);
  font-size: var(--fs);
  line-height: 24px;
  height: 48px;
  outline: none;
  padding: ${props => !props.$icon ? '12px 16px' : '12px 16px 12px 44px'};
  width: 100%;
  -webkit-appearance: none;
  &::placeholder { color: #999999; }
  &:focus {
    border-color: var(--color-purple);
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
  }
`

const FormInput: React.FC<IFormInput> = ({ handler, error = false, icon = null, placeholder, type = 'text', valid }) => {
  return (
    <InputWrap $icon={icon}>
      <Input
        type={type}
        onChange={handler}
        $error={error}
        $icon={icon}
        placeholder={placeholder}
        {...valid}
      />
      {error && <InputError>{error.toString()}</InputError>}
    </InputWrap>
  )
}

export default FormInput
