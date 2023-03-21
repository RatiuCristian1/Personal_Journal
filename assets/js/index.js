const viewMoreBtn = document.getElementById('view-more-btn');
const blogPosts = document.querySelectorAll('.blog-post');

viewMoreBtn.addEventListener('click', () => {
  // Show the last two blog post elements when the button is clicked
  for (let i = blogPosts.length - 1; i >= blogPosts.length - 2; i--) {
    blogPosts[i].style.display = 'block';
  }
  // Hide the "View More" button after it is clicked
  viewMoreBtn.style.display = 'none';
});
