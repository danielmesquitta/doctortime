import React, { useState, useEffect } from 'react'

import { Container, ProvidersList, Provider, Avatar, Name } from './styles'
import Background from '~/styles/Background'
import api from '~/services/api'

const SelectProvider = ({ navigation }) => {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await api.get('providers')
      setProviders(response.data)
    })()
  }, [])

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() =>
                navigation.navigate('SelectDateTime', { provider })
              }
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN7BAE9x9Eehg7-JnS_Kdn_QTT5Dl0Hac81w&usqp=CAU',
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  )
}

export default SelectProvider
