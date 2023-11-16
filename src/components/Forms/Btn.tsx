import styled from "styled-components"

interface IBtn {
  bordered?: boolean
  disabled?: boolean
  expand?: boolean
  handler?: () => void
  text: string
  type?: 'button' | 'submit'
}

// Styled
const Button = styled.button<{ $bordered: boolean, $expand: boolean }>`
  background: var(--color-${props => props.$bordered ? 'white' : 'purple'});
  border: 1px solid var(--color-${props => props.$bordered ? 'purple' : 'transparent'});
  border-radius: 8px;
  color: var(--color-${props => props.$bordered ? 'purple' : 'white'});
  cursor: pointer;
  font-family: var(--ff);
  font-size: var(--fs);
  font-weight: 600;
  line-height: 24px;
  outline: none;
  padding: 10px 26px;
  text-align: center;
  transition: var(--animate);
  width: ${props => props.$expand ? '100%' : 'auto'};
  -webkit-appearance: none;
  &:disabled {
    cursor: default;
    opacity: 0.25;
  }
  &:hover, &:active {
    &:not(:disabled) {
      background: var(--color-${props => props.$bordered ? 'purple-light' : 'purple-hover'});
      border-color: var(--color-${props => props.$bordered ? 'purple' : 'purple-hover'});
    }
  }
`

const Btn: React.FC<IBtn> = ({ bordered = false, disabled, expand = false, handler, text, type = 'button' }) => {
  return (
    <Button
      type={type}
      $bordered={bordered}
      $expand={expand}
      disabled={disabled}
      onClick={handler}
    >{text}</Button>
  )
}

export default Btn
