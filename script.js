// Contact Form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
  this.reset();
});

// Comment Form
document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('commentName').value.trim();
  const comment = document.getElementById('commentText').value.trim();
  const commentList = document.getElementById('commentList');

  if (name && comment) {
    const commentEl = document.createElement('p');
    commentEl.innerHTML = `<strong>${name}</strong>: ${comment}`;
    commentList.appendChild(commentEl);
    this.reset();
  }
});
