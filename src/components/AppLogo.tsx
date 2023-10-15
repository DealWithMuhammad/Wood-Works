import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const AppLogo = () => {
  return (
    <Link href="/">
      <Text color="gray.800" fontWeight="bold">
        SW{' '}
        <Text as="span" color={"#febe60"}>
          Works
        </Text>
      </Text>
    </Link>
  );
};
