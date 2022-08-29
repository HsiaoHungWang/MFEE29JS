//溫度轉換
function temperatureConvert(degree, type) {
    let degreeChange = 0;
    if (type === "C") {
        degreeChange = degree * (9 / 5) + 32;
    } else {
        degreeChange = (degree - 32) * (5 / 9);
    }
    return degreeChange;
}

//計算年紀
function calcAge(birthday) {
    let birth = new Date(birthday);
    let today = new Date();
    //365.2425 * 24 * 60 * 60 * 1000
    let age = Math.floor((today - birth) / (365.2425 * 24 * 60 * 60 * 1000));
    return age;
}