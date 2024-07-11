function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Toggle dark mode for top navbar and sidebar individually
    document.querySelectorAll('.top_navbar, .sidebar').forEach(item => {
        item.classList.toggle('dark-mode');
    });
}

function toggleDropdown() {
    document.getElementById('dropdownMenu').classList.toggle('show');
}


window.onclick = function(event) {
    if (!event.target.closest('.profile-icon')) {
        var dropdowns = document.getElementsByClassName('dropdown-menu');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


    