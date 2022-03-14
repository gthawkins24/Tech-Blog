async function editPost(event) {
  event.preventDefault();

const title = document.querySelector('#title').value.trim();
const post_content = document.querySelector('#post-content-edit').value.trim();
const postID = document.querySelector('#postID').value.trim();

if (title && content) {
    const response = await fetch(`/api/posts/${postID}`, {
      method: 'put',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

async function deletePost(event) {
  event.preventDefault();

const post_id = document.querySelector('#postID').value.trim();

  if (title && content) {
      const response = await fetch(`/api/posts/${postID}`, {
        method: 'delete',
        body: JSON.stringify({
          post_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}