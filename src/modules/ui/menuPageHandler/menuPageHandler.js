export default class MenuPageHandler {
  callback;

  constructor(callback) {
    this.callback = callback;
  }

  dispose() {
    /* noop */
  }

  update() {
    this.callback({
      viewset: {
        default: () => import("ui/menucontainer"),
      },
    });
  }
}
