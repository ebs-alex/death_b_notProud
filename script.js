document.addEventListener('DOMContentLoaded', () => {
    const chapterSelect = document.getElementById('chapterSelect');
    const chapters = document.querySelectorAll('main section');

    chapterSelect.addEventListener('change', () => {
        const selectedChapter = chapterSelect.value;

        chapters.forEach(chapter => {
            if (chapter.id === selectedChapter) {
                chapter.style.display = 'block'; // Ensure the section is displayed
                setTimeout(() => {
                    chapter.classList.add('visible');
                    chapter.classList.remove('hidden');
                }, 10); // Slight delay to ensure the display change takes effect
            } else {
                chapter.classList.remove('visible');
                chapter.classList.add('hidden');
                chapter.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButtons = document.querySelectorAll('.back-to-top-btn');

    backToTopButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});