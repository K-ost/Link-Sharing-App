import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import eye from "../../assets/images/icon-preview-header.svg"
import React from "react"

interface IBtn {
  bordered?: boolean
  disabled?: boolean
  expand?: boolean
  handler?: () => void
  preview?: boolean
  text: string
  type?: 'button' | 'submit'
  to?: string
}

// Styled
const stylesBtn = css<{ $bordered: boolean, $expand: boolean }>`
  align-items: center;
  background: var(--color-${props => props.$bordered ? 'white' : 'purple'});
  border: 1px solid var(--color-${props => props.$bordered ? 'purple' : 'transparent'});
  border-radius: 8px;
  color: var(--color-${props => props.$bordered ? 'purple' : 'white'}) !important;
  cursor: pointer;
  display: flex;
  font-family: var(--ff);
  font-size: var(--fs);
  font-weight: 600;
  justify-content: center;
  line-height: 24px;
  outline: none;
  padding: 11px 26px;
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
      box-shadow: ${props => !props.$bordered ? '0px 0px 32px 0px rgba(99, 60, 255, 0.25)' : 'none !important'};
    }
  }
  @media screen and (max-width: 750px) {
    svg { display: block; }
    &.preview {
      background-image: url(${eye});
      background-position: center;
      background-repeat: no-repeat;
      height: 42px;
      width: 52px;
      span { display: none; }
    }
  }
`

export const Button = styled.button<{ $bordered: boolean, $expand: boolean }>`
  ${stylesBtn}
`
const LinkButton = styled(Link)<{ $bordered: boolean, $expand: boolean }>`
  ${stylesBtn}
`

const Btn: React.FC<IBtn> = ({ bordered = false, disabled, expand = false, handler, preview = false, text, type = 'button', to }) => {
  return (
    <>
      {!to
        ? <Button
          type={type}
          $bordered={bordered}
          $expand={expand}
          disabled={disabled}
          onClick={handler}
        >
          <span>{text}</span>
        </Button>
        : <LinkButton to={to} $bordered={bordered} $expand={expand} className={preview ? 'preview' : ''}>
            <span>{text}</span>
          </LinkButton>
      }
    </>
  )
}

export default Btn
