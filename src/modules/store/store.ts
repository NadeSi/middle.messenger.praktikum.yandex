import set from '../../utils/helpers/set';
import EventBus from '../event-bus';
import {IState, StoreEvents} from './store.model';

class Store extends EventBus {
  private state: IState = {
    isAuthLoading: true,
  };

  public getState() {
    return this.state;
  }

  public set(path: keyof IState, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.UPDATED);
  }
}

export default new Store();
