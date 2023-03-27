const postItemFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('.name').value.trim();
    const description = document.querySelector('.description').value.trim();
    const price = document.querySelector('.price').value.trim();
  
    if (name && description && price) {
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({ name, description, price }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed create post');
      } 
    }
  };
  
  
  document
    .querySelector('.post-item-form')
    .addEventListener('submit', postItemFormHandler);