const failFunc = () => {
  const fail = [...document.getElementsByTagName("tr")]
    .map((n) => n.getElementsByTagName("th")[0])
    .filter((n) => n.style.backgroundColor === "red").length;

  if (fail) {
    document
      .querySelector("nav")
      .getElementsByClassName("badge")[2].style.opacity = 1;
    document.getElementById("fail").innerText = fail;
  } else
    document
      .querySelector("nav")
      .getElementsByClassName("badge")[2].style.opacity = 0;
};
export default failFunc;
