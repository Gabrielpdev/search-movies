import { FlexBox } from '@ui5/webcomponents-react'
import './styles.scss'

export function Loading() {
  return (
    <FlexBox alignItems="Center" justifyContent="Center" className="loading-content">
      <div className="right" />

      <FlexBox alignItems="Start" justifyContent="Start" direction="Column" className="left">
        <p />

        <div />
        <div />
        <div />
        <div />
      </FlexBox>
    </FlexBox>
  )
}
