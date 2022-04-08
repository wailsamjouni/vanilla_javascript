const menuIcon = document.querySelector('.nav__menuicon');
const sidebar = document.querySelector('.sidebar');
const bodyContainer = document.querySelector('.body');
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('collapse');
    bodyContainer.classList.toggle('fitbody')
})