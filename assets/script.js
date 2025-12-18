const serviceBtn = document.getElementById('serviceBtn');
const serviceSearch = document.getElementById('serviceSearch');
const searchInput = document.getElementById('searchInput');
const supportList = document.getElementById('supportList');
const items = supportList.getElementsByTagName('li');

// Toggle search bar
serviceBtn.addEventListener('click', () => {
  serviceSearch.style.display = serviceSearch.style.display === 'none' ? 'block' : 'none';
});

// Filter support items
searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();
    items[i].style.display = text.includes(filter) ? '' : 'none';
  }
});
