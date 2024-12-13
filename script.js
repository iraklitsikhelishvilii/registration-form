let form = document.getElementById("form");

let password_input_box = document.getElementById("password_input_box");
let password_input = document.getElementById("password_input");
let password_validation = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
let img1 = document.getElementById("img1");
let error_p_password = document.getElementById("error_p_password");

let email_input_box = document.getElementById("email_input_box");
let email_input = document.getElementById("email_input");
let email_validation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let img2 = document.getElementById("img2");
let error_p_email = document.getElementById("error_p_email");

let name_input_box = document.getElementById("name_input_box");
let name_input = document.getElementById("name_input");
let img3 = document.getElementById("img3");
let error_p_name = document.getElementById("error_p_name");

let last_name_input_box = document.getElementById("last_name_input_box");
let last_name_input = document.getElementById("last_name_input");
let img4 = document.getElementById("img4");
let error_p_last_name = document.getElementById("error_p_last_name");

function SaveInfo() {
  let name = name_input.value;
  let last_name = last_name_input.value;
  let email = email_input.value;
  let password = password_input.value;
  localStorage.setItem("name", name);
  localStorage.setItem("last_name", last_name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!password_validation.test(password_input.value)) {
    img1.style.display = "flex";
    password_input_box.style.border = "2px solid #FF7979";
    error_p_password.style.display = "flex";
  } else {
    img1.style.display = "none";
    error_p_password.style.display = "none";
    password_input_box.style.border = "1px solid #5e54a4";
  }

  if (!email_validation.test(email_input.value)) {
    img2.style.display = "flex";
    email_input_box.style.border = "2px solid #FF7979";
    error_p_email.style.display = "flex";
    email_input.setAttribute("placeholder", "email@example/com");
  } else {
    img2.style.display = "none";
    email_input_box.style.border = "1px solid #5e54a4";
    error_p_email.style.display = "none";
    email_input.setAttribute("placeholder", "Email Address");
  }

  if (name_input.value === "" || name_input === Number) {
    img3.style.display = "flex";
    name_input_box.style.border = "2px solid #FF7979";
    error_p_name.style.display = "flex";
  } else {
    img3.style.display = "none";
    error_p_name.style.display = "none";
    name_input_box.style.border = "1px solid #5e54a4";
  }

  if (last_name_input.value === "" || last_name_input === Number) {
    img4.style.display = "flex";
    last_name_input_box.style.border = "2px solid #FF7979";
    error_p_last_name.style.display = "flex";
  } else {
    img4.style.display = "none";
    last_name_input_box.style.border = "1px solid #5e54a4";
    error_p_last_name.style.display = "none";
  }
  SaveInfo();
  if (
    email_validation.test(email_input.value) &&
    password_validation.test(password_input.value) &&
    last_name_input.value != "" &&
    last_name_input != Number &&
    name_input.value != "" &&
    name_input != Number
  ) {
    form.addEventListener("submit", () => {
      location.href = "./second.page/second.html";
    });
  }
});
