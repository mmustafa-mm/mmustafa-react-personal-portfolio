// components/Button.test.jsx
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('renders a Submit button', () => {
  render(<Button label="Submit" />)
  expect(screen.getByText('Submit')).toBeInTheDocument()
})
// components/Button.jsx (refactored)
export default function Button({ label, onClick }) {
  return (
    <button className="btn-primary" onClick={onClick}>
      {label}
    </button>
  )
}