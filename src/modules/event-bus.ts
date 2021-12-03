type EventBusListener = (...args: any[]) => any;
type EventBusEvent = string;

interface IEventBus {
  on(event: EventBusEvent, listener: EventBusListener): void;
  off(event: EventBusEvent, listener: EventBusListener): void;

  emit(event: EventBusEvent, ...args: any[]): void;
}

export default class EventBus implements IEventBus {
  private listeners: Record<EventBusEvent, EventBusListener[]>;

  constructor() {
    this.listeners = {};
  }

  on(event: EventBusEvent, listener: EventBusListener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  off(event: EventBusEvent, listener: EventBusListener) {
    this.checkEvent(event);
    this.listeners[event] = this.listeners[event].filter((item) => item !== listener);
  }

  emit(event: EventBusEvent, ...args: any[]) {
    this.checkEvent(event);
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }

  checkEvent(event: EventBusEvent) {
    if (!this.listeners[event]) {
      throw new Error(`Не найдено событие: ${event}`);
    }
  }
}
