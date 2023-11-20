import styled from "styled-components"
import { useLinks } from "../store/useLinks"

// Styles
const PreviewAva = styled.div`
  background: var(--color-skelets);
  border-radius: var(--ava);
  height: var(--ava);
  margin: 0 auto var(--gap);
  width: var(--ava);
  img {
    display: block;
    border-radius: var(--ava);
    height: var(--ava);
    width: var(--ava);
  }
`
const PreviewName = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  margin: 0 0 12px;
`
const PreviewEmail = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 0 0 56px;
`
const PreviewNameSkelet = styled.div<{ $type?: 'small' | 'medium' }>`
  background: var(--color-skelets);
  border-radius: 8px;
  height: ${({ $type }) => $type === 'medium' ? '16px' : $type === 'small' ? '8px' : '44px'};
  margin: ${({ $type }) => $type === 'medium' ? '0 auto' : $type === 'small' ? '0 auto' : '0 0 20px'};
  width: ${({ $type }) => $type === 'medium' ? '160px' : $type === 'small' ? '72px' : 'auto'};
`

const PreviewScreen: React.FC = () => {
  const links = useLinks(state => state.links)
  return (
    <div>
      <pre>{JSON.stringify(links, null, 2)}</pre>
      <PreviewAva></PreviewAva>
      <PreviewName>
        <PreviewNameSkelet $type="medium" />
      </PreviewName>
      <PreviewEmail>
        <PreviewNameSkelet $type="small" />
      </PreviewEmail>
      <PreviewNameSkelet />
      <PreviewNameSkelet />
      <PreviewNameSkelet />
      <PreviewNameSkelet />
      <PreviewNameSkelet />
    </div>
  )
}

export default PreviewScreen
