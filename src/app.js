const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]

const randomColorsInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.body,
}

let timerId = null
let isActive = false

function colorBgInterval() {
  refs.body.style.backgroundColor =
    colors[randomColorsInterval(0, colors.length - 1)]
}

function onStart() {
  if (!isActive) {
    timerId = setInterval(colorBgInterval, 1000)
    isActive = true
  }
  return
}

function onStop() {
  clearInterval(timerId)
  isActive = true
}

refs.startBtn.addEventListener('click', onStart)
refs.stopBtn.addEventListener('click', onStop)
