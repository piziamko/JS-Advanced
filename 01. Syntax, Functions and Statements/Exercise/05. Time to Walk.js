function timeToWalk(steps, footPrint, speed) {
    let distanceInMeters = steps * footPrint;
    let speedMetersInSec = speed / 3.6;
    let time = distanceInMeters / speedMetersInSec;
    let rest = Math.floor(distanceInMeters / 500);

    let timeInMin = Math.floor(time / 60);

    let timeInSec = Number(time - (timeInMin * 60)).toFixed(0);
    let timeInH = Math.floor(time / 3600);
    timeInMin += rest;
    timeInH += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;

    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
    
    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}

// Variant 0

function timeToWalk(steps, footprint, speed) {
  let distanceMeters = steps * footprint;
  let speedMetersSec = speed / 3.6;
  let time = distanceMeters / speedMetersSec;
  let rest = Math.floor(distanceMeters / 500);
  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - timeMin * 60);
  let timeHr = Math.floor(time / 3600);

  console.log((timeHr < 10 ? '0' : '') + timeHr + ':' + (timeMin + rest < 10 ? '0' : '') +
    (timeMin + rest) + ':' + (timeSec < 10 ? '0' : '') + timeSec);
}

// Variant 2

function TimeToWalk(arg1, arg2, arg3) {
    let stepsNumber = Number(arg1);
    let stepsMetersHr = Number(arg2);
    let studentSpeed = Number(arg3);

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - timeMin * 60);
    let timeHr = Math.floor(time / 3600);

    console.log(
        (timeHr < 10 ? '0' : '') +
            timeHr +
            ':' +
            (timeMin + rest < 10 ? '0' : '') +
            (timeMin + rest) +
            ':' +
            (timeSec < 10 ? '0' : '') +
            timeSec
    );
}

//TimeToWalk(4000, 0.6, 5);
//TimeToWalk(2564, 0.7, 5.5);
