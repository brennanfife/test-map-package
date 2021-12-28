import { PureComponent } from 'react';
import { Layer, TileMapProps } from 'react-tile-map';
declare type AtlasTile = {
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
declare type AtlasProps = Omit<TileMapProps, 'layers'> & {
    layers?: Layer[];
    tiles?: Record<string, AtlasTile>;
};
declare type AtlasState = {
    tiles?: Record<string, AtlasTile>;
};
export default class Atlas extends PureComponent<AtlasProps, AtlasState> {
    static defaultProps: {
        layers: never[];
        x: number;
        y: number;
        className: string;
        initialX: number;
        initialY: number;
        size: number;
        width: number;
        height: number;
        zoom: number;
        minSize: number;
        maxSize: number;
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
        panX: number;
        panY: number;
        padding: number;
        isDraggable: boolean;
        renderMap: typeof import("react-tile-map").renderMap;
    };
    state: {
        tiles: Record<string, AtlasTile> | undefined;
    };
    mounted: boolean;
    layer: Layer;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    handleUpdateTiles: (tiles: Record<string, AtlasTile>) => void;
    render(): JSX.Element;
}
export {};
