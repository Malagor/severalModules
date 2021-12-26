export class Module {
  constructor(element) {
    this.element = element;
  }

  render() {
    throw new Error('No render method');
  }
}
