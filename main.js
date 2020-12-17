function compare(x,y) {
    if (x==20 || y==20 || x+y<=20) {
        return true
    } else {
        return false
    }
}

console.log(compare(19,40));
console.log(compare(19,1));
console.log(compare(301,20));