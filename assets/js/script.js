// Interfaz
class IDOMComponent {
  constructor() {
    if (new.target === IDOMComponent) {
      throw new Error(
        "IDOMComponent es una interfaz abstracta no debes instanciarla"
      );
    }

    if (!this.render) {
      throw new Error(
        "Las clases que implementen IDOMComponent deben implementar el método render()"
      );
    }
  }
}

// Clase base para componentes
class BaseComponent extends IDOMComponent {
  constructor() {
    super();
  }

  // Métodos de utilidad protegidos para crear elementos
  _createElement(etiqueta, className = "", attributes = {}) {
    const element = document.createElement(etiqueta);
    if (className) element.className = className;
    // Los atributos deben ser un objeto con pares clave-valor para iterar e insertar en el elemento
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  }

  _createButton(className, text, type = "button", attributes = {}) {
    const button = this._createElement("button", className, {
      type,
      ...attributes,
    });
    button.textContent = text;
    return button;
  }

  _createIcon(iconClass) {
    return this._createElement("i", iconClass);
  }
}

// Componentes
class Navbar extends BaseComponent {
  #menuItems;
  #dropdownItems;

  constructor() {
    super();
    this.#menuItems = [
      { text: "Inicio", href: "", active: true },
      { text: "Pokedex", href: "" },
      { text: "Cartas", href: "" },
      { text: "Series", href: "" },
    ];

    this.#dropdownItems = [
      "Personajes",
      "Regiones",
      "Gimnasios",
      "divider",
      "Temporadas",
    ];
  }

  #createNavbarBrand() {
    const brand = this._createElement("a", "navbar-brand", { href: "#" });
    const img = this._createElement("img", "", {
      src: "assets/img/pokemon.png",
      alt: "pokemon logo",
      height: "26",
      width: "71",
    });
    brand.appendChild(img);
    return brand;
  }

  #createNavbarToggler() {
    const toggler = this._createElement("button", "navbar-toggler", {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarColor02",
      "aria-controls": "navbarColor02",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
    });
    toggler.appendChild(this._createElement("span", "navbar-toggler-icon"));
    return toggler;
  }

  #createMenuItem(item) {
    const li = this._createElement("li", "nav-item");
    const a = this._createElement(
      "a",
      `nav-link${item.active ? " active" : ""}`,
      { href: item.href }
    );
    a.textContent = item.text;

    if (item.active) {
      const span = this._createElement("span", "visually-hidden");
      span.textContent = "(current)";
      a.appendChild(span);
    }

    li.appendChild(a);
    return li;
  }

  #createDropdown() {
    const dropdownLi = this._createElement("li", "nav-item dropdown");
    const toggle = this._createElement("a", "nav-link dropdown-toggle", {
      href: "#",
      "data-bs-toggle": "dropdown",
      role: "button",
      "aria-haspopup": "true",
      "aria-expanded": "false",
    });
    toggle.textContent = "Info";

    const menu = this._createElement("div", "dropdown-menu");
    this.#dropdownItems.forEach((item) => {
      if (item === "divider") {
        menu.appendChild(this._createElement("div", "dropdown-divider"));
      } else {
        const a = this._createElement("a", "dropdown-item", { href: "#" });
        a.textContent = item;
        menu.appendChild(a);
      }
    });

    dropdownLi.append(toggle, menu);
    return dropdownLi;
  }

  #createSearchForm() {
    const form = this._createElement("form", "d-flex");
    const input = this._createElement("input", "form-control me-sm-2", {
      type: "search",
      placeholder: "Buscar",
    });
    const button = this._createButton(
      "btn btn-outline-secondary my-2 my-sm-0",
      "",
      "submit"
    );
    button.appendChild(this._createIcon("fas fa-search"));

    form.append(input, button);
    return form;
  }

  render() {
    const nav = this._createElement(
      "nav",
      "navbar navbar-expand-lg bg-transparent fixed-top",
      {
        "data-bs-theme": "dark",
      }
    );

    const container = this._createElement("div", "container");
    const collapse = this._createElement("div", "collapse navbar-collapse", {
      id: "navbarColor02",
    });
    const ul = this._createElement("ul", "navbar-nav me-auto");

    // Agregar items del menú
    this.#menuItems.forEach((item) =>
      ul.appendChild(this.#createMenuItem(item))
    );
    ul.appendChild(this.#createDropdown());

    collapse.append(ul, this.#createSearchForm());
    container.append(
      this.#createNavbarBrand(),
      this.#createNavbarToggler(),
      collapse
    );
    nav.appendChild(container);

    return nav;
  }
}

class Hero extends BaseComponent {
  render() {
    const header = this._createElement(
      "header",
      "hero text-light text-right pt-xl-5"
    );
    header.id = "home";
    const container = this._createElement("div", "container");

    const title = this._createElement(
      "h1",
      "display-1 font-weight-bold my-auto"
    );
    title.textContent = "¿Es un juego de rol?";

    const description = this._createElement("p", "my-3");
    description.textContent =
      "Pokémon es considerado un juego de rol (RPG). En los juegos de Pokémon, los jugadores asumen el rol de un entrenador de Pokémon y se embarcan en una aventura para capturar y entrenar criaturas llamadas Pokémon. Los jugadores participan en batallas por turnos, donde utilizan sus Pokémon para combatir contra otros Pokémon entrenados por personajes controlados por la inteligencia artificial o por otros jugadores.";

    const playButton = this._createElement("a", "btn btn-outline-info mr-3", {
      href: "#iniciales",
      id: "play-btn",
    });
    playButton.textContent = "Jugar";

    const infoButton = this._createElement("a", "btn btn-info", {
      href: "#acerca",
      id: "info-btn",
    });
    infoButton.textContent = "Info";

    container.append(title, description, playButton, infoButton);
    header.appendChild(container);
    return header;
  }
}

class About extends BaseComponent {
  render() {
    const section = this._createElement(
      "section",
      "container text-center my-5"
    );
    section.id = "acerca";

    const title = this._createElement("h2", "display-3 font-weight-bold my-4");
    title.textContent = "Acerca de Pokemon";

    const subtitle = this._createElement("p", "my-4");
    subtitle.textContent = "El juego mas conocido de los 90s.";

    const row = this._createElement("div", "row");

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
      const col = this._createElement("div", "col-md-4");
      const icon = this._createElement("i", `${feature.icon} my-3 fa-3x my-3`);
      const heading = this._createElement("h3", "my-3");
      heading.textContent = feature.title;
      const text = this._createElement("p", "my-3");
      text.textContent = feature.text;
      col.append(icon, heading, text);
      row.appendChild(col);
    });

    section.append(title, subtitle, row);
    return section;
  }
}

