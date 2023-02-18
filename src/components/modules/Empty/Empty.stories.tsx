import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { Empty } from '.'
import { store } from '../../../store'

export default {
  title: 'Components/Empty',
  component: Empty,
  args: {
    data: {
      Error: 'error'
    }
  }
} as ComponentMeta<typeof Empty>

export const Primary: ComponentStory<typeof Empty> = (args) => {
  return (
    <Provider store={store}>
      <Empty {...args} />{' '}
    </Provider>
  )
}

Primary.storyName = 'Primary'
