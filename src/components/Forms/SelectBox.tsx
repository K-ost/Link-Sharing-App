import Select from 'react-select'
import github from "../../assets/images/icon-github.svg"
import frontendMentor from "../../assets/images/icon-frontend-mentor.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import linkedin from "../../assets/images/icon-linkedin.svg"
import youtube from "../../assets/images/icon-youtube.svg"
import facebook from "../../assets/images/icon-facebook.svg"
import twitch from "../../assets/images/icon-twitch.svg"
import devto from "../../assets/images/icon-devto.svg"
import codewars from "../../assets/images/icon-codewars.svg"
import codepen from "../../assets/images/icon-codepen.svg"
import freecodecamp from "../../assets/images/icon-freecodecamp.svg"
import gitlab from "../../assets/images/icon-gitlab.svg"
import hashnode from "../../assets/images/icon-hashnode.svg"
import stackOverflow from "../../assets/images/icon-stack-overflow.svg"

interface ISelectBox {
  list: any[]
  valid: any
}

const SelectBox: React.FC<ISelectBox> = ({ list, valid }) => {
  return (
    <Select
      options={list}
      defaultValue={list[0]}
      isSearchable={false}
      styles={{
        control: (base, props) => {
          const val = props.getValue()[0].value
          return {
            ...base,
            backgroundColor: 'var(--color-white)',
            backgroundImage: `url(${
              val === 'github' ? github :
              val === 'frontendMentor' ? frontendMentor :
              val === 'twitter' ? twitter :
              val === 'linkedin' ? linkedin :
              val === 'youtube' ? youtube :
              val === 'facebook' ? facebook :
              val === 'twitch' ? twitch :
              val === 'devto' ? devto :
              val === 'codewars' ? codewars :
              val === 'codepen' ? codepen :
              val === 'freecodecamp' ? freecodecamp :
              val === 'gitlab' ? gitlab :
              val === 'hashnode' ? hashnode :
              val === 'stackOverflow' ? stackOverflow : ''
            })`,
            backgroundPosition: '16px center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '8px',
            border: `1px solid ${props.menuIsOpen ? 'var(--color-purple)' : 'var(--color-border)'} !important`,
            boxShadow: props.menuIsOpen ? '0px 0px 32px 0px rgba(99, 60, 255, 0.25)' : 'none',
            cursor: 'pointer',
            fontSize: 'var(--fs)',
            lineHeight: '24px',
            height: '48px',
            outline: 'none',
            padding: '0',
          }
        },
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
          background: 'var(--color-white)',
          borderRadius: '8px',
          boxShadow: '0px 10px 20px 0px rgba(54, 78, 126, 0.25);',
          padding: '8px 0',
        }),
        option: (base, props) => ({
          ...base,
          background: `${props.isSelected ? 'var(--color-purple)' : '0'}`,
          cursor: 'pointer',
          fontWeight: '500',
        })
      }}
    />
  )
}

export default SelectBox
