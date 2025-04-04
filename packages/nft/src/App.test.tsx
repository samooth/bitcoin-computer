import { screen, render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    const linkElement = screen.getByText(/All NFTs/i)
    expect(linkElement).toBeInTheDocument()
  })
})
