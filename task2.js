// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles


function applyStyles() {
    document.getElementById("title").style.backgroundColor="lightgreen";
    document.getElementById("myDiv").children[0].style.fontWeight = "700";
    document.getElementById("myDiv").children[1].style.color = "red";
    document.getElementById("myDiv").children[2].style.textDecoration = "underline";
    document.getElementById("myDiv").children[3].style.fontStyle = "italic";
    document.getElementById("myList").style.listStyle = "none";
    document.getElementById("myList").style.display = "flex";
    document.getElementsByTagName("span")[0].style.display = "none";

}


module.exports = applyStyles;
