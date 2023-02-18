(function () {
  class RemainingCharacters extends HTMLElement {
    update() {
      const maxLength = this.inputEl.maxLength;
      if (maxLength !== -1) {
        this.numberEl.innerText = maxLength - this.inputEl.value.length;
      }
    }

    constructor() {
      super();

      this.inputEl = this.querySelector("textarea, input");
      this.textEl = this.querySelector("[data-remaining-characters-text]");
      this.numberEl = this.querySelector("[data-remaining-characters-number]");

      if (this.inputEl && this.numberEl) {
        this.update();
        this.inputEl.addEventListener("input", this.update.bind(this));
      }

      if (this.textEl) {
        this.textEl.style.display = "inline";
      }
    }
  }

  if (!customElements.get("ds-remaining-characters")) {
    customElements.define("ds-remaining-characters", RemainingCharacters);
  }
})();
