import Block from '../block/block';

export type BlockType = new () => Block;
export type RouteProps = {
  rootQuery: string;
};
