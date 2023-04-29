export default class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((el) => el !== fn);
  }

  notify(details) {
    this.subscribers.forEach((fn) => fn(details));
  }
}
