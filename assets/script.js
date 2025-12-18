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
<section id="services">
  <button id="serviceBtn-en">Services</button>
  <button id="serviceBtn-mm" style="display:none;">ဝန်ဆောင်မှုများ</button>

  <div id="serviceSearch-en" style="display:none; margin-top:15px; max-width:400px;">
    <input type="text" id="searchInput-en" placeholder="What do you need help with?" />
    <ul id="supportList-en">
      <li class="support-item" data-detail="social">Social Support</li>
      <li class="support-item" data-detail="religious">Religious Guidance</li>
    </ul>
  </div>

  <div id="serviceSearch-mm" style="display:none; margin-top:15px; max-width:400px;">
    <input type="text" id="searchInput-mm" placeholder="သင့်လိုအပ်ချက် အကြောင်း ရှာပါ" />
    <ul id="supportList-mm">
      <li class="support-item" data-detail="social">လူမှုအထောက်အကူ</li>
      <li class="support-item" data-detail="religious">ဘာသာရေး လမ်းညွှန်မှု</li>
    </ul>
  </div>

  <div id="detailBox" style="margin-top:15px; max-width:400px;"></div>
</section>
