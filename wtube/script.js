const menuIcon = document.querySelector('.nav__menuicon');
const sidebar = document.querySelector('.sidebar');
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('collapse');
})