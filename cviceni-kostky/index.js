import { Dice } from "./Dice/index.js";

const diceRowElm = document.querySelector("#dice-row");
diceRowElm.append(Dice({ side: 1 }));
diceRowElm.append(Dice({ side: 2 }));
diceRowElm.append(Dice({ side: 3 }));
diceRowElm.append(Dice({ side: 4 }));
diceRowElm.append(Dice({ side: 5 }));
diceRowElm.append(Dice({ side: 6 }));
