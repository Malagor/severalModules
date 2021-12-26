import { MainPage } from "../modules/Main/main-page";

export class App {
  contentElement = document.querySelector('#main');

  constructor() {
    this.mainPage = new MainPage(this.contentElement);
    this.mainPage.render();
  }

  static start() {
    return new App()
  }
}

