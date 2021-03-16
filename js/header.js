/*
https://www.youtube.com/watch?v=VaSr6uixmb0  (slide com javascript)
*/

function addNewClass(elementItem) {
    elementItemActive = document.querySelectorAll("a.active");
    elementItemActive.forEach(element => {
        element.classList.remove('active');
    });
    elementItem.classList.toggle('active');
}