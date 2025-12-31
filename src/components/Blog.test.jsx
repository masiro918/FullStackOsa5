import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

test('renders blog title', () => {
  const blog = {
    id: 99,
    author: 'ei kukaan',
    title: 'ostsikko',
    likes: 77,
    user: {
      name: 'Tuntematon Tyyppi'
    }
  }

  render(<Blog blog={blog} />)

  const element = screen.getByText('ostsikko', { exact: false })
  expect(element).toBeDefined()
})

test('renders url, likes and username', async () => {
  const blog = {
    id: 99,
    author: 'ei kukaan',
    title: 'ostsikko',
    likes: 99,
    url: '127.0.0.1',
    user: {
      name: 'Testi Tapaus'
    }
  }

  render(<Blog blog={blog} likeUpdater={null}/>)

  const user = userEvent.setup()
  const button = screen.getByText('view', { exact: false })
  await user.click(button)

  const elementLikes = screen.getByText('likes 99', { exact: false })
  expect(elementLikes).toBeDefined()

  const elementUrl = screen.getByText('127.0.0.1', { exact: false })
  expect(elementUrl).toBeDefined()

  const elementUser = screen.getByText('Testi Tapaus', { exact: false })
  expect(elementUser).toBeDefined()
})