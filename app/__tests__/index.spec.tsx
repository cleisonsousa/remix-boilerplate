import Main from '../routes'
import { render, screen } from '@testing-library/react'

describe('<Main />', () => {
  test('should render Main Component correctly', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Welcome to Remix/ })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Remix Docs/ })).toHaveAttribute(
      'href',
      'https://remix.run/docs'
    )
  })
})
