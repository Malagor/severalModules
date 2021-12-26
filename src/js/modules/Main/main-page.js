import { Module } from '../../classes/Module';
import { Card } from '../../classes/Card';
import { store } from '../../store/Store';

export class MainPage extends Module {
  constructor(props) {
    super(props);

  }

  addToCart(id) {
    store.addToCart(id);
    this.render();
  }

  render() {
    const dataArray = store.getData();
    this.element.innerHTML = '';
    dataArray.forEach((data) => {
      const card = new Card('div', data, this.addToCart.bind(this));
      this.element.appendChild(card.HTML());
    });
  }
}
