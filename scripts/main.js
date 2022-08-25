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