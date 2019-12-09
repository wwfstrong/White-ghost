import string from "./css.js";

const player = {
  n: 1,
  time: 100,
  id: undefined,
  ul: {
    demo1: document.querySelector("#demo1"),
    demo2: document.querySelector("#demo2"),
    buttons: document.querySelectorAll('button')
  },
  init: () => {
    player.play();
    player.btnPause();
    player.btnSlow();
    player.btnNormal();
    player.btnFast();
    player.btnReplay();
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ul.demo1.innerText = string.substr(0, player.n);
    player.ul.demo2.innerHTML = string.substr(0, player.n);
    player.ul.demo1.scrollTop = player.ul.demo1.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 10;
    player.play();
  },
  replay: () => {
    player.n = 1;
    player.pause();
    player.play();
  },
  btnPause: () => {
    btnPause.onclick = () => {
      player.pause();
      for (let i = 0; i < player.ul.buttons.length; i++) {
        player.ul.buttons[i].className = "";
        btnPause.className = "light";
      }
    };
  },
  btnSlow: () => {
    btnSlow.onclick = () => {
      player.slow();
      for (let i = 0; i < player.ul.buttons.length; i++) {
        player.ul.buttons[i].className = "";
        btnSlow.className = "light";
      }
    };
  },
  btnNormal: () => {
    btnNormal.onclick = () => {
      player.normal();
      for (let i = 0; i < player.ul.buttons.length; i++) {
        player.ul.buttons[i].className = "";
        btnNormal.className = "light";
      }
    };
  },
  btnFast: () => {
    btnFast.onclick = () => {
      player.fast();
      for (let i = 0; i < player.ul.buttons.length; i++) {
        player.ul.buttons[i].className = "";
        btnFast.className = "light";
      }
    };
  },
  btnReplay: () => {
    btnReplay.onclick = () => {
      player.replay();
      for (let i = 0; i < player.ul.buttons.length; i++) {
        player.ul.buttons[i].className = "";
        btnReplay.className = "light";
      }
    };
  }
};

player.init();
