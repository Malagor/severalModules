class Store {
  data = [
    {
      id: 1,
      name: 'Audi',
      count: 5,
      price: 11000,
    },
    {
      id: 2,
      name: 'Mersedes',
      count: 5,
      price: 12000,
    },
    {
      id: 3,
      name: 'BMW',
      count: 5,
      price: 13000,
    },
    {
      id: 4,
      name: 'Opel',
      count: 5,
      price: 7000,
    },
    {
      id: 5,
      name: 'Ford',
      count: 5,
      price: 9000,
    },

  ];

  inCart = {};

  getData() {
    return this.data;
  }

  addToCart(id) {
    console.log('addToCart');

    const index = this.data.findIndex((car) => car.id === id);

    if (this.data[index].count > 0) {
      if (this.inCart[id]) {
        this.inCart[id] += 1;
      } else {
        this.inCart[id] = 1;
      }

      this.data[index].count -= 1;

      console.log('В корзине:', this.inCart);
      console.log('В сторе:', this.data[index]);

      return true;
    }
    console.log('В корзине:', this.inCart);
    console.log('В сторе:', this.data[index]);

    return false;
  }

}

export const store = new Store();
