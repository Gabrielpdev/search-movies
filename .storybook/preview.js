import '../src/styles/global.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => {
    return (
      <div
        className="storybook"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          height: '97vh',
          width: '100%'
        }}
      >
        <Story />
      </div>
    )
  }
]
