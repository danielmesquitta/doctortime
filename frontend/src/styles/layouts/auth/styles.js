import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 50rem;
  text-align: center;

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

    a {
      color: #fafafa;
      margin-top: 1.5rem;
      font-size: 1.6rem;
      opacity: 0.8;
      transition: all 0.2s;

      :hover {
        opacity: 1;
      }
    }
  }
`
