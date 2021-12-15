import Block from '../block';

export type BlockType = new () => Block;
export type RouteProps = {
  rootQuery: string;
};
