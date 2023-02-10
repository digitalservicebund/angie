if (typeof TextareaAutoResize === "undefined") {
  class TextareaAutoResize extends HTMLElement {
    update() {
      this.textarea.style.height = "auto";
      this.textarea.style.height = this.textarea.scrollHeight + "px";
    }

    constructor() {
      super();

      this.textarea = this.querySelector("textarea");

      if (this.textarea) {
        this.update();
        this.textarea.addEventListener("input", this.update.bind(this));
      }
    }
  }

  if (!customElements.get("ds-textarea-auto-resize")) {
    customElements.define("ds-textarea-auto-resize", TextareaAutoResize);
  }
}
