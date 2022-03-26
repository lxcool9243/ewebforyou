window.addEventListener("load", function () {
  document.addEventListener("click", function (el) {
    const { path = [] } = el;
    const toggleMenu = document.querySelector("span#toggleMenu");
    if (path.indexOf(toggleMenu) > -1) {
      const toggleMenu = document.querySelector("header>div>nav>span>svg");
      if (!toggleMenu) return;
      const menu = document.querySelector("header>div>nav>ul");
      const active = menu.classList.contains("active");
      if (active) {
        menu.classList.remove("active");
        toggleMenu.classList.remove("fa-x");
        toggleMenu.classList.add("fa-bars");
      } else {
        menu.classList.add("active");
        toggleMenu.classList.remove("fa-bars");
        toggleMenu.classList.add("fa-x");
      }
    }
  });
  document.addEventListener("submit", function (el) {
    el.preventDefault();
    const formRes = document.getElementById("formResponse");
    console.log(formRes);
    const failure = `<p class="error">Something went wrong, Please try again later.</p>`;
    const success = `<p class="success">Thank you for your message. We'll contact you shortly.</p>`;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const message = document.getElementById("message");
    fetch("https://apis.ewebforyou.com/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        mobile: mobile.value,
        message: message.value,
      }),
    })
      .then(function (res) {
        formRes.innerHTML = res.ok ? success : failure;
        if (res.ok) {
          name.value = "";
          email.value = "";
          mobile.value = "";
          message.value = "";
        }
      })
      .catch(function () {
        formRes.innerHTML = failure;
      });
  });
});
