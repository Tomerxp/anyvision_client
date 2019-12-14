import React from 'react'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import SearchPage from './SearchPage'
import axios from '../../shared/axios-instance'

describe('<SearchPage />', () => {
  it('INTEGRATION: should show results when searching for something', async () => {
    // Arrange
    const axiosSpy = jest.spyOn(axios, 'get')
    const { container, getByPlaceholderText } = render(<SearchPage />)

    const searchResults = container.querySelector('.search-results')
    expect(searchResults).toBeEmpty()

    const searchInput = getByPlaceholderText(/search/i)
    const value = 'test'

    // Act
    fireEvent.change(searchInput, { target: { value } })
    await waitForDomChange()

    // Assert
    expect(axiosSpy.mock.calls[0][0]).toMatch(`/search?term=${value}`)
    expect(searchResults).not.toBeEmpty()
  })
})
