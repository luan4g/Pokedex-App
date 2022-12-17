import React from 'react';
import { Box, Input as NativeBaseInput } from 'native-base'

const Input = () => {
  return (
    <Box
    >
      <NativeBaseInput
        borderWidth={2}
        p='6%'
        borderColor='#333'
        bgColor='white'
        rounded={6}
        zIndex={2}
        fontSize='md'
        fontFamily='Oxanium_600SemiBold'
        placeholder='Name or Number'
      />
      <Box
        zIndex={1}
        rounded={6}
        w='100%'
        h='100%'
        top={1}
        right={1}
        position='absolute'
        bgColor='#888'
        borderWidth={1.8}
        borderColor='#333'
      />
    </Box>
  );
}

export default Input;