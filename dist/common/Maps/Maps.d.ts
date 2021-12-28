/// <reference types="react" />
declare type SelectedWorldType = {
    world: 'decentraland' | 'the-sandbox' | 'cryptovoxels' | 'somnium-space';
    withControls?: boolean;
};
export default function Maps({ world, withControls }: SelectedWorldType): JSX.Element;
export {};
