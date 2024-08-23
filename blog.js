document.querySelectorAll('.blog-post-item a').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Get data from the clicked blog item
      const title = this.getAttribute('data-title');
      const content = this.getAttribute('data-content');
      const imgSrc = this.getAttribute('data-img');
  
      // Populate the modal with this data
      document.getElementById('modal-blog-title').textContent = title;
      document.getElementById('modal-blog-content').textContent = content;
      document.getElementById('modal-blog-img').setAttribute('src', imgSrc);
      document.getElementById('modal-blog-img').setAttribute('alt', title);
  
      // Show the modal
      document.getElementById('blog-modal').classList.add('active');
    });
  });
  
  // Close the modal
  document.getElementById('close-blog-modal').addEventListener('click', function() {
    document.getElementById('blog-modal').classList.remove('active');
  });
  
  // Close the modal when clicking outside the modal content
  document.getElementById('blog-overlay').addEventListener('click', function() {
    document.getElementById('blog-modal').classList.remove('active');
  });
  
  