import styled from "styled-components"
import empty from "../assets/images/illustration-empty.svg"

// Styles
const EmptyBox = styled.div`
  padding: var(--gap);
  text-align: center;
  img {
    display: block;
    margin: 0 auto 40px;
  }
  .article { max-width: 488px; margin: 0 auto; }
  @media screen and (max-width: 750px) {
    img { max-width: 124px; margin-bottom: 24px; }
  }
`

const Empty = () => {
  return (
    <EmptyBox className="greybox">
      <img src={empty} alt="" />
      <div className="h1">Let's get you started</div>
      <article className="article">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</article>
    </EmptyBox>
  )
}

export default Empty
