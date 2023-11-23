import styled from "styled-components"

interface IFormField {
  children: React.ReactNode
  className?: string
  label?: string
  line?: boolean
}

// Styles
const Field = styled.div<{ $lined: boolean }>`
  align-items: center;
  color: var(--color-grey);
  display: ${props => props.$lined ? 'flex' : 'display: block'};
  font-size: 12px;
  line-height: 18px;
  margin: ${props => props.$lined ? '0 0 12px;' : '0 0 var(--gap);'}
  &.last { margin: 0; }
`
const FieldLabel = styled.label<{ $lined: boolean }>`
  color: var(--color-grey-dark);
  display: block;
  font-size: 12px;
  line-height: 18px;
  margin: 0 0 4px;
  ${props => props.$lined && `
    margin: 0 16px 0 0;
    min-width: var(--labelw);
  `}
`

const FormField: React.FC<IFormField> = ({ children, className, label, line = false }) => {
  return (
    <Field className={className} $lined={line}>
      {label && <FieldLabel $lined={line}>{label}</FieldLabel>}
      {children}
    </Field>
  )
}

export default FormField
