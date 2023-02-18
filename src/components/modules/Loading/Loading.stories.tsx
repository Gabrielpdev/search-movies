import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loading } from '.'

export default {
  title: 'Components/Loading',
  component: Loading
} as ComponentMeta<typeof Loading>

export const Primary: ComponentStory<typeof Loading> = () => {
  return <Loading />
}

Primary.storyName = 'Primary'
