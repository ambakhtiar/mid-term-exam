function temperatureConverter(f){
    let c;
    c = (f - 32) / 1.8;
    c = c.toFixed(2);
    return c;
}
console.log(temperatureConverter(50));
console.log(temperatureConverter(103));

function countZero(c){
    let cnt = 0;
    for(let i = 0 ; i<c.length; i++){
        if(c[i]=='0'){
            cnt++;
        }else if(c[i]>'1') {
            return "Invalid Input";
        }
    }
    return cnt;
}
let str = "10101";
console.log(countZero(str));
let strr = "10102";
console.log(countZero(strr));