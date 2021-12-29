import { Box } from '@chakra-ui/react';
import Cryptovoxels from './common/Maps/Cryptovoxels';
import { DecentralandMap } from './common/Maps/Decentraland/Decentraland';
import SomniumSpace from './common/Maps/SomniumSpace';
import TheSandbox from './common/Maps/TheSandbox';
import React from 'react';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';

const worlds = ['decentraland', 'the-sandbox', 'somnium-space', 'cryptovoxels'];

export function Map({
  world = worlds[0],
  withControls = false,
}: {
  world: string;
  withControls: boolean;
}) {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100%" w="100%">
        {world === 'decentraland' ? (
          <DecentralandMap withControls={withControls} />
        ) : world === 'the-sandbox' ? (
          <TheSandbox />
        ) : world === 'somnium-space' ? (
          <SomniumSpace />
        ) : world === 'cryptovoxels' ? (
          <Cryptovoxels />
        ) : null}
      </Box>
    </ChakraProvider>
  );
}
