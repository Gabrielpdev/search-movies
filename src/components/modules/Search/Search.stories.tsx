import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { Search } from '.'
import { store } from '../../../store'

export default {
  title: 'Components/Search',
  component: Search,
  args: {
    isFetching: false
  }
} as ComponentMeta<typeof Search>

export const Primary: ComponentStory<typeof Search> = (args) => {
  return (
    <Provider store={store}>
      <Search {...args} />
    </Provider>
  )
}

Primary.storyName = 'Primary'
