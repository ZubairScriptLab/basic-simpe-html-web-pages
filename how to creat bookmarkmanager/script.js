document.addEventListener("DOMContentLoaded", () => {
    const bookmarks = document.querySelectorAll('.bookmark a');
    bookmarks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`You are opening: ${link.textContent}`);
        });
    });
});
