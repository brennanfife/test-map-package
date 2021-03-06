import { Box, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Coord, Layer } from 'react-tile-map';

import Atlas from './Atlas';
import Controls from './Controls';

export default function DecentralandMap({
  withControls,
  forSale,
  standardizeListing,
  setSelectedListing,
}: {
  withControls?: boolean;
  forSale?: boolean;
  standardizeListing?: any;
  setSelectedListing?: any;
}) {
  const [tiles, setTiles] = useState();
  const [, setTokenIds] = useState<any>({});
  const [heatTiles] = useState<any>();
  const [zoomLevel, setZoomLevel] = useState('0.6');
  const [layers, setLayers] = useState<any[]>([]);
  const [loaded, setIsLoaded] = useState(false);
  const [hover, setHover] = useState<any>(null);
  // const [hoverId, setHoverId] = useState(0);

  // const [selectedMapView] = useSelectedMapView();
  // const [, setSelectedListing] = useSelectedListing();
  // const [hoveredListing] = useHoveredListing();
  // const [, setListingDialogIsOpen] = useListingDialog();

  const ZoomLevels = [
    '0.1',
    '0.2',
    '0.3',
    '0.4',
    '0.5',
    '0.6',
    '0.7',
    '0.8',
    '0.9',
    '1.0',
  ];

  let selected: Coord[] = [];

  function isSelected(x: number, y: number) {
    return selected.some((coord) => coord.x === x && coord.y === y);
  }

  const handleHover = (x: number, y: number) => {
    setHover({ x, y });
  };

  const forSaleLayer = (x: any, y: any) => {
    const key = x + ',' + y;

    //@ts-ignore
    if (tiles && tiles[key] && 'price' in tiles[key]) {
      return { color: '#00d3ff' };
    }
    return null;
  };

  const heatMapLayer = (x: any, y: any) => {
    const key = x + ',' + y;
    if (heatTiles && heatTiles[key]) {
      return { color: '#ffa500' };
    }
    return null;
  };

  const selectedStrokeLayer: Layer = (x, y) => {
    return isSelected(x, y) ? { color: '#ff0044', scale: 1.4 } : null;
  };

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

  const hoverStrokeLayer: Layer = (x, y) => {
    if (isHighlighted(x, y)) {
      return {
        color: '#ff1a4f',
        scale: 1.25,
      };
    }
    return null;
  };

  const hoverFillLayer: Layer = (x, y) => {
    if (isHighlighted(x, y)) {
      return {
        color: '#ff9990',
        scale: 1.2,
      };
    }
    return null;
  };

  // tile layout with districts and roads
  useEffect(() => {
    // if (
    //   hoveredListing &&
    //   hoveredListing.traits &&
    //   hoveredListing.id != hoverId
    // ) {
    //   let hoverX = 0;
    //   let hoverY = 0;

    //   hoveredListing.traits.forEach((trait: any) => {
    //     if (trait.trait_type === 'X') {
    //       hoverX = trait.value;
    //     }
    //     if (trait.trait_type === 'Y') {
    //       hoverY = trait.value;
    //     }
    //   });

    //   // won't work for coordinate 0,0 but whatever
    //   if (hoverX || hoverY) {
    //     handleHover(hoverX, hoverY);
    //   }
    //   setHoverId(hoveredListing.id);
    // }

    if (forSale) {
      setLayers([
        heatMapLayer,
        selectedStrokeLayer,
        hoverStrokeLayer,
        hoverFillLayer,
        forSaleLayer,
      ]);
    } else {
      setLayers([
        heatMapLayer,
        selectedStrokeLayer,
        hoverStrokeLayer,
        hoverFillLayer,
      ]);
    }

    let isCancelled = false;

    // TOODO: swap the URLs
    const fetchData = async () => {
      if (window) {
        try {
          const resp = await window.fetch(
            'https://api.decentraland.org/v1/tiles',
          );
          const data = await resp.json();
          if (!isCancelled) setTiles(data.data);

          const resp2 = await window.fetch(
            'https://api.decentraland.org/v2/tiles?include=tokenId',
          );
          const data2 = await resp2.json();
          setTokenIds(data2.data);
          setIsLoaded(true);
        } catch (error) {
          console.error(error);
        }
      }
    };
    if (!loaded) {
      fetchData();
    }
    return () => {
      isCancelled = true;
    };
  }, [
    forSale,
    loaded,
    hover,
    // hoveredListing
  ]);

  async function handleClick(x: number, y: number) {
    const key = x + ',' + y;

    //@ts-ignore
    if (tiles && tiles[key]) {
      // const tile = tiles[key];
      // let contractId = '';
      // let tokenId = '';
      // if (tile.estate_id) {
      //   contractId = '0x959e104e1a4db6317fa58f8295f586e1a978c297';
      //   tokenId = tile.estate_id;
      // } else {
      //   contractId = '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d';
      //   tokenId = tokenIds[key].tokenId;
      // }

      if (isSelected(x, y)) {
        selected = selected.filter((coord) => coord.x !== x || coord.y !== y);
      } else if (selected.length) {
        selected.pop();
        selected.push({ x, y });
      } else {
        selected.push({ x, y });
      }

      //make call to api to get data for this place
      // const LISTING_URL = 'asset/' + contractId + '/' + tokenId;
      try {
        //TODO: replace
        // const resp = await fetchOpensea(LISTING_URL);
        // const json = await resp.json();
        // json.coordinates = { x: x, y: y };

        const json = {};

        if (setSelectedListing && standardizeListing) {
          setSelectedListing(standardizeListing(json));
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Box h="100%" bgColor="black">
      {layers ? (
        <Box position="relative" h="100%">
          <Atlas
            tiles={tiles}
            layers={layers}
            onHover={handleHover}
            onClick={handleClick}
            zoom={parseFloat(zoomLevel)}
            isDraggable={true}
          />

          {withControls && (
            <Controls
              ZoomLevels={ZoomLevels}
              zoomLevel={zoomLevel}
              setZoomLevel={setZoomLevel}
            />
          )}
        </Box>
      ) : (
        <Spinner />
      )}
    </Box>
  );
}
