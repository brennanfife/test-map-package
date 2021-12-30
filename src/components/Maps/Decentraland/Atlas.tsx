import { Box } from '@chakra-ui/react';
import React, { PureComponent } from 'react';
import { Layer, TileMap, TileMapProps } from 'react-tile-map';

type AtlasTile = {
  x: number;
  y: number;
  type: number;
  left?: number;
  top?: number;
  topLeft?: number;
  owner: string;
  name?: string;
  estate_id?: string;
};

type AtlasProps = Omit<TileMapProps, 'layers'> & {
  layers?: Layer[];
  tiles?: Record<string, AtlasTile>;
};

type AtlasState = {
  tiles?: Record<string, AtlasTile>;
};

const COLOR_BY_TYPE = Object.freeze({
  0: '#ff9990', // my parcels
  1: '#ff4053', // my parcels on sale
  2: '#ff9990', // my estates
  3: '#ff4053', // my estates on sale
  4: '#ffbd33', // parcels/estates where I have permissions
  5: '#5054D4', // districts
  6: '#563db8', // contributions
  7: '#716C7A', // roads
  8: '#70AC76', // plazas
  9: '#3D3A46', // owned parcel/estate
  10: '#3D3A46', // parcels on sale (we show them as owned parcels)
  11: '#09080A', // unowned pacel/estate
  12: '#18141a', // background
  13: '#110e13', // loading odd
  14: '#0d0b0e', // loading even
});

export default class Atlas extends PureComponent<AtlasProps, AtlasState> {
  static defaultProps = {
    ...TileMap.defaultProps,
    layers: [],
  };

  state = {
    tiles: this.props.tiles,
  };

  mounted: boolean = true;

  layer: Layer = (x, y) => {
    const { tiles } = this.state;
    const id = x + ',' + y;
    if (tiles && id in tiles) {
      const tile = tiles[id];
      return {
        //@ts-ignore
        color: COLOR_BY_TYPE[tile.type],
        top: !!tile.top,
        left: !!tile.left,
        topLeft: !!tile.topLeft,
      };
    } else {
      return {
        color: (x + y) % 2 === 0 ? COLOR_BY_TYPE[13] : COLOR_BY_TYPE[14],
      };
    }
  };

  componentDidMount() {
    if (!this.state.tiles) {
      // Atlas.fetchTiles().then(this.handleUpdateTiles);
    }
    this.mounted = true;
  }

  componentDidUpdate() {
    if (this.props.tiles && this.props.tiles !== this.state.tiles) {
      this.setState({ tiles: this.props.tiles });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleUpdateTiles = (tiles: Record<string, AtlasTile>) => {
    if (this.mounted) {
      this.setState({ tiles });
    }
  };

  render() {
    const { layers, className, ...rest } = this.props;

    return (
      <>
        <TileMap
          {...rest}
          className={className.trim()}
          //@ts-ignore
          layers={[this.layer, ...layers]}
        />
        <Box bgColor="black" minH="20rem" />
      </>
    );
  }
}

// export default function Atlas(props: any) {
//   const [tiles] = useState<Record<string, AtlasTile>>(props.tiles);
//   const [layers] = useState([]);

//   const layer: Layer = (x, y) => {
//     const id = x + ',' + y;

//     if (tiles && id in tiles) {
//       const tile = tiles[id];
//       return {
//         //@ts-ignore
//         color: COLOR_BY_TYPE[tile.type],
//         top: !!tile.top,
//         left: !!tile.left,
//         topLeft: !!tile.topLeft,
//       };
//     } else {
//       return {
//         color: (x + y) % 2 === 0 ? COLOR_BY_TYPE[13] : COLOR_BY_TYPE[14],
//       };
//     }
//   };

//   useEffect(() => {
//     let mounted = true;
//     if (mounted) {
//       //   if (!tiles) Atlas.fetchTiles().then(setTiles(tiles));

//       mounted = true;
//     }

//     return () => {
//       mounted = false;
//     };
//   }, [tiles]);

//   return (
//     <>
//       <TileMap
//         // {...props.rest}
//         // className={props.className.trim()}
//         //@ts-ignore
//         layers={[layer, ...layers!]}
//       />
//       <Box bgColor="red.500" h="10rem" />
//     </>
//   );
// }
