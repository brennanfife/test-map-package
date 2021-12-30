import React from 'react';

import { Map } from '../../../Map';

export default {
  title: 'Common/Map/Decentraland',
  component: Map,
};

export const Default = () => {
  return <Map world="decentraland" />;
};

export const WithControls = () => {
  return <Map world="decentraland" withControls />;
};

export const ForSale = () => {
  return <Map world="decentraland" forSale />;
};
