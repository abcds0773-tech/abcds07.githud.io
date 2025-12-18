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
const supportDetailsEn = {
  social: [
    "1. Listen and provide emotional support.",
    "2. Help in social interactions and networking.",
    "3. Assist with community engagement.",
    "4. Offer guidance on social challenges.",
    "5. Connect with resources and support groups."
  ],
  religious: [
    "1. Spiritual counseling.",
    "2. Guidance for faith practices.",
    "3. Support for religious events.",
    "4. Connect with faith communities.",
    "5. Advice on moral dilemmas."
  ]
};

const supportDetailsMm = {
  social: [
    "၁။ စိတ်ခံစားမှုအထောက်အကူ ပေးခြင်း။",
    "၂။ လူမှုဆက်ဆံရေးနှင့် networking ကိုကူညီခြင်း။",
    "၃။ အသိုင်းအဝိုင်း လှုပ်ရှားမှုများတွင် အကူအညီပေးခြင်း။",
    "၄။ လူမှုဆိုင်ရာ အခက်အခဲများအတွက် လမ်းညွှန်ခြင်း။",
    "၅။ အထောက်အကူများနှင့် support group များနှင့်ချိတ်ဆက်ခြင်း။"
  ],
  religious: [
    "၁။ ဘာသာရေးအကြံဉာဏ် ပေးခြင်း။",
    "၂။ ယုံကြည်မှု လေ့ကျင့်မှုများအတွက် လမ်းညွှန်ခြင်း။",
    "၃။ ဘာသာရေး event များအတွက် အထောက်အကူပေးခြင်း။",
    "၄။ ဘာသာရေး အသိုင်းအဝိုင်းနှင့် ချိတ်ဆက်ခြင်း။",
    "၅။ ကျင့်ဝတ်နှင့် ကိုက်ညီမှုအကြံဉာဏ်ပေးခြင်း။"
  ]
};
