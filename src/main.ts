import "./style.css";
import { getData } from "./helpers/getData";
const h2 = document.getElementById("h2") as HTMLHeadingElement;
const h3 = document.querySelector("h3") as HTMLHeadingElement;
const diceButton = document.querySelector("#dice-button") as HTMLElement;
getData().then(({ id, advice }) => {
  h2.innerHTML = `${advice}`;
  h3.innerText = `advice # ${id}`;
});

diceButton.addEventListener("click", () => {
  getData().then(({ id, advice }) => {
    h2.innerHTML = `${advice}`;
    h3.innerText = `advice # ${id}`;
  });
});
