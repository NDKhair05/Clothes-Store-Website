const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const dialog1 = document.getElementById('noti');
const registerMainBtn = document.getElementById('register-main');
const closeDia1 = document.getElementById('closeDia');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

registerMainBtn.addEventListener('click', () => {
        dialog1.showModal();
})



closeDia1.addEventListener('click', () => {
    dialog1.close();
})

