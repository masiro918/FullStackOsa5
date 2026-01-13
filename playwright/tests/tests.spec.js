const { test, expect, beforeEach, describe } = require('@playwright/test')

describe('Blog app', () => {
  beforeEach(async ({ page, request }) => {
    await request.post('http://localhost:3003/api/testing/reset')
    await request.post('http://localhost:3003/api/users', {
      data: {
        name: 'Matti Luukkainen',
        username: 'mluukkai',
        password: 'salainen'
      }
    })

    await page.goto('http://localhost:5173')
  })

  test('Login form is shown', async ({ page }) => {
    await expect(page.getByText('Log in to application')).toBeVisible()
    await expect(page.getByText('username')).toBeVisible()
    await expect(page.getByText('password')).toBeVisible()
  })

  describe('Login', () => {
    test('succeeds with correct credentials', async ({page}) => {
      await page.getByRole('textbox').first().fill('mluukkai')
      await page.getByRole('textbox').last().fill('salainen')
      await page.getByRole('button', { name: 'login' }).click()

      await expect(page.getByText('Matti Luukkainen logged in')).toBeVisible()
    })

    test('fails with wrong credentials', async ({page}) => {
      await page.getByRole('textbox').first().fill('jaa')
      await page.getByRole('textbox').last().fill('joo')
      await page.getByRole('button', { name: 'login' }).click()

      await expect(page.getByText('wrong credentials')).toBeVisible()
    })
  })
})