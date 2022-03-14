async function editPost(event) {
  event.preventDefault();

const title = document.querySelector('#title').value.trim();
const post_content = document.querySelector('#post-content-edit').value.trim();
const postID = document.querySelector('#postID').value.trim();

if (title && post_content) {
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

  if (post_id) {
      const response = await fetch(`/api/posts/${post_id}`, {
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

document.querySelector('#edit-post-button').addEventListener('click', editPost);
document.querySelector('#delete-post-button').addEventListener('click', deletePost);