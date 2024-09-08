document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const contents = document.querySelectorAll('.content');
    const searchInput = document.getElementById('search');

    // Navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            contents.forEach(content => content.classList.remove('active'));
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Pesquisa em tempo real
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        contents.forEach(content => {
            const text = content.textContent.toLowerCase();
            if (text.includes(query)) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});