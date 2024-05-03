// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Ваш код ..


module.exports = {
    name: document.querySelector("input[name = fio]").value,
    phoneNumber: document.querySelector("input[name=phone]").value,
    dataOfBirth: document.querySelector("input[name=birthday]").value,
    emailAddress:document.querySelector("input[name=email]").value,
};
