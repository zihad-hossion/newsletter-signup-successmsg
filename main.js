const signHide = document.querySelector(".signUp");
const sucShow = document.querySelector(".successMsg");
const subBtn = document.querySelector("#submit-Btn");
const eMail = document.querySelector("#email");


subBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const preEle = eMail.parentElement;
    const errMsg = preEle.querySelector("small");

    if (isValidEmail(eMail.value) && (eMail.value !== "")) {
        signHide.classList.add("hide");
        sucShow.classList.remove("hide");
    } else {
        eMail.style.color = "hsl(4, 100%, 67%)";
        eMail.style.borderColor = "hsl(4, 100%, 67%)";
        errMsg.innerText = "Valid email required";
    }
})

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}