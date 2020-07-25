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
                    : 'https://avatars2.githubusercontent.com/u/60039311?s=460&u=f8ba29994516053125b48e2ba258523a79f651e6&v=4',
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
