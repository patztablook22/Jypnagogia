class Panic {
  constructor(container) {
    this.container = container;
    this.on = false;
  }

  start(e) {
    if (this.on)
      return;
    else
      this.on = true;
    console.log("started");
  }

  stop() {
    if (!this.on)
      return
    else
      this.on = false;
    console.log("panic");
  }

  capture() {
    window.onkeydown = this.start;
    window.onkeyup   = this.stop;
  }
}


document.addEventListener("DOMContentLoaded", () => {
  let ctn = document.querySelector("#container");
  const panic = new Panic(ctn);
  panic.capture();
});
