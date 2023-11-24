import React from 'react'
import Btn from '../Forms/Btn'
import styled from 'styled-components'

// Styles
const PreviewHead = styled.div`
  align-items: center;
  background: var(--color-white);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px;
  padding: 16px;
`

const PreviewHeader: React.FC = () => {
  return (
    <PreviewHead>
      <Btn to="/profile" text="Back to Editor" bordered />
      <Btn text="Share Link" />
    </PreviewHead>
  )
}

export default PreviewHeader
