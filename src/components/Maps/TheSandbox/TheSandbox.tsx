import {
  Box,
  // ButtonGroup,
  // IconButton,
  Spinner,
  // VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { FiMinus, FiPlus } from 'react-icons/fi';
import {
  // Coord,
  Layer,
} from 'react-tile-map';

// import Atlas from '../Decentraland/Atlas';

export default function TheSandboxMap() {
  const [tiles, setTiles] = useState<any>({});
  // const [zoomLevel, setZoomLevel] = useState('0.2');
  const [layers, setLayers] = useState<any[]>([]);
  const [loaded, setIsLoaded] = useState(false);

  // const ZoomLevels = [
  //   '0.1',
  //   '0.2',
  //   '0.3',
  //   '0.4',
  //   '0.5',
  //   '0.6',
  //   '0.7',
  //   '0.8',
  //   '0.9',
  //   '1.0',
  // ];

  // let selected: Coord[] = [];

  // function isSelected(x: number, y: number) {
  //   return selected.some((coord) => coord.x === x && coord.y === y);
  // }

  let hover: any;

  // const handleHover = (x: number, y: number) => {
  //   hover = { x, y };
  // };

  // tile layout with districts and roads
  useEffect(() => {
    const isHighlighted = (x: number, y: number) => {
      if (!hover) return false;
      // only highlight a 10x10 area centered around hover coords
      const radius = 1;
      return (
        x > hover.x - radius &&
        x < hover.x + radius &&
        y > hover.y - radius &&
        y < hover.y + radius
      );
    };

    const heatMapLayer = (x: any, y: any) => {
      const key = x + ',' + y;
      //@ts-ignore
      if (tiles && tiles[key]) {
        return { color: '#00d3ff' };
      }
      return null;
    };

    const hoverStrokeLayer: Layer = (x, y) => {
      if (isHighlighted(x, y)) {
        return {
          color: '#44ff00',
          scale: 1.25,
        };
      }
      return null;
    };

    const hoverFillLayer: Layer = (x, y) => {
      if (isHighlighted(x, y)) {
        return {
          color: '#99ff90',
          scale: 1.2,
        };
      }
      return null;
    };

    setLayers([heatMapLayer, hoverStrokeLayer, hoverFillLayer]);

    let isCancelled = false;

    const fetchData = async () => {
      try {
        const { data } = await axios(`./the-sandbox.json`);
        console.log(data);
        if (!isCancelled) setTiles(data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (!loaded) {
      console.log('one');
      fetchData();
    }
    return () => {
      isCancelled = true;
    };
  }, [loaded, tiles, hover]);

  // async function handleClick(x: number, y: number) {
  //   const key = x + ',' + y;
  //   //@ts-ignore
  //   if (tiles && key in tiles) {
  //     // let tokenId = tiles[key].id;

  //     if (isSelected(x, y)) {
  //       selected = selected.filter((coord) => coord.x !== x || coord.y !== y);
  //     } else if (selected.length) {
  //       selected.pop();
  //       selected.push({ x, y });
  //     } else {
  //       selected.push({ x, y });
  //     }

  //     // make call to api to get data for this place
  //     //TODO: replace
  //     // const LISTING_URL =
  //     //   'asset/' + '0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a' + '/' + tokenId;
  //     // try {
  //     //   const resp = await fetchOpensea(LISTING_URL);
  //     //   const json = await resp.json();
  //     //   json.coordinates = { x: x, y: y };
  //     //   const formattedListing = formatAssetForCard(json, 'the-sandbox');
  //     //   setSelectedListing(formattedListing);
  //     //   setListingDialogIsOpen(true);
  //     // } catch (error) {
  //     //   console.error(error);
  //     // }
  //   }
  // }

  return (
    <Box h="100%" bgColor="black">
      {layers ? (
        <Box position="relative" h="100%">
          Implementing...
          {/* <Box h="100%">
            <Atlas
              tiles={tiles}
              layers={layers}
              onHover={handleHover}
              onClick={handleClick}
              zoom={parseFloat(zoomLevel)}
              x={127}
              y={108}
            />
          </Box>

          <VStack
            direction="column"
            align="flex-end"
            position="absolute"
            bottom={3}
            right={3}
          >
            <ButtonGroup isAttached size="sm" colorScheme="gray">
              <IconButton
                borderRadius="md"
                aria-label="Zoom out"
                icon={<FiMinus />}
                isDisabled={zoomLevel === '0.1'}
                onClick={() =>
                  setZoomLevel(ZoomLevels[ZoomLevels.indexOf(zoomLevel) - 1])
                }
              />
              <IconButton
                borderRadius="md"
                aria-label="Zoom in"
                icon={<FiPlus />}
                isDisabled={zoomLevel === '1.0'}
                onClick={() =>
                  setZoomLevel(ZoomLevels[ZoomLevels.indexOf(zoomLevel) + 1])
                }
              />
            </ButtonGroup>
          </VStack> */}
        </Box>
      ) : (
        <Spinner />
      )}
    </Box>
  );
}
