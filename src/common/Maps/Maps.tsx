import { Box } from '@chakra-ui/react';
import TheSandbox from './TheSandbox';
// import Cryptovoxels from './Cryptovoxels';
import Decentraland from './Decentraland';
// import SomniumSpace from './SomniumSpace';
import React from 'react';

type SelectedWorldType = {
  world: 'decentraland' | 'the-sandbox' | 'cryptovoxels' | 'somnium-space';
  withControls?: boolean;
};

export default function Maps({ world, withControls }: SelectedWorldType) {
  return (
    <Box h="100vh">
      {world === 'decentraland' ? (
        <Decentraland withControls={withControls} />
      ) : world === 'the-sandbox' ? (
        <TheSandbox />
      ) : // : world === 'somnium-space' ? (
      //   <SomniumSpace />
      // ) : world === 'cryptovoxels' ? (
      //   <Cryptovoxels />
      // )
      null}
    </Box>
  );
}
