(function () {
  class CharacterCount extends HTMLElement {
    update() {
      this.countEl.innerText = this.textEl.value.length;
    }

    constructor() {
      super();

      this.textEl = this.querySelector("textarea, input");
      this.countEl = this.querySelector("[data-count]");

      if (this.textEl && this.countEl) {
        this.update();
        this.textEl.addEventListener("keyup", this.update.bind(this));
        this.textEl.addEventListener("change", this.update.bind(this));
      }
    }
  }

  if (!customElements.get("ds-character-count")) {
    customElements.define("ds-character-count", CharacterCount);
  }
})();
