import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import Cryptovoxels from './components/Maps/Cryptovoxels';
import Decentraland from './components/Maps/Decentraland';
// import SomniumSpace from './components/Maps/SomniumSpace';
import TheSandbox from './components/Maps/TheSandbox';
import theme from './theme';

const worlds = ['decentraland', 'the-sandbox', 'somnium-space', 'cryptovoxels'];

interface IMap {
  world: string;
  setSelectedListing?: any;
  standardizeListing?: () => any;
  forSale?: boolean;
  withControls?: boolean;
}

export function Map({
  world = worlds[0],
  setSelectedListing,
  standardizeListing,
  forSale = false,
  withControls = false,
}: IMap) {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100%" w="100%">
        {world === 'decentraland' ? (
          <Decentraland
            withControls={withControls}
            forSale={forSale}
            standardizeListing={standardizeListing}
            setSelectedListing={setSelectedListing}
          />
        ) : world === 'the_sandbox' ? (
          <TheSandbox />
        ) : // : world === 'somnium_space' ? (
        //   <SomniumSpace
        //     standardizeListing={standardizeListing}
        //     setSelectedListing={setSelectedListing}
        //   />
        // ) :
        world === 'cryptovoxels' ? (
          <Cryptovoxels
            standardizeListing={standardizeListing}
            setSelectedListing={setSelectedListing}
          />
        ) : null}
      </Box>
    </ChakraProvider>
  );
}
