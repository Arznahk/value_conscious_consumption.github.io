const object = document.querySelector('.object');

function checkFade() {
    const objectTop = object.getBoundingClientRect().top;
    const objectBottom = object.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    // 오브젝트가 화면 안에 들어왔는지 여부 확인
    if (objectTop >= 0 && objectBottom <= viewportHeight) {
        object.classList.add('fade-in');
    }
}

// 스크롤 이벤트 리스너 등록
document.addEventListener('scroll', checkFade);

// 페이지 로드 시 초기 체크
checkFade();
