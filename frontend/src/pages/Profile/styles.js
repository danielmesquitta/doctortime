import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { colors } from '~/styles/variables'

export const Container = styled.div`
  max-width: 60rem;
  margin: 5rem auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    input {
      background: #0000001a;
      border: 0;
      border-radius: 4px;
      height: 4.4rem;
      padding: 0 1.5rem;
      color: #fafafa;
      margin: 0 0 1rem;

      ::placeholder {
        color: #fafafafa;
      }
    }

    button {
      margin: 5px 0 0;
      height: 4.4rem;
      background: #fafafa;
      font-weight: bold;
      color: #222;
      border: 0;
      border-radius: 4px;
      font-size: 1.6rem;
      transition: all 0.2s;

      :hover {
        background: #fff;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 1rem 0 2rem;
    }
  }

  > button {
    width: 100%;
    margin: 1rem 0 0;
    height: 4.4rem;
    background: ${lighten(0.05, colors.error)};
    font-weight: bold;
    color: #222;
    text-shadow: 0px 0px 3px #fafafa;
    border: 0;
    border-radius: 4px;
    font-size: 1.6rem;
    transition: all 0.2s;

    :hover {
      background: ${lighten(0.06, colors.error)};
    }
  }
`
