let registration_btn = document.getElementById("registration_btn");
registration_btn.addEventListener("click", () => {
  location.href = "../index.html";
});

let password_input = document.getElementById("password_input");
let email_input = document.getElementById("email_input");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let Password = localStorage.getItem("password");
  let Email = localStorage.getItem("email");
  let Name = localStorage.getItem("name");
  let LastName = localStorage.getItem("last_name");
  if (password_input.value === Password && email_input.value === Email) {
    alert(`Welcome ${Name} ${LastName}`);
  } else {
    alert("Incorrect email or password. Please try again.");
  }
});
