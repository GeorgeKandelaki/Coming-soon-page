const input = document.querySelector("input");
const label = document.querySelector("label");
const errImg = document.querySelector(".error-img");
const btn = document.querySelector(".btn");

function ValidateEmail(e) {
    e.preventDefault();
    console.log(input.value);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(mailformat)) {
        label.textContent = "Valid Email";
        label.style.color = "green";
        input.value = "";
        input.style = null;
        errImg.style = null;
        // document.form1.text1.focus();
        return true;
    } else {
        label.textContent = "Please provide a valid email!";
        input.style.outline = "solid 1px  hsl(0, 93%, 68%)";
        input.value = "";
        errImg.style.display = "block";
        // document.form1.text1.focus();
        return false;
    }
}

btn.addEventListener("click", ValidateEmail);
