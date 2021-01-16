class Panic {
  constructor(container) {
    this.container = container;
    this.on = false;
  }

  start() {
    if (this.on)
      return;
    else
      this.on = true;
    console.log("panic");
    this.container.style.backgroundColor = "white";
  }

  stop() {
    if (!this.on)
      return
    else
      this.on = false;
    console.log("calm");
    this.container.style.backgroundColor = "black";
  }

  capture() {
    window.onkeydown = this.stop;
    window.onkeyup   = this.start;
  }
}


document.addEventListener("DOMContentLoaded", () => {
  let ctn = document.querySelector("#container");
  const panic = new Panic(ctn);
  panic.capture();
});
