import React from 'react'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import { renderWithRouter } from '../../TestUtils/renderWithRouter'
import TopBar from './TopBar'

import routes from '../routes'

describe('<TopBar />', () => {
  it('should have all route titles rendered in TopBar', () => {
    const { getByText } = render(<TopBar />)

    routes.map(route => expect(getByText(route.title)).toBeInTheDocument())
  })

  it('should have first route as active route', () => {
    const { getByText } = render(<TopBar />)

    const firstRoute = getByText(routes[0].title)

    expect(firstRoute).toHaveAttribute('class', 'nav-link active')
  })

  it('should change active route when clicking on second route', async () => {
    const { getByText } = renderWithRouter(<TopBar />)
    const firstRoute = getByText(routes[0].title)
    const secondRoute = getByText(routes[1].title)

    fireEvent.click(secondRoute)

    await waitForDomChange()

    expect(firstRoute).toHaveAttribute('class', 'nav-link')
    expect(secondRoute).toHaveAttribute('class', 'nav-link active')
  })
})
