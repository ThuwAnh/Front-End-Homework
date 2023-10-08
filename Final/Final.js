function openMenu() {
    document.getElementById("mobiMenu").style.display= "flex";
}
function closeMenu() {
    document.getElementById("mobiMenu").style.display= "none";
}
function toggleMenu() {
    document.getElementById("mobiMenu").classList.toggle("animate__slideOutRight");
    document.getElementById("mobiMenu").classList.toggle("animate__slideInRight");
}