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
    } else {
      console.error(
        "<ds-character-count> used without a text element and/or count element."
      );
    }
  }
}

customElements.define("ds-character-count", CharacterCount);


console.log("something");


class TextareaAutoResize extends HTMLElement {
  update() {
    console.log("update", this.textarea.scrollHeight);
    this.textarea.style.height = this.textarea.scrollHeight + "px";
  }

  constructor() {
    super();

    this.textarea = this.querySelector("textarea");

    if (this.textarea) {
      this.update();
      this.textarea.addEventListener("keydown", this.update.bind(this));
      this.textarea.addEventListener("change", this.update.bind(this));
    }
  }
}

customElements.define("ds-textarea-auto-resize", TextareaAutoResize);
