async function addComment(event) {
  event.preventDefault();

const comment_text = document.querySelector('#post-content-edit').value.trim();
const post_id = document.querySelector('#postID').value.trim();

  if (comment_text && post_id) {
      const response = await fetch('/api/comments/', {
        method: 'post',
        body: JSON.stringify({
          comment_text,
          post_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#edit-post-button').addEventListener('click', addComment);