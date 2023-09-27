
const getUserData = require("../task4.js");

test("Отримання даних користувача", () => {
  const { name, phoneNumber, dataOfBirth, emailAddress } = getUserData;

  expect(name).toBe('Name');
  expect(phoneNumber).toBe('+380-00-000-0000');
  expect(dataOfBirth).toBe('2020-02-02');
  expect(emailAddress).toBe('softserve@softserve.com')
});
