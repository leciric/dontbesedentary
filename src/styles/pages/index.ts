import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.blue};
  height: 100vh;

  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 100px;

    position: absolute;
    left: 2rem;
    top: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  strong {
    font-size: 36px;
  }

  p,
  span {
    color: ${props => props.theme.colors.textHighLight};
  }

  p {
    font-size: 1.5rem;
  }

  span {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  button {
    margin-top: 1rem;
  }
`
