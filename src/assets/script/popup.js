// popup.js

export function showPopup() {
    var popupView = document.querySelector('.popup-view');
    popupView.style.display = 'block';
}

export function closePopup() {
    var popup = document.getElementById('popup'); // 셀렉터 수정
    popup.style.display = 'none';
}

export function closePopup2() {
    var popupView = document.querySelector('.popup-view');
    popupView.style.display = 'none';
}

export function setupPopupEventListeners() {
    // 팝업 버튼에 클릭 이벤트 리스너 추가
    var popupBtn = document.querySelector('.popup-btn2');
    if (popupBtn) {
        popupBtn.addEventListener('click', showPopup);
    }

    // 첫 번째 닫기 버튼에 클릭 이벤트 리스너 추가
    var closePopupViewBtn = document.querySelector('.popup-close');
    if (closePopupViewBtn) {
        closePopupViewBtn.addEventListener('click', closePopup2);
    }

    // 두 번째 닫기 버튼(팝업 내부의 OK 버튼)에 클릭 이벤트 리스너 추가
    var closePopupBtn = document.querySelector('.popup-btn');
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', closePopup);
    }
}

// popup.js 아래 코드도 적용됨

// export function showPopup() {
//     var popupView = document.querySelector('.popup-view');
//     popupView.style.display = 'block';
// }

// export function closePopup() {
//     var popup = document.getElementById('popup');
//     popup.style.display = 'none';
// }

// export function closePopupView() {
//     var popupView = document.querySelector('.popup-view');
//     popupView.style.display = 'none';
// }

// export function setupPopupEventListeners() {
//     // 팝업 버튼에 클릭 이벤트 리스너 추가
//     var popupBtn = document.querySelector('.popup-btn2');
//     if (popupBtn) {
//         popupBtn.addEventListener('click', showPopup);
//     }

//     // #popup 내부의 닫기 버튼에 클릭 이벤트 리스너 추가
//     var closePopupBtn = document.querySelector('#popup .popup-btn');
//     if (closePopupBtn) {
//         closePopupBtn.addEventListener('click', closePopup);
//     }

//     // .popup-view 내부의 닫기 버튼에 클릭 이벤트 리스너 추가
//     var closePopupViewBtn = document.querySelector('.popup-close');
//     if (closePopupViewBtn) {
//         closePopupViewBtn.addEventListener('click', closePopupView);
//     }
// }

