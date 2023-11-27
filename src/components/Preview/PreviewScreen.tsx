import styled from "styled-components"
import PreviewItem from "./PreviewItem"
import { useAuth } from "../../store/useApp"

// Styles
const PreviewAva = styled.div`
  background: var(--color-skelets);
  border-radius: var(--ava);
  height: var(--ava);
  margin: 0 auto 16px;
  width: var(--ava);
  img {
    display: block;
    border-radius: var(--ava);
    height: var(--ava);
    object-fit: cover;
    width: var(--ava);
  }
`
const PreviewName = styled.div`
  color: var(--color-grey-dark);
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  margin: 0 0 8px;
  text-align: center;
`
const PreviewEmail = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 44px;
  min-height: 18px;
  text-align: center;
`
const PreviewNameSkelet = styled.div<{ $type?: 'small' | 'medium' }>`
  background: var(--color-skelets);
  border-radius: 8px;
  height: ${({ $type }) => $type === 'medium' ? '16px' : $type === 'small' ? '8px' : '44px'};
  margin: ${({ $type }) => $type === 'medium' ? '0 auto' : $type === 'small' ? '0 auto' : '0 0 20px'};
  width: ${({ $type }) => $type === 'medium' ? '160px' : $type === 'small' ? '72px' : 'auto'};
  &:last-child { margin-bottom: 0; }
`
const PreviewList = styled.div`
  height: calc(((44px + 20px) * 5) - 20px);
  overflow: auto;
`

const PreviewScreen: React.FC = () => {
  const { auth } = useAuth()

  // skeletsRest
  const skeletsRest = 5 - auth!.links.length

  return (
    <div>
      <PreviewAva>
        {auth?.photo && <img src={auth.photo} alt="" />}
      </PreviewAva>
      <PreviewName>
        {(!auth?.firstname && !auth?.lastname) && <PreviewNameSkelet $type="medium" />}
        {auth?.firstname && auth.firstname} {auth?.lastname && auth.lastname}
      </PreviewName>
      <PreviewEmail>
        {!auth?.email && <PreviewNameSkelet $type="small" />}
        {auth?.email && auth.email}
      </PreviewEmail>

      <PreviewList>
        {auth?.links.map(el => <PreviewItem key={el.id} link={el.link} platform={el.platform} />)}
        {(skeletsRest > 0) && Array.from(Array(skeletsRest)).map((__, index) => <PreviewNameSkelet key={index} />)}
      </PreviewList>

    </div>
  )
}

export default PreviewScreen
