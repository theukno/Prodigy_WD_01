const menubtn = document.getElementById("menubtn");
    const loginForm = document.getElementById("loginForm");

    loginButton.addEventListener("click", function () {
      // Toggle the display of the login form
      if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block";
      } else {
        loginForm.style.display = "none";
      }
    });
