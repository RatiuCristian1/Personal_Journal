const viewMoreBtn = document.getElementById('view-more-btn');
const blogPosts = document.querySelectorAll('.blog-post');

    viewMoreBtn.addEventListener('click', () => {
        for (let i = blogPosts.length - 1; i >= blogPosts.length - 2; i--) {
            blogPosts[i].style.display = 'block';
        }
        viewMoreBtn.style.display = 'none';
    });