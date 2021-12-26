export class Component {
  constructor(selector = 'div') {
    this.el = document.createElement(selector);
  }

  HTML() {
    throw new Error('No HTM<L method in component');
  }
}
