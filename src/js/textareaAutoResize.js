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
