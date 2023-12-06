const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function initializeCalendar() {
    const monthDropdown = document.getElementById("monthDropdown");
    const yearDropdown = document.getElementById("yearDropdown");
    const closeButton = document.getElementById("calendarCloseButton"); // 닫기 버튼의 ID를 여기에 추가

    fillDropdowns(monthDropdown, yearDropdown);
    showCalendar(monthDropdown, yearDropdown, currentMonth, currentYear);

    monthDropdown.addEventListener("change", () => updateCalendar(monthDropdown, yearDropdown));
    yearDropdown.addEventListener("change", () => updateCalendar(monthDropdown, yearDropdown));

    if (closeButton) {
        closeButton.addEventListener("click", () => toggleCalendarPopup());
    }

    const iconCalendar = document.getElementById("icon-calendar");
    if (iconCalendar) {
        iconCalendar.addEventListener("click", () => toggleCalendarPopup());
    }
}

function fillDropdowns(monthDropdown, yearDropdown) {
    monthDropdown.innerHTML = '';
    yearDropdown.innerHTML = '';

    for (let i = 0; i < months.length; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = months[i];
        monthDropdown.appendChild(option);
    }

    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearDropdown.appendChild(option);
    }
}

function updateCalendar(monthDropdown, yearDropdown) {
    const selectedMonth = monthDropdown.value;
    const selectedYear = yearDropdown.value;
    showCalendar(monthDropdown, yearDropdown, parseInt(selectedMonth), parseInt(selectedYear));
}

function showCalendar(monthDropdown, yearDropdown, month, year) {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "<ul class='weekdays'>" +
        "<li>Su</li><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li>" +
        "</ul>";

    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("ul");
        row.className = "days";

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("li");
            if (i === 0 && j < firstDay) {
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.innerText = date;
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                }
                row.appendChild(cell);
                date++;
            }
        }

        calendar.appendChild(row);
    }
}

function toggleCalendarPopup() {
    var calendarPopup = document.getElementById("calendarPopup");
    var isDisplayed = calendarPopup.style.display === "flex";
    calendarPopup.style.display = isDisplayed ? "none" : "flex";
    if (!isDisplayed) {
        fillDropdowns(document.getElementById("monthDropdown"), document.getElementById("yearDropdown"));
        showCalendar(document.getElementById("monthDropdown"), document.getElementById("yearDropdown"), currentMonth, currentYear);
    }
}

// const today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// export function initializeCalendar() {
//     const monthDropdown = document.getElementById("monthDropdown");
//     const yearDropdown = document.getElementById("yearDropdown");

//     fillDropdowns(monthDropdown, yearDropdown);
//     showCalendar(monthDropdown, yearDropdown, currentMonth, currentYear);

//     monthDropdown.addEventListener("change", () => updateCalendar(monthDropdown, yearDropdown));
//     yearDropdown.addEventListener("change", () => updateCalendar(monthDropdown, yearDropdown));

//     const iconCalendar = document.getElementById("icon-calendar");
//     if (iconCalendar) {
//         iconCalendar.addEventListener("click", () => toggleCalendarPopup(monthDropdown, yearDropdown));
//     }
// }

// function fillDropdowns(monthDropdown, yearDropdown) {
//     for (let i = 0; i < months.length; i++) {
//         const option = document.createElement("option");
//         option.value = i;
//         option.textContent = months[i];
//         monthDropdown.appendChild(option);
//     }

//     for (let i = currentYear - 10; i <= currentYear + 10; i++) {
//         const option = document.createElement("option");
//         option.value = i;
//         option.textContent = i;
//         yearDropdown.appendChild(option);
//     }
// }

// function updateCalendar(monthDropdown, yearDropdown) {
//     const selectedMonth = monthDropdown.value;
//     const selectedYear = yearDropdown.value;
//     showCalendar(monthDropdown, yearDropdown, parseInt(selectedMonth), parseInt(selectedYear));
// }

// function showCalendar(monthDropdown, yearDropdown, month, year) {
//     const calendar = document.getElementById("calendar");
//     calendar.innerHTML = "<ul class='weekdays'>" +
//         "<li>Su</li><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li>" +
//         "</ul>";

//     let firstDay = new Date(year, month).getDay();
//     let daysInMonth = 32 - new Date(year, month, 32).getDate();

//     let date = 1;
//     for (let i = 0; i < 6; i++) {
//         let row = document.createElement("ul");
//         row.className = "days";

//         for (let j = 0; j < 7; j++) {
//             let cell = document.createElement("li");
//             if (i === 0 && j < firstDay) {
//                 row.appendChild(cell);
//             } else if (date > daysInMonth) {
//                 break;
//             } else {
//                 cell.innerText = date;
//                 if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
//                     cell.classList.add("bg-info");
//                 }
//                 row.appendChild(cell);
//                 date++;
//             }
//         }

//         calendar.appendChild(row);
//     }
// }

// function toggleCalendarPopup(monthDropdown, yearDropdown) {
//     var calendarPopup = document.getElementById("calendarPopup");
//     var isDisplayed = calendarPopup.style.display === "block";
//     calendarPopup.style.display = isDisplayed ? "none" : "block";
//     if (!isDisplayed) {
//         fillDropdowns(monthDropdown, yearDropdown);
//         showCalendar(monthDropdown, yearDropdown, currentMonth, currentYear);
//     }
// }
