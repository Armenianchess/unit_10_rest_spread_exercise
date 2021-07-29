
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

let filterOutOdds2 = (...args) => args.filter((num => num % 2 === 0))





function findMin(...args) {
    return Math.min(...args)
}




findMin(1, 4, 12, -3) // -3
findMin(1, -1) // -1
findMin(3, 1) // 1













function mergeObjects(obj1, obj2) {
    let allObj = { ...obj1, ...obj2 }
    return allObj
}




mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}







// jim why do they do ...arr in the array on like 415  => [...arr

let doubleAndReturnArgs2 = (arr, ...args) => [...arr, ...args.map(val => val * 2)]




doubleAndReturnArgs2([1, 2, 3], 4, 4) // [1,2,3,8,8]


























let removeRandom2 = (items2) => {
    let idx2 = Math.floor(Math.random() * items2.length);
    return [...items2.slice(0, idx2), ...items2.slice(idx2 + 3)]
}


let extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

let addKeyVal = (obj, key, val) => {

    let myObj = { ...obj }
    myObj[key] = val;
    return myObj;

}


let removeKey = (obj, key) => {
    let obj1 = { ...obj }
    delete obj1[key]
    return obj1;

}

let combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}



let update = (obj, key, val) => {

    let myObj = { ...obj }
    myObj[key] = val;
    return myObj;

}





