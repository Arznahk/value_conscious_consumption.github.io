const fadeElements = document.querySelectorAll('.fade-in');

// 요소들을 순차적으로 나타나기 위한 간격 설정
const fadeInOffset = 200; // 예시로 200px 아래에서 나타나게 설정

function checkFadeElements() {
    fadeElements.forEach((element, index) => {
        // 각 요소의 시작 위치 계산
        const elementOffset = element.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // 각 요소가 시작 위치에 도달하면 show 클래스 추가
        if (scrollPosition > elementOffset + fadeInOffset) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', checkFadeElements);

// 페이지 로드 시 초기 체크
checkFadeElements();
