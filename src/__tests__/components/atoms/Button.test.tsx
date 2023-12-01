import { Button } from '@/components/ui/Button'
import { render, screen } from '@testing-library/react'

describe('<Button />', () => {
  render(<Button>Olá</Button>)

  it('should render button', () => {
    expect(screen.getByText('Olá'))
  })
})
