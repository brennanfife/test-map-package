import { Box, Flex } from '@chakra-ui/react';
// import Cryptovoxels from './common/Maps/Cryptovoxels';
import Decentraland from './common/Maps/Decentraland';
// import SomniumSpace from './common/Maps/SomniumSpace';
import TheSandbox from './common/Maps/TheSandbox';
import React from 'react';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  const worlds = [
    'decentraland',
    'the-sandbox',
    'somnium-space',
    'cryptovoxels',
  ];
  const world = worlds[0];
  console.log('world:', world);

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" w="100%" h="calc(100vh - 60px)" mt="60px">
        <Flex h="100%">
          <Box w="60%" h="100%">
            {world === 'decentraland' ? (
              <Decentraland withControls={true} />
            ) : world === 'the-sandbox' ? (
              <TheSandbox />
            ) : // : world === 'somnium-space' ? (
            //   <SomniumSpace />
            // ) : world === 'cryptovoxels' ? (
            //   <Cryptovoxels />
            // )
            null}
          </Box>
          <Box w="40%" bg="red.200" />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
