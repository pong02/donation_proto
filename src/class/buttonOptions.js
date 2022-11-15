class ButtonOption {
  constructor(name) {
    this.name = name;
    this.path = "/" + this.pathify(name);
  }

  pathify(name) {
    let url = window.location.href.replace("http://", "");
    let fix = url.replace("/donateHome", ""); //dont know why the ":" disappears...
    return fix + "/" + name.toLowerCase().trim().replace(/\s/g, "-");
  }
}

export default class ButtonOptionCollection {
  constructor() {
    const names = [
      "Home",
      "COVID-19",
      "About",
      "Global Network",
      "Survivors",
      "Programs & Services",
      "Get involved",
      "Understanding Cancer",
      "News & Resources",
      "Signature Events",
    ];
    this.options = [];
    for (let i = 0; i < names.length; i++) {
      let button = new ButtonOption(names[i]);
      this.options.push(button);
    }
  }

  getOptions() {
    return this.options;
  }
}
