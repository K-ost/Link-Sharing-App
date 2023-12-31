import styled from "styled-components"
import { LinkOptionType } from "../../types"
import arrowRight from "../../assets/images/icon-arrow-right.svg"
import arrowRightBlack from "../../assets/images/icon-arrow-right-black.svg"
import { useAuth } from "../../store/useApp"

interface IPreviewItem {
  link: string
  platform: LinkOptionType
}

// Styles
const ItemImg = styled.div`
  margin: 0 8px 0 0;
  min-width: 20px;
  max-width: 20px;
  .selectIconDiv { display: block; filter: brightness(0) invert(1); }
`
const Item = styled.button`
  align-items: center;
  background: var(--color-skelets);
  border: 0;
  border-radius: 8px;
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 20px;
  height: 44px;
  padding: 11px 16px;
  position: relative;
  width: 100%;
  &:last-child { margin: 0; }
  &:hover { color: var(--color-white); }
  &::after {
    background: url(${arrowRight}) center no-repeat;
    content: '';
    display: block;
    height: 16px;
    margin-top: -8px;
    position: absolute;
    right: 16px;
    top: 50%;
    width: 16px;
  }
  &.item-github { background-color: #1A1A1A; }
  &.item-frontendmentor {
    background-color: var(--color-white);
    box-shadow: inset 0 0 0 1px var(--color-border);
    color: var(--color-grey-dark);
    &::after { background-image: url(${arrowRightBlack}); }
    .selectIconDiv { filter: none; }
  }
  &.item-twitter { background-color: #43B7E9; }
  &.item-linkedin { background-color: #2D68FF; }
  &.item-youtube { background-color: #EE3939; }
  &.item-facebook { background-color: #2442AC; }
  &.item-twitch { background-color: #EE3FC8; }
  &.item-devto { background-color: #333333; }
  &.item-codewars { background-color: #8A1A50; }
  &.item-codepen { background-color: #333333; }
  &.item-freecodecamp { background-color: #302267; }
  &.item-gitlab { background-color: #EB4925; }
  &.item-hashnode { background-color: #0330D1; }
  &.item-stackoverflow { background-color: #EC7100; }
`

const PreviewItem: React.FC<IPreviewItem> = ({ link, platform }) => {
  const setResponse = useAuth(state => state.setResponse)

  // copyToClipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setResponse({
      message: 'The link has been copied to your clipboard!',
      show: true,
      icon: true
    })
  }

  return (
    <Item className={`item-${platform.value}`} onClick={copyToClipboard}>
      <ItemImg>
        <div className={`selectIconDiv selectIconDiv-color selectIconDiv-${platform.value}`}></div>
      </ItemImg>
      {platform.label}
    </Item>
  )
}

export default PreviewItem
