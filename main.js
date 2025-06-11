const t = document.getElementById("test");
//const arr = [1,2,3,4]
window.localStorage("1", "jedan");
const storage2 = JSON.stringyify(window.localStorage)
t.innerHTML = storage2



