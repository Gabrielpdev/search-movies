import { FlexBox } from '@ui5/webcomponents-react'
import './styles.scss'

export function Footer() {
  return (
    <FlexBox className="footer" alignItems="Center" justifyContent="Center" direction="Column">
      <div className="description">
        <h2>Movie Search</h2>
        <p>
          Movie search is a website to you find more information about any movie that you want, you
          can favorite your movies and see more about they
        </p>
      </div>
      <p className="social">
        Crete by:{' '}
        <a href="https://github.com/Gabrielpdev" target="_blank" rel="noreferrer">
          @gabrielpdev
        </a>
      </p>
    </FlexBox>
  )
}