class InitialPokemon extends BaseComponent {
  constructor() {
    super();
    this.pokemons = [
      {
        name: "Charmander",
        image: "assets/img/charmander.png",
        type: { text: "Fuego", class: "bg-danger" },
        color: "Amarillo",
        abilities:
          "Atacar a distancia, Escupir fuego, Atacar a objetos inanimados",
      },
      {
        name: "Bulbasaur",
        image: "assets/img/bulbasaur.png",
        type: { text: "Planta/Veneno", class: "bg-success" },
        color: "Verde",
        abilities:
          "Atacar a distancia, Atacar a objetos inanimados, Escupir Veneno",
      },
      {
        name: "Squirtle",
        image: "assets/img/squirtle.png",
        type: { text: "Agua", class: "bg-info" },
        color: "Azul",
        abilities:
          "Atacar a distancia, Atacar a objetos inanimados, Escupir Agua",
      },
    ];
  }

  addPokemon(pokemon) {
    this.pokemons.push(pokemon);
    this.renderNewPokemon(pokemon);
  }

  renderNewPokemon(pokemon) {
    const row = document.querySelector("#iniciales .row");
    const col = this._createElement("div", "col");
    const card = this._createElement(
      "div",
      `card pokemon-card card-${pokemon.name.toLowerCase()}`
    );
    const img = this._createElement("img", "card-img-top", {
      src: pokemon.image,
      alt: pokemon.name,
    });
    const cardBody = this._createElement("div", "card-body");
    const cardTitle = this._createElement("h5", "card-title");
    cardTitle.textContent = pokemon.name;
    const cardText = this._createElement("p", "card-text");

    const typeSpan = this._createElement("span", `badge ${pokemon.type.class}`);
    typeSpan.textContent = pokemon.type.text;

    cardText.innerHTML = `
      <strong>Tipo:</strong> ${typeSpan.outerHTML}<br>
      <strong>Color:</strong> ${pokemon.color}<br>
      <strong>Habilidades:</strong> ${pokemon.abilities}
    `;

    cardBody.append(cardTitle, cardText);
    card.append(img, cardBody);
    col.appendChild(card);
    row.appendChild(col);

    addCardHoverEffects();
    addPokemonCardClickEvents();
  }

