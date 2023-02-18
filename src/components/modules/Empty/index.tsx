import { FlexBox } from '@ui5/webcomponents-react'
import './styles.scss'

export function Empty() {
  return (
    <FlexBox
      alignItems="Center"
      justifyContent="Center"
      direction="Column"
      className="empty-content"
    >
      <h3>No movie searched</h3>
      <p>Please search a new movie.</p>
    </FlexBox>
  )
}
