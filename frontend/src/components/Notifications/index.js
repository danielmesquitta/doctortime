import React, { useState, useEffect, useMemo } from 'react'
import { FaBell } from 'react-icons/fa'
import { parseISO, formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles'
import { colors } from '~/styles/variables'
import api from '~/services/api'

export default function Notifications() {
  const [visible, setVisible] = useState(false)
  const [notifications, setNotifications] = useState([])

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  )

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications')

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }))

      setNotifications(data)
    }
    loadNotifications()
  }, [])

  function handleToggleVisible() {
    setVisible(!visible)
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`)
    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    )
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <FaBell color={colors.main} size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => {
            return (
              <Notification unread={!notification.read} key={notification._id}>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button
                    type="button"
                    onClick={() => handleMarkAsRead(notification._id)}
                  >
                    Marcar como lida
                  </button>
                )}
              </Notification>
            )
          })}
        </Scroll>
      </NotificationList>
    </Container>
  )
}
