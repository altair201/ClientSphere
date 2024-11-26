import React from 'react'
import { View, Text } from 'react-native'
import Constants from 'expo-constants'
import styled from 'styled-components'

const Main = () => {
  return (
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
            <TextStyle>Main</TextStyle>
        </Container>
  )
}
const Container = styled(View)`
background-color: ${({ theme }) => theme.colors.primary};
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
`
const TextStyle = styled(Text)`
  color: ${({ theme }) => theme.colors.base};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export default Main
