import IExportDOM from "./IExportDOM.js";

class ExportDOM extends IExportDOM {
  constructor() {
    super();
    this.header = document.createElement("header");
    this.body = document.createElement("section");
    this.footer = document.createElement("footer");
  }

  setHeader(content) {
    const h1 = document.createElement("h1");
    h1.textContent = content;
    this.header.appendChild(h1);
    return this;
  }

  setBody(content) {
    const p = document.createElement("p");
    p.textContent = content;
    this.body.appendChild(p);
    return this;
  }

  setFooter(content) {
    const p = document.createElement("p");
    p.textContent = content;
    this.footer.appendChild(p);
    return this;
  }

  getHeader() {
    return this.header;
  }

  getBody() {
    return this.body;
  }

  getFooter() {
    return this.footer;
  }

  createNavbar() {
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg bg-transparent sticky-top";
    nav.setAttribute("data-bs-theme", "dark");

    const container = document.createElement("div");
    container.className = "container";

    const brand = document.createElement("a");
    brand.className = "navbar-brand";
    brand.href = "#";
    const logo = document.createElement("img");
    logo.src = "assets/img/pokemon.png";
    logo.alt = "pokemon logo";
    logo.height = 26;
    logo.width = 71;
    brand.appendChild(logo);

    const toggler = document.createElement("button");
    toggler.className = "navbar-toggler";
    toggler.type = "button";
    toggler.setAttribute("data-bs-toggle", "collapse");
    toggler.setAttribute("data-bs-target", "#navbarColor02");
    toggler.setAttribute("aria-controls", "navbarColor02");
    toggler.setAttribute("aria-expanded", "false");
    toggler.setAttribute("aria-label", "Toggle navigation");
    const togglerIcon = document.createElement("span");
    togglerIcon.className = "navbar-toggler-icon";
    toggler.appendChild(togglerIcon);

    const collapse = document.createElement("div");
    collapse.className = "collapse navbar-collapse";
    collapse.id = "navbarColor02";

    const ul = document.createElement("ul");
    ul.className = "navbar-nav me-auto";

    const menuItems = [
      { text: "Inicio", active: true },
      { text: "Pokedex" },
      { text: "Cartas" },
      { text: "Series" },
    ];

    menuItems.forEach((item) => {
      const li = document.createElement("li");
      li.className = "nav-item";
      const a = document.createElement("a");
      a.className = `nav-link${item.active ? " active" : ""}`;
      a.href = "#";
      a.textContent = item.text;
      if (item.active) {
        const span = document.createElement("span");
        span.className = "visually-hidden";
        span.textContent = "(current)";
        a.appendChild(span);
      }
      li.appendChild(a);
      ul.appendChild(li);
    });

    const dropdownLi = document.createElement("li");
    dropdownLi.className = "nav-item dropdown";
    const dropdownToggle = document.createElement("a");
    dropdownToggle.className = "nav-link dropdown-toggle";
    dropdownToggle.href = "#";
    dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
    dropdownToggle.setAttribute("role", "button");
    dropdownToggle.setAttribute("aria-haspopup", "true");
    dropdownToggle.setAttribute("aria-expanded", "false");
    dropdownToggle.textContent = "Info";

    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = "dropdown-menu";
    const dropdownItems = [
      "Personajes",
      "Regiones",
      "Gimnasios",
      "divider",
      "Temporadas",
    ];

    dropdownItems.forEach((item) => {
      if (item === "divider") {
        const divider = document.createElement("div");
        divider.className = "dropdown-divider";
        dropdownMenu.appendChild(divider);
      } else {
        const a = document.createElement("a");
        a.className = "dropdown-item";
        a.href = "#";
        a.textContent = item;
        dropdownMenu.appendChild(a);
      }
    });

    dropdownLi.appendChild(dropdownToggle);
    dropdownLi.appendChild(dropdownMenu);
    ul.appendChild(dropdownLi);

    const form = document.createElement("form");
    form.className = "d-flex";
    const input = document.createElement("input");
    input.className = "form-control me-sm-2";
    input.type = "search";
    input.placeholder = "Buscar";
    const searchBtn = document.createElement("button");
    searchBtn.className = "btn btn-outline-secondary my-2 my-sm-0";
    searchBtn.type = "submit";
    const searchIcon = document.createElement("i");
    searchIcon.className = "fas fa-search";
    searchBtn.appendChild(searchIcon);

    form.appendChild(input);
    form.appendChild(searchBtn);
    collapse.appendChild(ul);
    collapse.appendChild(form);
    container.appendChild(brand);
    container.appendChild(toggler);
    container.appendChild(collapse);
    nav.appendChild(container);

    return nav;
  }
}

export { ExportDOM as default };
