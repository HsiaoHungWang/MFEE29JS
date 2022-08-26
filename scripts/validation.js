function checkEmpty(item) {
    let data = item.trim();
    let isValid = true;
    if (data === "" || data.length === 0) {
        isValid = false;
    }
    return isValid;
}