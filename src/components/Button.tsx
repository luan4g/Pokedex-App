import React from 'react';
import { Box, Text, Button as NativeBaseButton, IButtonProps } from 'native-base'

interface buttonProps extends IButtonProps {
  text: string
}

const Button = ({ text, ...rest }: buttonProps) => {
  return (
    <Box
      w='45%'
    >
      <NativeBaseButton
        zIndex={1}
        bgColor='#444'
        p={'8%'}
        borderWidth={2}
        borderColor='black'
        {...rest}
      >
        <Text
          color='white'
          fontSize='lg'
        >
          {text}
        </Text>
      </NativeBaseButton>
      <NativeBaseButton
        bgColor='#222'
        position='absolute'
        w={'100%'}
        h={'100%'}
        top={.5}
        right={.5}
        zIndex={0}
      >
      </NativeBaseButton>
    </Box>
  );
}

export default Button;