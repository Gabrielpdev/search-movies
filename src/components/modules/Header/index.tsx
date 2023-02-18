import { FlexBox } from '@ui5/webcomponents-react'
import './styles.scss'

export function Header() {
  return (
    <FlexBox className="header" alignItems="Center" justifyContent="SpaceBetween">
      <FlexBox alignItems="Center" justifyContent="Center" className="logo">
        Movie Search
        <img src="/assets/cinema.png" alt="" />
      </FlexBox>
    </FlexBox>
  )
}
