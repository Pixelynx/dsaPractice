
let meetings = 'Sun 10:00-20:00\nFri 05:00-10:00\nFri 16:30-23:50\nSat 10:00-24:00\nSun 01:00-04:00\nSat 02:00-06:00\nTue 03:30-18:15\nTue 19:00-20:00\nWed 04:25-15:14\nWed 15:14-22:40\nThu 00:00-23:59\nMon 05:00-13:00\nMon 15:00-21:00'

const convertToMins = (timeArr) => {
    let hours1;
    let hours2;
    let hours;
    let mins1;
    let mins2;
    let mins;
    timeArr = timeArr.split("-");
    console.log(timeArr)

    hours1 = timeArr[0].split(":")[0]
    mins1 = timeArr[0].split(":")[1]
    hours2 = timeArr[1].split(":")[0]
    mins2 = timeArr[1].split(":")[1]

    if (hours1 < hours2) {
        let temp = hours1;
        hours1 = hours2;
        hours2 = temp;
    }
    hours = 60 * (hours1 - hours2);

    if (mins1 < mins2) {
        let temp = mins1;
        mins1 = mins2;
        mins2 = temp;
    }
    return mins = (mins1 - mins2) + 60 * (hours1 - hours2);
};

const sortDays = {
    "Mon": 1,
    "Tue": 2,
    "Wed": 3,
    "Thu": 4,
    "Fri": 5,
    "Sat": 6,
    "Sun": 7
};

function solution(S) {
    let daysOfWeek = new Set(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
    S = S.replace(/(\n)/g, " ").split(" ")
    let sched = {};
    let orderedSched = {};
    let greatestTimeBlock = 0;


    for (let i = 0; i < S.length; i++) {
        if (daysOfWeek.has(S[i])) {
            if (!sched[S[i]]) {
                sched[S[i]] = [S[i + 1]]
            } else {
                sched[S[i]].push(S[i + 1])
            }
        }
    }
    let count = 0;
    let temp, currentTime, nextTime;
    let obj = Object.values(sched)
    for (let i = 0; i <= obj.length; i++) {
        for (j = i + 1; j <= obj[1].length; j++) {
            console.log(obj[j])
        }
    }
    // console.log(test)
    // console.log(sched)
    // return greatestTimeBlock;
};

// let test = new Date("01:00-04:00")
// console.log(test)

console.log(solution(meetings))
// convertToMins(["05:00-13:00", "15:00-21:00"])