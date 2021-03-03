const background = document.querySelector('.background');

let load = 0;
let int = setInterval(blurring, 10);

function blurring() {
  load++;

  if (load > 97) {
    clearInterval(int);
  }

  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
