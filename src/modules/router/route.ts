import Block from '../block';
import {displayPage} from '../../utils/display-page';
import isEqual from '../../utils/helpers/isEqual';
import {BlockType, RouteProps} from './router.model';

export default class Route {
  private readonly _pageBlock: BlockType;
  private _pathname: string;
  private _block: Block | null = null;
  private _props: RouteProps;

  constructor(pathname: string, page: BlockType, props: RouteProps) {
    this._pathname = pathname;
    this._pageBlock = page;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(this._pathname, '*') || isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._pageBlock();
      displayPage(this._props.rootQuery, this._block);
      return;
    }
    this._block.show();
  }
}
