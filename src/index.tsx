import { LinearGradient } from 'expo-linear-gradient'
import { Box, Image, Text, useTheme, View, ITextProps } from 'native-base'
import { useEffect, useState } from 'react'

import Background from './assets/pokedex_bg.png'
import Button from './components/Button'
import Input from './components/Input'
import { api } from './servers/api'

const Gray = ({ children, ...rest }: ITextProps) => {
  return (
    <Text color='gray.500' {...rest}>{children}</Text>
  )
}

export function Pokedex() {
  const { colors } = useTheme()
  const [number, setNumber] = useState(1)
  const [name, setName] = useState('')

  useEffect(() => {
    async function getName() {
      const { data } = await api.get(`/${number}`)

      setName(data.species.name)
    }

    getName()
  }, [number])

  return (
    <Box flex={1} alignItems='center'>
      <LinearGradient
        // Background Linear Gradient
        colors={[colors.cyan[200], 'white']}
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      />
      <View
        alignItems={'center'}
        justifyContent={'center'}
        position='absolute'
        w='100%'
        h='100%'

      >
        <Image
          w='90%'
          h='90%'
          resizeMode='contain'
          source={Background}
          alt='bg'
        />
      </View>

      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${number}.png` }}

        mt={'85%'}
        w={'100%'}
        h={'10%'}
        mb={'8%'}
        resizeMode='contain'
        alt='pokemon'
      />

      <View
        alignSelf='flex-end'
        mr={'27%'}
      >
        <Text
          fontFamily='Oxanium_600SemiBold'
          fontSize='2xl'
          textAlign='right'
        >
          <Gray>{number}</Gray> - {name}</Text>
      </View>

      <View
        w={'65%'}
        mr={'9%'}
        mt='6%'
        mb='12%'
      >
        <Input />
      </View>

      <View
        w='66%'
        mr={'9%'}
        flexDirection='row'
        justifyContent='space-between'
      >
        <Button
          text='Prev'
          onPress={() => {
            if (number > 1) {
              setNumber(number - 1)
            }
          }}
        />
        <Button
          text='Next'
          onPress={() => setNumber(number + 1)}
        />
      </View>
    </Box>
  )
}