document.addEventListener('DOMContentLoaded', () => {
  const toolsList = document.getElementById('tools-list');
  const searchInput = document.getElementById('search');

  // Fetch tools from the backend
  fetch('http://127.0.0.1:5000/api/tools')
    .then(response => response.json())
    .then(data => {
      displayTools(data);
    });

  // Display tools
  function displayTools(tools) {
    toolsList.innerHTML = '';
    tools.forEach(tool => {
      const toolCard = document.createElement('div');
      toolCard.classList.add('tool-card');
      toolCard.innerHTML = `
        <h2>${tool.name}</h2>
        <p>${tool.description}</p>
        <a href="${tool.link}" target="_blank">Visit Tool</a>
      `;
      toolsList.appendChild(toolCard);
    });
  }

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    fetch('http://127.0.0.1:5000/api/tools')
      .then(response => response.json())
      .then(data => {
        const filteredTools = data.filter(tool =>
          tool.name.toLowerCase().includes(searchTerm) ||
          tool.description.toLowerCase().includes(searchTerm)
        );
        displayTools(filteredTools);
      });
  });
});
