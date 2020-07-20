import styled from 'styled-components'
import { colors } from '~/styles/variables'

export const Container = styled.div`
  height: 6.4rem;
  background: #fafafa;
  padding: 0 3rem;
`

export const Content = styled.div`
  height: 6.4rem;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      margin-left: 2rem;
      padding-left: 2rem;
      border-left: 1px solid #eee;
      font-weight: bold;
      color: ${colors.main};
      text-transform: uppercase;
    }
  }
  aside {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Profile = styled.div`
  display: flex;
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 1rem;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 1.2rem;
      color: #999;
    }
  }
  img {
    height: 3.8rem;
    width: 3.8rem;
    border-radius: 50%;
  }
`
