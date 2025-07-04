const colors = ['#d7263d', '#fbb13c', '#a52a2a', '#b5ead7', '#c7ceea'];
const shapeTypes = ['circle', 'square'];
const shapesBox = document.getElementById('shapes');

function random(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 10; i++) {
  // 도형 만들기
  const div = document.createElement('div');
  const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = random(40, 70);
  div.style.position = 'absolute';
  div.style.width = size + 'px';
  div.style.height = size + 'px';
  div.style.background = color;
  div.style.opacity = '0.8';
  div.style.left = random(0, 340 - size) + 'px';
  div.style.top = random(0, 340 - size) + 'px';
  if (type === 'circle') {
    div.style.borderRadius = '50%';
  } else {
    div.style.borderRadius = '12px';
  }
  div.className = 'js-shape';
  shapesBox.appendChild(div);

  // 단순 이동 애니메이션
  setInterval(() => {
    div.style.left = random(0, 340 - size) + 'px';
    div.style.top = random(0, 340 - size) + 'px';
  }, 1800 + Math.random() * 1000);
} 