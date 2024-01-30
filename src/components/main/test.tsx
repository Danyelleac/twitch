import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    //renderizar o componente (render)
    render(<Main />)
    //buscar o elemento (screen) - e verificar se ele existe (getByRole)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
  it('should render snapshot', () => {
    //renderizar o componente (render)
    const { container } = render(<Main />)
    //gerar um arquivo de snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
