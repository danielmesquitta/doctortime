import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { colors } from '~/styles/variables'

export const Container = styled.div`
  position: relative;
`

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      ::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 0.8rem;
        height: 0.8rem;
        background: ${colors.warning};
        content: '';
        border-radius: 50%;
      }
    `}
`

export const NotificationList = styled.div`
  position: absolute;
  width: 26rem;
  left: 50%;
  top: calc(100% + 3rem);
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 2rem 0.5rem 2rem 0;
  display: ${props => (props.visible ? 'block' : 'none')};

  ::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
    width: 0;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-bottom: 2rem solid rgba(0, 0, 0, 0.6);
  }
`

export const Scroll = styled.div`
  max-height: 30rem;
  overflow-y: scroll;
  padding: 0rem 1.5rem 0rem 2rem;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar {
    width: 1rem;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    -webkit-box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`

export const Notification = styled.div`
  color: #fff;

  + div {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  time {
    display: block;
    opacity: 0.6;
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  button {
    font-size: 1.2rem;
    border: 0;
    background: none;
    color: ${lighten(0.2, colors.mainLight)};
  }

  ${props =>
    props.unread &&
    css`
      ::after {
        content: '';
        display: inline-block;
        margin-left: 1rem;
        width: 0.6rem;
        height: 0.6rem;
        background: ${colors.warning};
        border-radius: 50%;
      }
    `}
`
