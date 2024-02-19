document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.delete-button').forEach((button) => {
      button.addEventListener('click', async () => {
        const postId = button.dataset.postId;
  
        try {
          const response = await fetch(`/api/posts/${postId}`, {
            method: 'POST',
          });
  
          if (response.ok) {
            button.closest('.blog-post').remove();
          }
        } catch (error) {
          console.error(error);
        }
      });
    });
  });
  