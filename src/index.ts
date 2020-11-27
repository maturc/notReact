import App from "./App";
import { notReact } from "./notReact";

const render = () => {
  const root = document.getElementById('root');
  notReact.init(root, App);
}

window.addEventListener("DOMContentLoaded", () => render());