const SetTime = () => {
    // get documents
    const hourElement = document.querySelector('#hours')
    const minuteElement = document.querySelector('#minutes')
    const secondElement = document.querySelector('#seconds')

    // get times
    const Time = new Date;
    const hours = Time.getHours();
    const minutes = Time.getMinutes();
    const seconds = Time.getSeconds();
    // make Pin degrees
    const hourPin = (360 / 12 *  hours) + (minutes / 2);
    const minutePin = (360 / 60 *  minutes) + (seconds / 12);
    const secondPin = (360 / 60 *  seconds);
    // adjusted time to Clock
    hourElement.style.transform = `rotate(${hourPin}deg)`
    minuteElement.style.transform = `rotate(${minutePin}deg)`
    secondElement.style.transform = `rotate(${secondPin}deg)`
};
SetTime();
setInterval(SetTime,1000)