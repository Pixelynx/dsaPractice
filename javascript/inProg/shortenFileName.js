let str = "photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11";

// // arr = [
// //     'photo.jpg, Warsaw, 2013-09-05 14:08:15',
// //     'john.png, London, 2015-06-20 15:13:22',
// //     'myFriends.png, Warsaw, 2013-09-05 14:07:13',
// //     'Eiffel.jpg, Paris, 2015-07-23 08:03:02',
// //     'pisatower.jpg, Paris, 2015-07-22 23:59:59',
// //     'BOB.jpg, London, 2015-08-05 00:02:03',
// //     'notredame.png, Paris, 2015-09-01 12:00:00',
// //     'me.jpg, Warsaw, 2013-09-06 15:40:22',
// //     'a.png, Warsaw, 2016-02-13 13:33:50',
// //     'b.jpg, Warsaw, 2016-01-02 15:12:22',
// //     'c.jpg, Warsaw, 2016-01-02 14:34:30',
// //     'd.jpg, Warsaw, 2016-01-02 15:15:01',
// //     'e.png, Warsaw, 2016-01-02 09:49:09',
// //     'f.png, Warsaw, 2016-01-02 10:55:32',
// //     'g.jpg, Warsaw, 2016-02-29 22:13:11'
// //   ]

// // output =>
//     // "Warsaw02.jpg
//     // London1.png
//     // Warsaw01.png
//     // Paris2.jpg
//     // Paris1.jpg
//     // London2.jpg
//     // Paris3.png
//     // Warsaw03.jpg
//     // Warsaw09.png
//     // Warsaw07.jpg
//     // Warsaw06.jpg
//     // Warsaw08.jpg
//     // Warsaw04.png
//     // Warsaw05.png
//     // Warsaw10.jpg"

const shortenFileName = (S) => {
    let arr = S.split("\n");
    let obj = {};
    let placeOrder = [];
// places[pl].sort((a, b) => {
//      a = new Date(a.date + " " + a.time);
//      b = new Date(b.date + " " + a.time);
// })
    for(let i = 0; i < arr.length; i++) {
        let [name, location, date, time] = arr[i].split(" ");
        location = location.slice(0,-1);
        placeOrder.push(location);
        // name = name.slice(name.length-5,-1);

        if(obj[location]) obj[location] = [location].push({location});
        else {
            obj[location] = [];
            obj[location].push({name});
        } 
    }
    // console.log(obj)
    // return arr
};

console.log(shortenFileName(str));


// const test = str => {
//     let photoArr = str.split('\n');
//     let placeOrder = [];
//     let placesObj = {};
//     let newStr = "";

//     for (let i = 0; i < photoArr.length; i++) {
//         let [name, location, date, time] = photoArr[i].split(" ");
//         location = location.slice(0, -1);
//         placeOrder.push(location);
//     }

//     for (let photo of photoArr) {
//         let [type, place, date, time] = photo.split(' ')
//         place = place.slice(0, -1)
//         type = type.slice(type.length - 4, -1);
//         if (placesObj[place]) {
//             placesObj[place].push({ type, place, date, time })
//         } else {
//             placesObj[place] = []
//             placesObj[place].push({ type, place, date, time })
//         }
//     }
//     // sorts images by time and date based off location
//     for (let pl in placesObj) {
//         placesObj[pl].sort((a, b) => {
//             a = new Date(a.date + " " + a.time)
//             b = new Date(b.date + " " + b.time)
//             return a - b
//         })
//     }
//     // adds number to end of duplicate places
//     for (let pl in placesObj) {
//         for (let idx in placesObj[pl]) {
//             let pal = placesObj[pl][idx]
//             pal.place = `${pal.place}${Number(idx) + 1}`
//         }
//     }

//     for (let i = 0; i < placeOrder.length; i++) {
//         console.log(placesObj)
//         // for (let pl in placesObj) {


//         // }
//     }
//     // console.log(placesObj)
//     console.log(newStr)

//     // photoArr = photoArr.map( photo => {
//     //   let [type, place, date, time] = photo.split(' ');
//     //   for(let pl in placesObj){
//     //     console.log(placesObj)
//     //   }
//     // })
//     // console.log(placesObj)
// }

// console.log(test(str))

// const crap = (str) => {
//     let photoArr = str.split('\n')
//   let placesObj = {};
//   for(let photo of photoArr){
//     let [type, place, date, time] = photo.split(' ')
//     place = place.slice(0,-1)
//     type = type.slice(type.length - 4, -1);
//     if(placesObj[place]){
//       placesObj[place].push({ type , place, date, time})
//     }else{
//       placesObj[place] = []
//       placesObj[place].push({ type , place, date, time})
//     }
//   }
//   for(let pl in placesObj){
//     placesObj[pl].sort((a,b)=> {
//       a = new Date(a.date + " " + a.time) 
//       b = new Date(b.date + " "+ b.time)
//       return a - b;
//       })
//   }
//    let newStr = "";

//    for(let pl in placesObj){
//      for(let idx in placesObj[pl]){
//        let pal = placesObj[pl][idx]
//        newStr += placesObj[pl][idx];
//        if(placesObj[pl].length > 9) {
//             pal.place = `${pal.place}${Number(idx) + 1}`
//         } else {
//             pal.place = `${pal.place}${Number(idx) + 1}`
//         }
//      }
//   }
//   let newArr = [];
//   for(let key in placesObj){
//     newArr.push(...placesObj[key])
//   }
//   let cookie = [];
//   photoArr.forEach((pic, i) => {
//     let [type, place, date, time] = pic.split(' ')
//     cookie.push(date + " " + time)
//   })
//   for(let  pl of newArr){
//     let idx = cookie.indexOf(pl.date + " " + pl.time)
//     photoArr[idx] = pl
//   }
//   let last = photoArr.map(photo => {
//     `${photo.place}.${photo.type}`}
//     )

// }

// console.log(crap(str))
