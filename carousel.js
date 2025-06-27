var slides = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: '첫 번째 슬라이드',
    link: '#1',
    desc: '설명 텍스트 1'
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: '두 번째 슬라이드',
    link: '#2',
    desc: '설명 텍스트 2'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: '세 번째 슬라이드',
    link: '#3',
    desc: '설명 텍스트 3'
  }
];

var current = 0;
var $carousel = document.getElementById('carousel');
var $indicator = document.getElementById('carousel-indicator');

function updateCarousel() {
  var slide = slides[current];
  $carousel.innerHTML = '';

  var prevBtn = document.createElement('button');
  prevBtn.className = 'nav prev';
  prevBtn.innerHTML = '&lt;';
  prevBtn.onclick = function() {
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel();
  };
  $carousel.appendChild(prevBtn);

  var slideDiv = document.createElement('div');
  slideDiv.className = 'slide';
  var imgLink = document.createElement('a');
  imgLink.href = slide.link;
  imgLink.className = 'slide-img';
  imgLink.tabIndex = 0;
  var img = document.createElement('img');
  img.src = slide.img;
  img.alt = slide.title;
  imgLink.appendChild(img);
  slideDiv.appendChild(imgLink);

  var infoDiv = document.createElement('div');
  infoDiv.className = 'slide-info';
  var titleLink = document.createElement('a');
  titleLink.href = slide.link;
  titleLink.className = 'slide-title';
  titleLink.tabIndex = 0;
  titleLink.textContent = slide.title;
  var descP = document.createElement('p');
  descP.className = 'slide-desc';
  descP.textContent = slide.desc;
  infoDiv.appendChild(titleLink);
  infoDiv.appendChild(descP);
  slideDiv.appendChild(infoDiv);
  $carousel.appendChild(slideDiv);

  var nextBtn = document.createElement('button');
  nextBtn.className = 'nav next';
  nextBtn.innerHTML = '&gt;';
  nextBtn.onclick = function() {
    current = (current + 1) % slides.length;
    updateCarousel();
  };
  $carousel.appendChild(nextBtn);

  $indicator.textContent = (current + 1) + ' / ' + slides.length;
}

updateCarousel();

$carousel.onkeydown = function(e) {
  if (e.keyCode === 37) {
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel();
  }
  if (e.keyCode === 39) {
    current = (current + 1) % slides.length;
    updateCarousel();
  }
}; 