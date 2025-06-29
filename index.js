function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())        // Step 1: Convert API response to JSON
    .then(data => renderBooks(data))          // Step 2: Pass data to rendering function
    .catch(error => console.error("Error fetching books:", error)); // Optional: log any error
}

function renderBooks(books) {
  const main = document.querySelector('main');  // Select the <main> tag in HTML
  books.forEach(book => {
    const h2 = document.createElement('h2');    // Create an <h2> for each book
    h2.innerText = book.name;                   // Set its text to the book name
    main.appendChild(h2);                       // Add it to the page
  });
}

// Run fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);
