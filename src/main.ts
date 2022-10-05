import { Calculator } from "./Calculator";

import "./style.css";

const App = document.querySelector<HTMLDivElement>("#app");

App?.appendChild(Calculator());
