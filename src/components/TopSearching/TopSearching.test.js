import React from 'react'
import { render } from '@testing-library/react'
import TopSearching from './TopSearching'
import useApi from '../../shared/useApi'

jest.mock('../../shared/useApi')

describe('<TopSearching />', () => {
  it('should render given searchTerm and count correctly', () => {
    const termCount = {
      testItem1: 99,
      testItem2: 44,
      testItem3: 2,
      testItem4: 1,
    }
    const state = Object.keys(termCount).map(searchTerm => ({
      searchTerm,
      count: termCount[searchTerm],
    }))

    useApi.mockImplementation(() => ({
      state,
      isLoading: false,
    }))

    const { getByText, getByLabelText } = render(<TopSearching />)

    Object.keys(termCount).forEach(searchTerm => {
      expect(getByText(searchTerm)).toBeInTheDocument()
      expect(getByLabelText(searchTerm)).toHaveTextContent(
        termCount[searchTerm],
      )
    })
  })
})
