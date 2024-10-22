
pages = 4

function pageSwitch(page) {
    for (i = 1; i <= pages; i++) {
        document.getElementById(`page_${i}`).style.display = "none";
        document.getElementById(`page_switch_${i}`).classList.remove("navbar-active");
    }
    
    document.getElementById(`page_${page}`).style.display = "flex";
    document.getElementById(`page_switch_${page}`).classList.add("navbar-active");
}