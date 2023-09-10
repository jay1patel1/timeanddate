const time = document.querySelector("#time");
const date = document.querySelector("#date");

setInterval(() => {
    const gettime = new Date().toLocaleTimeString();
    const getDate = new Date().toDateString();

    time.innerHTML = `<span>${gettime}</span>`;
    date.innerHTML = `<span>${getDate}</span>`;
}, 1000);



