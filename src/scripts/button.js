(function () {
  window.addEventListener("keydown", function (event) {
    console.log("keydown");
    const target = event.target;
    console.log(target);
    if (target.getAttribute("role") === "button" && event.keyCode === 32) {
      event.preventDefault();
      target.click();
    }
  });
})();
