
// Напишіть скрипт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()






function applyStyles() {
    const mainTag = document.createElement("main");
    document.getElementsByClassName("create_elements")[0].append(mainTag);
    mainTag.classList.add("mainClass");
    mainTag.classList.add("check");
    mainTag.classList.add("item");

    const divTag = document.createElement("div");
    document.getElementsByClassName("mainClass")[0].append(divTag);
    divTag.id = "myDiv";

    const pTag = document.createElement("p");
    divTag.appendChild(pTag);
    pTag.append("First paragraph");
}



module.exports = applyStyles;
