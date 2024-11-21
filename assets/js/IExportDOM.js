class IExportDOM {
  constructor() {
    if (new.target === IExportDOM)
      console.error("La interfaz IExportDOM no es instanciable");

    if (!this.setHeader) throw new Error("Debes implementar metodo setHeader");

    if (!this.setBody) throw new Error("Debes implementar metodo setBody");

    if (!this.setFooter) throw new Error("Debes implementar metodo setFooter");

    if (!this.getHeader) throw new Error("Debes implementar metodo getHeader");

    if (!this.getBody) throw new Error("Debes implementar metodo getBody");

    if (!this.getFooter) throw new Error("Debes implementar metodo getFooter");
  }
}

export { IExportDOM as default };
