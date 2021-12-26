import { Component } from "./Component";

export class Card extends Component {
  data = null;

  constructor(selector, data, onAddToCart) {
    super(selector);

    this.data = data;
    this.onAddToCard = onAddToCart;
  }

  setData(data) {
    this.data = data;
    this.HTML();

    return this.el;
  }

  HTML() {
    const { id, name, price, count } = this.data;

    this.el.innerHTML = `<div class="card" data-id="${id}">
      <div class="card-body">
      <h5 class="card-title">${name}</h5>
    <p class="card-text">Price: ${price}</p>
    <p class="card-text">Count: ${count}</p>
    <a href="#" class="btn btn-primary" data-role="addToCart">В корзину</a>
    </div>`;

    this.events();

    return this.el;
  }

  events() {
    const btn = this.el.querySelector('[data-role="addToCart"]');
    btn.addEventListener('click', () => this.onAddToCard(this.data.id));
  }
}
