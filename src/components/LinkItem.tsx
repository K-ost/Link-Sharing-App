import styled from "styled-components"
import { linksOptions } from "../helpers"
import FormField from "./Forms/FormField"
import FormInput from "./Forms/FormInput"
import drag from "../assets/images/icon-drag-and-drop.svg"
import SelectBox from "./Forms/SelectBox"

interface ILinkItem {
  index: number
  handlerSelect: any
  handlerInput: any
  error: string | undefined
  remove: (index: number) => void
}

// Styles
const ItemTop = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 12px;
`
const ItemName = styled.div`
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
const ItemDelete = styled.button`
  color: var(--color-grey);
  font-size: var(--fs);
  font-weight: 400;
  line-height: 24px;
`


const LinkItem: React.FC<ILinkItem> = ({ error, index, handlerInput, handlerSelect, remove }) => {
  return (
    <div className="greybox">
      <ItemTop>
        <ItemName>Link #{index + 1}</ItemName>
        <ItemDelete className="resetBtn" onClick={() => remove(index)}>Remove</ItemDelete>
      </ItemTop>

      <FormField label="Platform">
        <SelectBox list={linksOptions} valid={handlerSelect} />
      </FormField>

      <FormField label="Link" className="last">
        <FormInput icon="link" valid={handlerInput} error={error} />
      </FormField>
    </div>
  )
}

export default LinkItem
