// import 'leaflet/dist/leaflet.css';

import { Box } from '@chakra-ui/react';
// import {
//   ImageOverlay,
//   MapContainer,
//   Polygon,
// } from '@monsonjeremy/react-leaflet';
// import { useEffect, useMemo, useState } from 'react';
import React from 'react';

export default function SomniumMap() {
  // const [allFeatures, setAllFeatures] = useState([]);

  // async function getAllFeatures() {
  //   try {
  //     const URL_ENDPOINT = '/data/somnium-space.json';
  //     const featuresRaw = await fetch(URL_ENDPOINT);
  //     const featuresJSON = await featuresRaw.json();

  //     let features: any[] = [];
  //     featuresJSON.assets.forEach((asset: any) => {
  //       features.push({ type: 'Feature', geometry: asset.geometry });
  //     });

  //     const parsedFeatures = features.map((item) => {
  //       item.geometry.geometry.coordinates[0] =
  //         item.geometry.geometry.coordinates[0].map((arr: any) => {
  //           return arr.reverse();
  //         });

  //       return item;
  //     });

  //     const featuresGeometry: any = parsedFeatures.map((obj) => obj.geometry);
  //     setAllFeatures(featuresGeometry);
  //   } catch (err) {
  //     console.log(`somniumSpace data fetch err: ${err}`);
  //   }
  // }

  // useEffect(() => {
  //   if (allFeatures.length === 0) getAllFeatures();
  // }, [allFeatures]);

  // const geoJSONOptions = {
  //   color: 'white',
  //   fillOpacity: 1,
  //   stroke: false,
  //   zIndex: 1,
  // };

  // async function onClick(id: number): Promise<any> {
  //   console.log('id:', id);
  // }

  // const onMouseEvent = (event: any, type: any) => {
  //   switch (type) {
  //     case 'over':
  //       event.target.setStyle({ color: 'purple' });
  //       break;
  //     case 'out':
  //       event.target.setStyle({ color: 'white' });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const cachedOverlay = useMemo(() => {
  //   return allFeatures.map((obj: any, i) => (
  //     <Polygon
  //       key={i}
  //       pathOptions={geoJSONOptions}
  //       positions={obj.geometry.coordinates[0]}
  //       eventHandlers={{
  //         click: () => {
  //           onClick(obj.id);
  //         },
  //         mouseover: (event: any) => onMouseEvent(event, 'over'),
  //         mouseout: (event: any) => onMouseEvent(event, 'out'),
  //       }}
  //     />
  //   ));
  // }, [allFeatures]);

  // const imageBounds = [
  //   [-1, -1],
  //   [1, 1],
  // ];

  return (
    <Box h="100%" w="100%">
      Somnium Space
      {/* <MapContainer
        center={[0, 0]}
        zoom={11}
        style={{ backgroundColor: '#05484d' }}
        //@ts-ignore
        maxBounds={imageBounds}
        scrollWheelZoom={false}
        maxBoundsViscosity={1.0}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
        attributionControl={false}
      >
        <Box h="50rem" />

        <ImageOverlay
          //@ts-ignore
          bounds={imageBounds}
          url="https://map.somniumspace.com/images/Waterfront_Extended_Parcels_Map_allgreen.jpg"
        >
          {cachedOverlay}
        </ImageOverlay>
      </MapContainer> */}
    </Box>
  );
}
