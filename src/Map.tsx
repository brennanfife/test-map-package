import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import Cryptovoxels from './components/Maps/Cryptovoxels';
import Decentraland from './components/Maps/Decentraland';
// import SomniumSpace from './components/Maps/SomniumSpace';
import TheSandbox from './components/Maps/TheSandbox';
import theme from './theme';

const worlds = ['decentraland', 'the-sandbox', 'somnium-space', 'cryptovoxels'];

export function Map({
  world = worlds[0],
  withControls = false,
}: {
  world: string;
  withControls?: boolean;
}) {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100%" w="100%">
        {world === 'decentraland' ? (
          <Decentraland withControls={withControls} />
        ) : world === 'the-sandbox' ? (
          <TheSandbox />
        ) : // : world === 'somnium-space' ? (
        //   <SomniumSpace />
        // ) :
        world === 'cryptovoxels' ? (
          <Cryptovoxels />
        ) : null}
      </Box>
    </ChakraProvider>
  );
}
