const calcClockHandAngles = (time) => {
    // when hour hits 12; reset hour to 0
    // when minutes hits 60; reset minutes to 0

    time = time.split(":")
    let mH = time[1];
    let hH = time[0];
    if(mH === 60) mH = 0;
    if(hH === 12) hH = 0;

    let mHAngle = mH * 6;
    let hHAngle = hH * 30;

    let currentAngle = Math.abs(mHAngle - hHAngle);

    return Math.min(currentAngle, 360 - currentAngle);
};

console.log(calcClockHandAngles("8:55"));

