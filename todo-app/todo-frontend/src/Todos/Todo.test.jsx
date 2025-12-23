import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Todo from './Todo'

describe('<Todo />', () => {
  test('renders todo text', () => {
    const todo = {
      text: 'Write code',
      done: false
    }

    render(<Todo text={todo.text} done={todo.done} />)

    const element = screen.getByText('Write code')
    expect(element).toBeDefined()
  })
})