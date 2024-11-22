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
    nav.className = "navbar navbar-expand-lg bg-transparent fixed-top";
    nav.setAttribute("data-bs-theme", "dark");

    const container = document.createElement("div");
    container.className = "container";

    const brand = document.createElement("a");
    brand.className = "navbar-brand";
    brand.href = "#";

    const img = document.createElement("img");
    img.src = "assets/img/pokemon.png";
    img.alt = "pokemon logo";
    img.height = 26;
    img.width = 71;
    brand.appendChild(img);

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
      { text: "Inicio", href: "https://google.cl", active: true },
      { text: "Pokedex", href: "https://google.cl" },
      { text: "Cartas", href: "https://google.cl" },
      { text: "Series", href: "https://google.cl" },
    ];

    menuItems.forEach((item) => {
      const li = document.createElement("li");
      li.className = "nav-item";
      const a = document.createElement("a");
      a.className = `nav-link${item.active ? " active" : ""}`;
      a.href = item.href;
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
  createHero() {
    const containerDiv = document.createElement("div");
    containerDiv.className = "container";

    const header = document.createElement("header");
    header.className = "hero text-light text-right pt-xl-5";
    header.id = "home";

    const innerContainer = document.createElement("div");
    innerContainer.className = "container";

    const h1 = document.createElement("h1");
    h1.className = "display-1 font-weight-bold my-auto";
    h1.id = "site-title";
    h1.textContent = "Title";

    const p = document.createElement("p");
    p.className = "my-3";
    p.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.";

    innerContainer.append(h1, p);
    header.appendChild(innerContainer);
    containerDiv.appendChild(header);
  }
  createAboutSection() {
    const section = document.createElement("section");
    section.className = "container text-center my-5";
    section.id = "acerca";

    const h2 = document.createElement("h2");
    h2.className = "display-3 font-weight-bold my-4";
    h2.textContent = "Acerca de Pokemon";

    const introP = document.createElement("p");
    introP.className = "my-4";
    introP.textContent = "El juego mas conocido de los 90s.";

    const row = document.createElement("div");
    row.className = "row";

    const features = [
      {
        icon: "fas fa-camera",
        title: "Capturalos todos",
        text: 'El lema "¡Hazte con todos!" refleja el objetivo central de los juegos de Pokémon: capturar la mayor cantidad posible de las diversas especies de Pokémon. Cada Pokémon tiene sus propias características y habilidades únicas, lo que hace que la colección sea una experiencia emocionante y gratificante.',
      },
      {
        icon: "fas fa-bullhorn",
        title: "Fortalece tus Pokémon",
        text: "Entrenar y fortalecer a tus Pokémon es esencial para progresar en el juego. Los jugadores pueden aumentar el nivel de sus Pokémon, enseñarles nuevos movimientos y evolucionarlos a formas más poderosas mediante la experiencia adquirida en las batallas.",
      },
      {
        icon: "far fa-map",
        title: "Recorre cada gimnasio",
        text: "En tu aventura, visitarás varios gimnasios Pokémon, donde deberás enfrentarte a líderes de gimnasio expertos. Cada líder de gimnasio se especializa en un tipo específico de Pokémon, y derrotarlos es clave para avanzar en tu camino hacia convertirte en el Campeón Pokémon.",
      },
    ];

    features.forEach((feature) => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      const icon = document.createElement("i");
      icon.className = `${feature.icon} my-3 fa-3x`;

      const h3 = document.createElement("h3");
      h3.className = "my-3";
      h3.textContent = feature.title;

      const p = document.createElement("p");
      p.className = "my-3";
      p.textContent = feature.text;

      col.append(icon, h3, p);
      row.appendChild(col);
    });

    section.append(h2, introP, row);
    return section;
  }
  createInitialPokemonSection() {
    const section = document.createElement("section");
    section.className = "container-fluid my-5 p-3 bg-dark";
    section.id = "iniciales";

    const h2 = document.createElement("h2");
    h2.className = "display-3 text-center font-weight-bold my-4 text-white";
    h2.textContent = "Iniciales";

    const row = document.createElement("div");
    row.className = "row row-cols-1 row-cols-md-3 g-4";

    const pokemonData = [
      {
        name: "Charmander",
        cardClass: "card-charmander",
        image: "assets/img/charmander.png",
        type: { text: "Fuego", class: "bg-danger" },
        color: "Amarillo",
        abilities:
          "Atacar a distancia, Escupir fuego, Atacar a objetos inanimados",
      },
      {
        name: "Bulbasaur",
        cardClass: "card-bulbasaur",
        image: "assets/img/bulbasaur.png",
        type: { text: "Planta/Veneno", class: "bg-success" },
        color: "Verde",
        abilities:
          "Atacar a distancia, Atacar a objetos inanimados, Escupir Veneno",
      },
      {
        name: "Squirtle",
        cardClass: "card-squirtle",
        image: "assets/img/squirtle.png",
        type: { text: "Agua", class: "bg-info" },
        color: "Azul",
        abilities:
          "Atacar a distancia, Atacar a objetos inanimados, Escupir Agua",
      },
    ];

    pokemonData.forEach((pokemon) => {
      const col = document.createElement("div");
      col.className = "col";

      const card = document.createElement("div");
      card.className = `card ${pokemon.cardClass}`;

      const img = document.createElement("img");
      img.src = pokemon.image;
      img.className = "card-img-top";
      img.alt = pokemon.name;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = pokemon.name;

      const text = document.createElement("p");
      text.className = "card-text";

      const typeSpan = document.createElement("span");
      typeSpan.className = `badge ${pokemon.type.class}`;
      typeSpan.textContent = pokemon.type.text;

      text.innerHTML = `
        <strong>Tipo:</strong> ${typeSpan.outerHTML}<br>
        <strong>Color:</strong> ${pokemon.color}<br>
        <strong>Habilidades:</strong> ${pokemon.abilities}
      `;

      cardBody.append(title, text);
      card.append(img, cardBody);
      col.appendChild(card);
      row.appendChild(col);
    });

    section.append(h2, row);
    return section;
  }
  createFooter() {
    const footer = document.createElement("footer");
    footer.id = "footer";

    const row = document.createElement("div");
    row.className = "row";

    const col = document.createElement("div");
    col.className = "col-12";

    const ul = document.createElement("ul");
    ul.className = "list-unstyled";

    const backToTop = document.createElement("li");
    backToTop.className = "float-end";
    const backLink = document.createElement("a");
    backLink.href = "#home";
    const backButton = document.createElement("button");
    backButton.id = "back-to-top";
    backButton.type = "button";
    backButton.className = "btn btn-secondary";
    const upIcon = document.createElement("i");
    upIcon.className = "fas fa-arrow-up";
    backButton.appendChild(upIcon);
    backLink.appendChild(backButton);
    backToTop.appendChild(backLink);

    const links = [
      { text: "Tema de Bootstrap", href: "https://bootswatch.com/quartz/" },
      { text: "GitHub", href: "https://github.com/dxnale" },
    ];

    const listItems = links.map((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.text;
      li.appendChild(a);
      return li;
    });

    ul.append(backToTop, ...listItems);

    const credits = [
      {
        text: "Creado por ",
        link: { text: "Daniel Torrealba", href: "https://github.com/dxnale" },
      },
      {
        text: "Basado en ",
        link: { text: "Bootstrap", href: "https://getbootstrap.com/" },
        additional: ". Iconos de ",
        link2: { text: "Font Awesome", href: "https://fontawesome.com/icons" },
        additional2: ". Fuentes de ",
        link3: { text: "Google", href: "https://fonts.google.com/" },
      },
    ];

    const creditParagraphs = credits.map((credit) => {
      const p = document.createElement("p");
      p.append(
        credit.text,
        Object.assign(document.createElement("a"), {
          href: credit.link.href,
          textContent: credit.link.text,
        })
      );

      if (credit.additional) {
        p.append(
          credit.additional,
          Object.assign(document.createElement("a"), {
            href: credit.link2.href,
            textContent: credit.link2.text,
            rel: "nofollow",
          }),
          credit.additional2,
          Object.assign(document.createElement("a"), {
            href: credit.link3.href,
            textContent: credit.link3.text,
            rel: "nofollow",
          })
        );
      }

      return p;
    });

    col.append(ul, ...creditParagraphs);
    row.appendChild(col);
    footer.appendChild(row);

    return footer;
  }
}

export { ExportDOM as default };
