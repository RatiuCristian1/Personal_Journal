const viewMoreBtn = document.getElementById('view-more-btn');
const blogPosts = document.querySelectorAll('.blog-post');

viewMoreBtn.addEventListener('click', () => {
  // Show the last two blog post elements when the button is clicked
  if(blogPosts[0].offsetWidth < 599) {
    for (let i = blogPosts.length - 1; i >= blogPosts.length - 2; i--) {
      blogPosts[i].style.display = 'block';
      blogPosts[i].style.flexDirection = 'row';
      blogPosts[i].style.gap = '40px'
    }
  } else if (blogPosts[0].offsetWidth > 600) {
    for (let i = blogPosts.length - 1; i >= blogPosts.length - 2; i--) {
      blogPosts[i].style.display = 'flex';
      blogPosts[i].style.gap = '40px'
    }
  }
  viewMoreBtn.style.display = 'none';
});


