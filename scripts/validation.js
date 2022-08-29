function checkEmpty(item) {
    let data = item.trim();
    let isValid = true;
    if (data === "" || data.length === 0) {
        isValid = false;
    }
    return isValid;
}
//mail="abcd"  4 0-3
function checkMail(mail) {
    let isValid = true;
    if (!checkEmpty(mail)) {
        isValid = false;
    } else if (mail.indexOf("@") === -1 || mail.indexOf("@") === 0 || mail.indexOf("@") !== mail.lastIndexOf("@") || mail.indexOf("@") === mail.length - 1) {
        isValid = false;
    } else if (mail.indexOf(".") === -1 || mail.indexOf(".") === 0 || mail.indexOf(".") === mail.length - 1) {
        isValid = false;
    }
    return isValid;
}

function checkMailByRegExp(mail) {


}