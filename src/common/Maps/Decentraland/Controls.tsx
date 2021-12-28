import {
  ButtonGroup,
  Checkbox,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import React from 'react';

export default function Controls({
  ZoomLevels,
  zoomLevel,
  setZoomLevel,
  toggleForSaleLayer,
}: {
  ZoomLevels: any;
  zoomLevel: any;
  setZoomLevel: any;
  toggleForSaleLayer: any;
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
      <HStack bgColor="gray.50" p="0.5rem" borderRadius="0.5rem">
        <Text color="black" id="for-sale">
          For sale?
        </Text>
        <Checkbox
          size="sm"
          id="for-sale"
          colorScheme="purple"
          defaultChecked
          onChange={toggleForSaleLayer}
          aria-labelledby="for-sale"
        />
      </HStack>
    </VStack>
  );
}
