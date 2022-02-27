import store, {IState, StoreEvents} from './store';
import {BlockType} from './router/router.model';

export default function connect(Component: any, mapStateToProps: (state: IState) => unknown) {
  return class extends Component {
    constructor() {
      super(mapStateToProps(store.getState()));

      store.on(StoreEvents.UPDATED, () => {
        this.setProps(mapStateToProps(store.getState()));
      });
    }
  } as BlockType;
}
