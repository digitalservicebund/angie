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