  render() {
    const section = this._createElement(
      "section",
      "container-fluid my-5 p-3 bg-dark"
    );
    section.id = "iniciales";

    const title = this._createElement(
      "h2",
      "display-3 text-center font-weight-bold my-4 text-white"
    );
    title.textContent = "Pokemons";

    const row = this._createElement("div", "row row-cols-1 row-cols-md-3 g-4");

    this.pokemons.forEach((pokemon) => {
      const col = this._createElement("div", "col");
      const card = this._createElement(
        "div",
        `card pokemon-card card-${pokemon.name.toLowerCase()}`
      );
      const img = this._createElement("img", "card-img-top", {
        src: pokemon.image,
        alt: pokemon.name,
      });
      const cardBody = this._createElement("div", "card-body");
      const cardTitle = this._createElement("h5", "card-title");
      cardTitle.textContent = pokemon.name;
      const cardText = this._createElement("p", "card-text");

      const typeSpan = this._createElement(
        "span",
        `badge ${pokemon.type.class}`
      );
      typeSpan.textContent = pokemon.type.text;

      cardText.innerHTML = `
        <strong>Tipo:</strong> ${typeSpan.outerHTML}<br>
        <strong>Color:</strong> ${pokemon.color}<br>
        <strong>Habilidades:</strong> ${pokemon.abilities}
      `;

      cardBody.append(cardTitle, cardText);
      card.append(img, cardBody);
      col.appendChild(card);
      row.appendChild(col);
    });

    section.append(title, row);
    return section;
  }
}

class Footer extends BaseComponent {
  render() {
    const footer = this._createElement("footer");
    footer.id = "footer";

    const row = this._createElement("div", "row");
    const col = this._createElement("div", "col-12");

    const ul = this._createElement("ul", "list-unstyled");

    const topLi = this._createElement("li", "float-end");
    const topLink = this._createElement("a", "", { href: "#home" });
    const topButton = this._createElement("button", "btn btn-secondary", {
      id: "back-to-top",
      type: "button",
    });
    const topIcon = this._createElement("i", "fas fa-arrow-up");

    topButton.appendChild(topIcon);
    topLink.appendChild(topButton);
    topLi.appendChild(topLink);

    const links = [
      { text: "Tema de Bootstrap", href: "https://bootswatch.com/quartz/" },
      { text: "GitHub", href: "https://github.com/dxnale" },
    ];

    links.forEach((link) => {
      const li = this._createElement("li");
      const a = this._createElement("a", "", { href: link.href });
      a.textContent = link.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    ul.appendChild(topLi);

    const credits = [
      'Creado por <a href="https://github.com/dxnale">Daniel Torrealba</a>.',
      'Basado en <a href="https://getbootstrap.com/" rel="nofollow">Bootstrap</a>. Iconos de <a href="https://fontawesome.com/icons" rel="nofollow">Font Awesome</a>. Fuentes de <a href="https://fonts.google.com/" rel="nofollow">Google</a>.',
    ];

    const creditParagraphs = credits.map((credit) => {
      const p = this._createElement("p");
      p.innerHTML = credit;
      return p;
    });

    col.append(ul, ...creditParagraphs);
    row.appendChild(col);
    footer.appendChild(row);
    return footer;
  }
}

// Interfaz Exportador
class IDOMExporter {
  constructor() {
    if (new.target === IDOMExporter) {
      throw new Error(
        "IDOMExporter es una interfaz abstracta no debes instanciarla"
      );
    }

    const metodosRequeridos = [
      "createNavbar",
      "createHero",
      "createAboutSection",
      "createInitialPokemonSection",
      "createFooter",
    ];

    metodosRequeridos.forEach((method) => {
      if (!this[method]) {
        throw new Error(
          `Las clases que implementen IDOMExporter deben implementar el método ${method}()`
        );
      }
    });
  }
}

// Exportador
class DOMExporter extends IDOMExporter {
  #components;

  constructor() {
    super();
    this.#components = {
      navbar: new Navbar(),
      hero: new Hero(),
      about: new About(),
      initialPokemon: new InitialPokemon(),
      footer: new Footer(),
      pokemonForm: new PokemonForm(),
    };
  }

  createNavbar() {
    return this.#components.navbar.render();
  }

  createHero() {
    return this.#components.hero.render();
  }

  createAboutSection() {
    return this.#components.about.render();
  }

  createInitialPokemonSection() {
    return this.#components.initialPokemon.render();
  }

  createFooter() {
    return this.#components.footer.render();
  }

  createPokemonForm() {
    return this.#components.pokemonForm.render();
  }
}

function addCardHoverEffects() {
  // Seleccionar todas las tarjetas de Pokémon
  const pokemonCards = document.querySelectorAll(".pokemon-card");

  pokemonCards.forEach((card) => {
    card.style.transition = "transform 0.3s ease";

    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.1)";
      card.style.zIndex = "1";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.zIndex = "0";
    });
  });
}

