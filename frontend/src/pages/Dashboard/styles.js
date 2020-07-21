import styled from 'styled-components'
import { colors } from '~/styles/variables'

export const Container = styled.div`
  max-width: 60rem;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: 0;
    }

    strong {
      color: #fafafa;
      font-size: 2.4rem;
      margin: 0 1.5rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
  }
`

export const Time = styled.li`
  padding: 2rem;
  border-radius: 0.4rem;
  background: #fafafa;
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : colors.main)};
    font-size: 2rem;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`
