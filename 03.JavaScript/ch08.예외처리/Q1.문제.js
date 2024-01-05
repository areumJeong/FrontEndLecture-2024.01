// 2024-1994 = 30, [이번 년 - 내 나이]인데/ 생일이 안지나면 -1
var todayYear = 2024 , todayMonth = 1, todaydate = 5
function age (myYear, myMonth, myDate){
    let age = todayYear- myYear;
    if(todayMonth < myMonth && todaydate < myDate ){
        age -= 1;
    }else{
        age;
    }
    return age = age;

}
console.log(age(1994,10,6));