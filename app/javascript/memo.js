function post() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    // console.log("before send");
    XHR.send(formData);
    // console.log("after send");
  });
}

window.addEventListener("turbo:load", post);
