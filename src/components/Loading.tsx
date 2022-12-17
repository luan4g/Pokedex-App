import React from 'react';
import { Center, Spinner, Text, useTheme } from 'native-base';

export const Loading = () => {
  const { colors } = useTheme()

  return (
    <Center flex={1} bgColor={'gray.900'}>
      <Spinner color={colors.gray[600]} />
      <Text color='gray.600' mt={2}>Loading...</Text>
    </Center>
  );
}
