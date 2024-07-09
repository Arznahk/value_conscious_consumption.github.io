const objects = document.querySelectorAll('.object');

function checkFade() {
    objects.forEach(object => {
        const objectTop = object.getBoundingClientRect().top;
        const objectBottom = object.getBoundingClientRect().bottom;
        const containerTop = object.closest('.container').getBoundingClientRect().top;
        const containerBottom = object.closest('.container').getBoundingClientRect().bottom;

        if (objectTop >= containerTop && objectBottom <= containerBottom) {
            object.classList.add('fade-in');
        }
    });
}

// 스크롤 이벤트 리스너 등록
document.addEventListener('scroll', checkFade);

// 페이지 로드 시 초기 체크
checkFade();

