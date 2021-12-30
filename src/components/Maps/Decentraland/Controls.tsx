import { ButtonGroup, IconButton, VStack } from '@chakra-ui/react';
import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

export default function Controls({
  ZoomLevels,
  zoomLevel,
  setZoomLevel,
}: {
  ZoomLevels: any;
  zoomLevel: any;
  setZoomLevel: any;
}) {
  return (
    <VStack
      direction="column"
      align="flex-end"
      position="absolute"
      marginBottom="1rem"
      bottom={3}
      right={3}
      zIndex="10"
    >
      <ButtonGroup isAttached size="sm">
        <IconButton
          color="black"
          bgColor="gray.50"
          borderRadius="md"
          aria-label="Zoom out"
          icon={<FiMinus />}
          isDisabled={zoomLevel === '0.1'}
          onClick={() =>
            setZoomLevel(ZoomLevels[ZoomLevels.indexOf(zoomLevel) - 1])
          }
        />
        <IconButton
          color="black"
          bgColor="gray.50"
          borderRadius="md"
          aria-label="Zoom in"
          icon={<FiPlus />}
          isDisabled={zoomLevel === '1.0'}
          onClick={() =>
            setZoomLevel(ZoomLevels[ZoomLevels.indexOf(zoomLevel) + 1])
          }
        />
      </ButtonGroup>
    </VStack>
  );
}
