import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    title: 'Button'
  }
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.title}</Button>
}

Primary.storyName = 'Primary'
