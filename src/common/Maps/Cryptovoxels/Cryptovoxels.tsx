import 'leaflet/dist/leaflet.css';

import { Box } from '@chakra-ui/react';
import { MapContainer, Polygon, TileLayer } from '@monsonjeremy/react-leaflet';
import { useEffect, useMemo, useState } from 'react';
import React from 'react';

export default function CryptoVoxels() {
  const [allFeatures, setAllFeatures] = useState<any[]>([]);
  const [hoverId] = useState(0);
  const [, setUpdateHover] = useState(true);

  async function getAllFeatures() {
    const URL_ENDPOINT = 'https://www.cryptovoxels.com/api/parcels.json';
    let featuresJSON = { parcels: [] };
    try {
      const featuresRaw = await fetch(URL_ENDPOINT);
      featuresJSON = await featuresRaw.json();
    } catch {
      const resp = await window.fetch('../../cryptovoxels_parcels.json');
      featuresJSON = await resp.json();
    }

    let features: any[] = [];
    featuresJSON.parcels.forEach((parcel: any) => {
      const value = {
        type: 'Feature',
        geometry: parcel.geometry,
        parcels: { parcel: parcel },
      };
      features.push(value);
    });

    const parsedFeatures = features.map((item) => {
      item.geometry.coordinates[0] = item.geometry.coordinates[0].map(
        (arr: any) => Array.from(arr).reverse(),
      );
      return item;
    });
    setAllFeatures(() => parsedFeatures);
  }

  // TODO: consider moving this above the component level to reduce endpoint calls
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      // if (
      //   hoveredListing &&
      //   hoveredListing.token_id &&
      //   hoveredListing.token_id != hoverId
      // ) {
      // setHoverId(hoveredListing.token_id);
      setUpdateHover(true);
      // }

      if (allFeatures.length === 0) getAllFeatures();
    }
    //hoveredListing
    return () => {
      mounted = false;
    };
  }, [allFeatures]);

  const polygonOptions = {
    fillOpacity: 0,
    stroke: false,
    color: 'purple',
  };

  const highlightOptions = {
    fillOpacity: 0.5,
    stroke: false,
    color: 'purple',
  };

  async function onClick(id: number): Promise<any> {
    console.log('id:', id);
    // const URL_ENDPOINT = `asset/0x79986af15539de2db9a5086382daeda917a9cf0c/${id}`;
    // try {
    //   const assetRaw = await fetchOpensea(URL_ENDPOINT);
    //   const asset = await assetRaw.json();

    //   const formattedListing = formatAssetForCard(asset, selectedWorld);

    //   setSelectedListing(formattedListing);
    //   setListingDialogIsOpen(true);
    // } catch (err) {
    //   console.log(`onClick endpoint err: ${err}`);
    // }
  }

  const onMouseEvent = (event: any, type: any, feature: any) => {
    console.log(feature);
    switch (type) {
      case 'over':
        event.target.setStyle({ fillOpacity: 0.5 });
        break;
      case 'out':
        event.target.setStyle({ fillOpacity: 0.0 });
        break;
      default:
        break;
    }
  };

  const cachedOverlay = useMemo(() => {
    setUpdateHover(false);
    return allFeatures.map((feature: any, i) => (
      <Polygon
        key={i}
        pathOptions={
          feature.parcels.parcel.id === hoverId
            ? highlightOptions
            : polygonOptions
        }
        positions={feature.geometry.coordinates[0]}
        eventHandlers={{
          click: () => {
            onClick(feature.parcels.parcel.id);
          },
          mouseover: (event: any) => onMouseEvent(event, 'over', feature),
          mouseout: (event: any) => onMouseEvent(event, 'out', feature),
        }}
      />
    ));
    //updateHover, hoverId
  }, [allFeatures]);

  return (
    <Box h="100%" w="100%">
      <MapContainer center={[0, 0]} zoom={7}>
        <Box h="50rem" />
        <TileLayer url="https://map.cryptovoxels.com/tile?z={z}&x={x}&y={y}" />
        {cachedOverlay}
      </MapContainer>
    </Box>
  );
}
