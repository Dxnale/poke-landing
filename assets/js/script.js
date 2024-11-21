import ExportDOM from "./ExportDOM.js";

const exportDOM = new ExportDOM();

const nav = exportDOM.createNavbar();
console.log(nav);

document.body.appendChild(nav);
