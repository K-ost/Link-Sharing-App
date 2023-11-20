import Select from 'react-select'
import { SelectControlStyle, SelectMenuStyle, SelectOptionStyle } from './SelectBoxStyles'
// import github from "../../assets/images/icon-github.svg"
// import frontendMentor from "../../assets/images/icon-frontend-mentor.svg"
// import twitter from "../../assets/images/icon-twitter.svg"
// import linkedin from "../../assets/images/icon-linkedin.svg"
// import youtube from "../../assets/images/icon-youtube.svg"
// import facebook from "../../assets/images/icon-facebook.svg"
// import twitch from "../../assets/images/icon-twitch.svg"
// import devto from "../../assets/images/icon-devto.svg"
// import codewars from "../../assets/images/icon-codewars.svg"
// import codepen from "../../assets/images/icon-codepen.svg"
// import freecodecamp from "../../assets/images/icon-freecodecamp.svg"
// import gitlab from "../../assets/images/icon-gitlab.svg"
// import hashnode from "../../assets/images/icon-hashnode.svg"
// import stackOverflow from "../../assets/images/icon-stack-overflow.svg"

interface ISelectBox {
  list: any[]
  valid: any
}

const SelectBox: React.FC<ISelectBox> = ({ list, valid }) => {
  return (
    <Select
      options={list}
      isSearchable={false}
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
          padding: '0 0 0 44px'
        }),
        indicatorSeparator: () => ({}),
        singleValue: (base) => ({
          ...base, color: `#4C4C4C`
        }),
        menu: (base) => ({
          ...base,
          ...SelectMenuStyle
        }),
        option: (base, props) => ({
          ...base,
          ...SelectOptionStyle
        })
      }}
    />
  )
}

export default SelectBox