function addPokemonCardClickEvents() {
  const cards = document.querySelectorAll(".pokemon-card");
  pokemons = InitialPokemon.pokemons;
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Obtener el nombre del Pokémon desde el título de la tarjeta
      const pokemonName = card.querySelector("img").getAttribute("alt");
      console.log(encodeURIComponent(pokemonName));

      const searchQuery = `https://www.google.com/search?q=pokemon+${encodeURI(
        pokemonName
      )}`;

      // Abrir en nueva pestaña
      window.open(searchQuery, "_blank");
    });
    card.style.cursor = "pointer";
  });
}

// Cmponente para el formulario
class PokemonForm extends BaseComponent {
  render() {
    const section = this._createElement("section", "container my-5");
    section.id = "nuevo-pokemon";

    const title = this._createElement("h2", "text-center mb-4");
    title.textContent = "Agregar Nuevo Pokémon";

    const form = this._createElement("form", "needs-validation");
    form.id = "pokemon-form";

    const fields = [
      {
        label: "Nombre del Pokémon",
        type: "text",
        id: "pokemon-name",
        required: true,
      },
      {
        label: "URL de la imagen",
        type: "url",
        id: "pokemon-image",
        required: true,
      },
      {
        label: "Color",
        type: "text",
        id: "pokemon-color",
        required: true,
      },
      {
        label: "Habilidades",
        type: "text",
        id: "pokemon-abilities",
        required: true,
      },
    ];

    // Crear campos del formulario
    fields.forEach((field) => {
      const formGroup = this._createElement("div", "form-group mb-3");

      const label = this._createElement("label", "form-label");
      label.htmlFor = field.id;
      label.textContent = field.label;

      const input = this._createElement("input", "form-control", {
        type: field.type,
        id: field.id,
        required: field.required,
      });

      formGroup.append(label, input);
      form.appendChild(formGroup);
    });

    // Tipo de Pokémon
    const typeGroup = this._createElement("div", "form-group mb-3");
    const typeLabel = this._createElement("label", "form-label");
    typeLabel.textContent = "Tipo de Pokémon";

    const typeSelect = this._createElement("select", "form-select", {
      id: "pokemon-type",
    });

    const types = [
      { text: "Fuego", class: "bg-danger" },
      { text: "Planta/Veneno", class: "bg-success" },
      { text: "Agua", class: "bg-info" },
    ];

    types.forEach((type) => {
      const option = this._createElement("option");
      option.value = JSON.stringify(type);
      option.textContent = type.text;
      typeSelect.appendChild(option);
    });

    typeGroup.append(typeLabel, typeSelect);
    form.appendChild(typeGroup);

    // Botón submit
    const submitBtn = this._createButton(
      "btn btn-outline-info w-100 mt-3",
      "Agregar Pokémon",
      "submit"
    );

    form.appendChild(submitBtn);
    section.append(title, form);

    // Evento submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const newPokemon = {
        name: document.getElementById("pokemon-name").value,
        image: document.getElementById("pokemon-image").value,
        type: JSON.parse(document.getElementById("pokemon-type").value),
        color: document.getElementById("pokemon-color").value,
        abilities: document.getElementById("pokemon-abilities").value,
      };

      // Agregar el nuevo Pokémon
      const initialPokemon = new InitialPokemon();
      initialPokemon.addPokemon(newPokemon);

      // Limpiar formulario
      form.reset();
    });

    return section;
  }
}

const domExporter = new DOMExporter();
const components = [
  domExporter.createNavbar(),
  domExporter.createHero(),
  domExporter.createAboutSection(),
  domExporter.createInitialPokemonSection(),
  domExporter.createPokemonForm(),
  domExporter.createFooter(),
];

components.forEach((component) => document.body.appendChild(component));
addCardHoverEffects();
addPokemonCardClickEvents();
