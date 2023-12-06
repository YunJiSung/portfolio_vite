import { setupPopupEventListeners } from './popup.js';
import { updateWeather } from './updateWeather.js'; // updateWeather 모듈 추가
import { updateTime } from './updateTime.js'; // updateTime 모듈 추가
import { toggleFullScreen } from './fullscreen.js';
import { initializeCalendar } from './calendar.js'; // 캘린더 모듈 추가


// 전체화면 아이콘에 이벤트 리스너 추가
document.getElementById('icon-macos').addEventListener('click', toggleFullScreen);

document.addEventListener('DOMContentLoaded', () => {
    setupPopupEventListeners();
    updateWeather(); // updateWeather 함수 호출
    updateTime(); // updateTime 함수 호출
    initializeCalendar(); // 캘린더 초기화
});


// // main.js
// import { setupPopupEventListeners } from './popup.js';

// // DOM이 완전히 로드된 후에 이벤트 리스너 설정
// document.addEventListener("DOMContentLoaded", function () {
//     setupPopupEventListeners();

// });


// import { showPopup, closePopup, closePopup2, setupPopupEventListeners } from './popup.js';

// window.addEventListener("load", function () {
//     showPopup();
//     closePopup();
//     closePopup2();
//     setupPopupEventListeners();
// });