// ЗАВДАННЯ:

// 1. Попросити користувача ввести послідовно два числа через prompt (дві операції).
// (Перетворення на Number зробити явним - це ще по одному кроку на кожне число)

// Якщо сумма цих двох чисел ділиться на 5 - вивести alert, що сума кратна 5
// Інакше - вивести, що сума не кратна 5
// (одна перевірка на if, і гілка else, якщо ні)

const input1 = prompt("Enter first number:");
const input2 = prompt("Enter second number:");
const num1 = Number(input1);
const num2 = Number(input2);
const sum = num1 + num2;
if (sum % 5 === 0) {
  alert("The sum is multiple of 5");
} else {
  alert("The sum is not multiple of 5");
}

// 2. Написати функцію, яка виводить промптом "меню" у вигляді
//      "1 - Чай
//       2 - Кава
//      3 - Сік
//      4 - Вода"
// (перенос рядка у модалці можна зробити за допомогою "\n")
// і очікує від користувача цифру, що відповідає напою. При виборі чогось доступного - вивести алерт на кшталт
// "Ви обрали сік" або "Ви обрали воду" (залежно від того, що там користувач обрав). Якщо введено щось не те - вивести "Такого напою у нас нема"
const menu = Number(
  prompt("Choose an option: \n1 - Tea\n2 - Coffee\n3 - Juice\n4 - Water")
);
if (menu === 1) {
  alert("You chose Tea");
} else if (menu === 2) {
  alert("You chose Coffee");
} else if (menu === 3) {
  alert("You chose Juice");
} else if (menu === 4) {
  alert("You chose Water");
} else {
  alert("Option is not available");
}

// 3. Користувач вводить суму покупки.
// Обчислити та вивести остаточну суму покупки з урахуванням знижки.
// Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн.
const purchaseAmount = Number(prompt("Enter the purchase amount:"));
if (purchaseAmount >= 500 && purchaseAmount <= 800) {
  const Discount = (purchaseAmount * 3) / 100;
  alert("Final amount with discount: " + (purchaseAmount - Discount) + " UAH");
} else if (purchaseAmount >= 800) {
  const Discount = (purchaseAmount * 5) / 100;
  alert("Final amount with discount: " + (purchaseAmount - Discount) + " UAH");
} else {
  alert("Final amount: " + purchaseAmount + " UAH");
}

// 4. Реалізувати код, який приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку). Виводити в консоль булеве значення.

// Кожне завдання виконати в окремій гілці. По закінченню - злити все на гілку main.
// Код з розв'язанням завдань викласти на GitHub
