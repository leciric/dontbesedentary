import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colors.background};
  border-radius: 5px;
  border: none;

  color: ${props => props.theme.colors.blue};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  margin-left: 3rem;

  svg {
    position: absolute;
    left: 4rem;
  }
`
