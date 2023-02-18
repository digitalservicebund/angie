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


(function () {
  class TextareaAutoResize extends HTMLElement {
    update() {
      this.textarea.style.height = "auto";
      this.textarea.style.height = this.textarea.scrollHeight + "px";
    }

    constructor() {
      super();

      this.textarea = this.querySelector("textarea");
      this.onChange = this.update.bind(this);

      if (this.textarea) {
        this.update();
        this.textarea.addEventListener("input", this.onChange);
        window.addEventListener("resize", this.onChange);
      }
    }

    disconnectedCallback() {
      window.removeEventListener("resize", this.onChange);
    }
  }

  if (!customElements.get("ds-textarea-auto-resize")) {
    customElements.define("ds-textarea-auto-resize", TextareaAutoResize);
  }
})();
