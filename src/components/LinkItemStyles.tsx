import styled from "styled-components"
import drag from "../assets/images/icon-drag-and-drop.svg"

// Styles
export const ItemBox = styled.div<{ $over: boolean }>`
  background: var(--color-${props => props.$over ? 'purple-hover' : 'grey-light'});
  ${props => props.$over && 'box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);'}
`
export const ItemTop = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 12px;
`
export const ItemName = styled.div`
  color: var(--color-grey);
  cursor: pointer;
  font-weight: 700;
  padding: 0 0 0 20px;
  position: relative;
  &::before {
    background: url(${drag}) no-repeat;
    content: '';
    display: block;
    height: 6px;
    left: 0;
    margin-top: -3px;
    position: absolute;
    top: 50%;
    width: 12px;
  }
`
export const ItemDelete = styled.button`
  color: var(--color-grey);
  font-size: var(--fs);
  font-weight: 400;
  line-height: 24px;
`
