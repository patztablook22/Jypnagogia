const audio = new Audio("media/ding.mp3");

class Panic {
  constructor(container) {
    this.container = container;
    this.on = false;
    this.interval = null;
    this.audio = null;
  }

  start() {
    if (this.on)
      return;
    else
      this.on = true;
    console.log("panic");

    let color = "white";

    this.interval = window.setInterval(() => {

      this.container.style.backgroundColor = color;
      audio.play();

      if (color == "white")
        color = "black"
      else
        color = "white"

    }, 100);
  }

  stop() {
    if (!this.on)
      return
    else
      this.on = false;
    console.log("calm");
    this.container.style.backgroundColor = "black";
    clearInterval(this.interval);
  }

  listen() {
    window.onkeyup      = this.start;
    window.onkeydown    = this.stop;
  }
}


document.addEventListener("DOMContentLoaded", () => {
  let ctn = document.querySelector("#container");
  const panic = new Panic(ctn);
  panic.listen();
});
