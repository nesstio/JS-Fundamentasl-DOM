// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl



module.exports = {
  firstEl: document.getElementById('list').firstElementChild.textContent,
  lastEl: document.getElementById('list').lastElementChild.textContent,
  secondtEl: document.getElementById('list').children[1].textContent,
  fourthEl: document.getElementById('list').children[3].textContent,
  thirdtEl: document.getElementById('list').children[2].textContent
};
