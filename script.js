document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Dziękujemy za zapisanie się do newslettera!');
                this.reset();
            }
        });
    });

    // Comment form
    const commentForm = document.querySelector('.comment-form form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const comment = this.querySelector('textarea').value;
            if (name && email && comment) {
                alert('Dziękujemy za dodanie komentarza! Oczekuje on na moderację.');
                this.reset();
            } else {
                alert('Proszę wypełnić wszystkie pola.');
            }
        });
    }

    // Like buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const countText = this.textContent.trim();
            const count = parseInt(countText) || 0;
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.innerHTML = '<i class="fas fa-thumbs-up"></i> ' + (count + 1);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.innerHTML = '<i class="far fa-thumbs-up"></i> ' + (count - 1);
            }
        });
    });

    // Reply buttons
    const replyButtons = document.querySelectorAll('.reply-btn');
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const comment = this.closest('.comment');
            const commentAuthor = comment.querySelector('.comment-author').textContent;
            const textarea = document.querySelector('.comment-form textarea');
            if (textarea) {
                textarea.value = '@' + commentAuthor + ', ';
                textarea.focus();
            }
        });
    });

    // Search
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = this.querySelector('input').value;
            if (query) {
                alert('Wyniki wyszukiwania dla: "' + query + '"');
            }
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});