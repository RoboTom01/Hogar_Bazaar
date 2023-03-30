const postItemFormHandler = async (event) => {
  console.log(event);  
  event.preventDefault();
  
    const name = document.querySelector('.name').value.trim();
    const description = document.querySelector('.description').value.trim();
    const price = document.querySelector('.price').value.trim();

    if (name && description && price) {
      
      const newitem = {
      name: name,
      description: description,
      price: price,
      picture_url: "gmail.com",
    }
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify(newitem),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setTimeout(function(){
          document.location.replace('/');
        }, 2000)
      } else {
        alert('Failed create post');
      } 
    }
  };

  const postitem = document.getElementById('items');
  if(postitem !== null) {
    postitem.addEventListener('submit', postItemFormHandler);
  }
  