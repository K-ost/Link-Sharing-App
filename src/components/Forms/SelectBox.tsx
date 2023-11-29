import Select, { components } from 'react-select'
import { SelectControlStyle, SelectMenuStyle, SelectOptionStyle, IndicatorStyle } from './SelectBoxStyles'
import { LinkOptionType } from '../../types'

interface ISelectBox {
  list: LinkOptionType[]
  valid: any
}

// Select icon
const selectIcon = { maxHeight: '16px', display: 'block', marginRight: '12px', width: '16px' }

// Component
const SelectBox: React.FC<ISelectBox> = ({ list, valid }) => {

  // Curstom option
  const { Option, SingleValue } = components
  const IconOption = (props: any) => (
    <Option {...props}>
      <img
        src={`../../src/assets/images/icon-${props.data.icon}`}
        style={selectIcon}
        alt={props.data.label}
      />
      {props.data.label}
    </Option>
  )
  const IconControl = (props: any) => {
    const currentValue = props.getValue()[0]
    return <SingleValue {...props}>
      <img
        src={`/src/assets/images/icon-${currentValue.icon}`}
        style={selectIcon}
        alt={currentValue.label}
      />
      {currentValue.label}
    </SingleValue>
  }
  
  return (
    <Select
      options={list}
      isSearchable={false}
      components={{ Option: IconOption, SingleValue: IconControl }}
      maxMenuHeight={200}
      {...valid}
      styles={{
        control: (base, props) => ({
          ...base,
          border: `1px solid ${props.menuIsOpen ? 'var(--color-purple)' : 'var(--color-border)'} !important`,
          boxShadow: props.menuIsOpen ? '0px 0px 32px 0px rgba(99, 60, 255, 0.25)' : 'none',
          ...SelectControlStyle
        }),
        valueContainer: (base) => ({
          ...base,
          padding: '0 14px'
        }),
        dropdownIndicator(base, props) {
          const opened = props.selectProps.menuIsOpen
          return {
            ...base,
            ...IndicatorStyle,
            transform: opened ? 'matrix(1,0,0,-1,0,0)' : 'none'
          }
        },
        indicatorSeparator: () => ({}),
        singleValue: (base) => ({
          ...base,
          alignItems: 'center',
          color: `#4C4C4C`,
          display: 'flex',
        }),
        menu: (base) => ({
          ...base,
          ...SelectMenuStyle
        }),
        option: (base, props) => {
          return {
            ...base,
            ...SelectOptionStyle,
            color: props.isSelected ? 'var(--color-purple)' : 'var(--color-grey-dark)',
            'img': {
              fill: props.isSelected ? 'var(--color-purple)' : '0'
            }
          }
        }
      }}
    />
  )
}

export default SelectBox
