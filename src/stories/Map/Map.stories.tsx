import React from 'react';

import { Map } from '../../Map';

export default {
  title: 'Common/Map',
  component: Map,
};

export const Default = () => {
  return <Map world="decentraland" />;
};

export const WithControls = () => {
  return <Map world="decentraland" withControls />;
};

export const TheSandbox = () => {
  return <Map world="the-sandbox" />;
};

export const Cryptovoxels = () => {
  return <Map world="cryptovoxels" />;
};

export const SomniumSpace = () => {
  return <Map world="somnium-space" />;
};
