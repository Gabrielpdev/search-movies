import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'Components/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

export const Primary: ComponentStory<typeof Footer> = () => {
  return <Footer />
}

Primary.storyName = 'Primary'
