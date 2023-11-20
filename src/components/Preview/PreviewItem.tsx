import styled from "styled-components"
import { LinkOptionType } from "../../types"
import arrowRight from "../../assets/images/icon-arrow-right.svg"
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

interface IPreviewItem {
  link: string
  platform: LinkOptionType
}

// Styles
const Item = styled.div`
  align-items: center;
  background: var(--color-skelets);
  border-radius: 8px;
  color: var(--color-white);
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 20px;
  min-height: 44px;
  padding: 11px 16px 11px 40px;
  position: relative;
  &::before, &::after { content: ''; display: block; position: absolute; top: 50%; }
  &::before {
    background-position: center;
    background-repeat: no-repeat;
    height: 20px;
    left: 16px;
    margin-top: -10px;
    width: 20px;
  }
  &::after {
    background: url(${arrowRight}) center no-repeat;
    height: 16px;
    margin-top: -8px;
    right: 16px;
    width: 16px;
  }
  &.item-github {
    background: #1A1A1A;
    &::before { background-image: url(${github}); }
  }
  &.item-frontendMentor {
    background: var(--color-white);
    box-shadow: inset 0 0 0 1px #D9D9D9;
    color: var(--color-grey-dark);
    &::before { background-image: url(${frontendMentor}); }
  }
  &.item-twitter {
    background: #43B7E9;
    &::before { background-image: url(${twitter}); }
  }
  &.item-linkedin {
    background: #2D68FF;
    &::before { background-image: url(${linkedin}); }
  }
  &.item-youtube {
    background: #EE3939;
    &::before { background-image: url(${youtube}); }
  }
`

const PreviewItem: React.FC<IPreviewItem> = ({ link, platform }) => {
  return (
    <Item className={`item-${platform.value}`}>
      {platform.label}
    </Item>
  )
}

export default PreviewItem
