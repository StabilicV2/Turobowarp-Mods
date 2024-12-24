let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

function updateClock() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let hr_rotation = (30 * hr + min / 2);
    let min_rotation = min * 6;
    let sec_rotation = sec * 6;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    requestAnimationFrame(updateClock);
}
updateClock();