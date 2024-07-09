// 요소의 시작 위치와 높이를 계산
var fadeElement = document.getElementById('fade-in-element');
var elementOffset = fadeElement.getBoundingClientRect().top;
var elementHeight = fadeElement.offsetHeight;
var windowHeight = window.innerHeight;

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', function() {
  // 현재 스크롤 위치 계산
  var scrollPosition = window.scrollY + windowHeight;

  // 요소가 화면 안에 있고, 페이드 인이 시작되지 않은 경우
  if (scrollPosition > elementOffset + elementHeight / 2 && !fadeElement.classList.contains('fade-in')) {
    fadeElement.style.opacity = '1';
    fadeElement.classList.add('fade-in');
  }
});
