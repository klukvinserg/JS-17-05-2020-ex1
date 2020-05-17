let arr = document.getElementsByTagName("a");

getStyle(arr);

function getStyle(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].text.includes("http://") || arr[i].text.includes("https://")) {
      arr[i].style.borderBottom = "rebeccapurple dashed 1px";
    }
  }
}

function myMouseenter() {
  let str = document.getElementById(event.path[0].firstChild.id);
  if (str.innerHTML.includes("http://") || str.innerHTML.includes("https://")) {
    str.style.color = "blue";
    str.style.borderBottom = "blue solid 1px";
  }
}

function myMouseleave() {
  let str = document.getElementById(event.path[0].firstChild.id);
  if (str.innerHTML.includes("http://") || str.innerHTML.includes("https://")) {
    str.style.color = "rebeccapurple";
    str.style.borderBottom = "rebeccapurple dashed 1px";
  }
}
