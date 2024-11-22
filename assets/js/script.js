import ExportDOM from "./ExportDOM.js";

const exportDOM = new ExportDOM();

const nav = exportDOM.createNavbar();
const hero = exportDOM.createHero();
const about = exportDOM.createAboutSection();
const initial = exportDOM.createInitialPokemonSection();
const footer = exportDOM.createFooter();

document.body.appendChild(nav);
document.body.appendChild(hero);
document.body.appendChild(about);
document.body.appendChild(initial);
document.body.appendChild(footer);
