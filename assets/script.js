// Language Switch
function switchLang(lang){
  const enElems = ['title-en','subtitle-en','serviceBtn-en','serviceSearch-en'];
  const mmElems = ['title-mm','subtitle-mm','serviceBtn-mm','serviceSearch-mm'];

  if(lang==='en'){
    enElems.forEach(id=>document.getElementById(id).style.display='');
    mmElems.forEach(id=>document.getElementById(id).style.display='none');
  }else{
    enElems.forEach(id=>document.getElementById(id).style.display='none');
    mmElems.forEach(id=>document.getElementById(id).style.display='');
  }
  document.getElementById('detailBox').innerHTML='';
}

// Toggle service search
document.getElementById('serviceBtn-en').addEventListener('click',()=>{
  const box=document.getElementById('serviceSearch-en');
  box.style.display=box.style.display==='none'?'block':'none';
  document.getElementById('detailBox').innerHTML='';
});
document.getElementById('serviceBtn-mm').addEventListener('click',()=>{
  const box=document.getElementById('serviceSearch-mm');
  box.style.display=box.style.display==='none'?'block':'none';
  document.getElementById('detailBox').innerHTML='';
});

// Support Details
const supportDetailsEn = {
  social:["1. Listen and provide emotional support.","2. Help in social interactions and networking.","3. Assist with community engagement.","4. Offer guidance on social challenges.","5. Connect with resources and support groups."],
  religious:["1. Spiritual counseling.","2. Guidance for faith practices.","3. Support for religious events.","4. Connect with faith communities.","5. Advice on moral dilemmas."]
};
const supportDetailsMm = {
  social:["၁။ စိတ်ခံစားမှုအထောက်အကူ ပေးခြင်း။","၂။ လူမှုဆက်ဆံရေးနှင့် networking ကိုကူညီခြင်း။","၃။ အသိုင်းအဝိုင်း လှုပ်ရှားမှုများတွင် အကူအညီပေးခြင်း။","၄။ လူမှုဆိုင်ရာ အခက်အခဲများအတွက် လမ်းညွှန်ခြင်း။","၅။ အထောက်အကူများနှင့် support group များနှင့်ချိတ်ဆက်ခြင်း။"],
  religious:["၁။ ဘာသာရေးအကြံဉာဏ် ပေးခြင်း။","၂။ ယုံကြည်မှု လေ့ကျင့်မှုများအတွက် လမ်းညွှန်ခြင်း။","၃။ ဘာသာရေး event များအတွက် အထောက်အကူပေးခြင်း။","၄။ ဘာသာရေး အသိုင်းအဝိုင်းနှင့် ချိတ်ဆက်ခြင်း။","၅။ ကျင့်ဝတ်နှင့် ကိုက်ညီမှုအကြံဉာဏ်ပေးခြင်း။"]
};

// Click support item → show details
['en','mm'].forEach(lang=>{
  const list=document.getElementById(`supportList-${lang}`).getElementsByClassName('support-item');
  for(let i=0;i<list.length;i++){
    list[i].addEventListener('click',()=>{
      const key=list[i].dataset.detail;
      const details=lang==='en'?supportDetailsEn[key]:supportDetailsMm[key];
      if(details) document.getElementById('detailBox').innerHTML="<ul>"+details.map(d=>`<li>${d}</li>`).join('')+"</ul>";
      else document.getElementById('detailBox').innerHTML='';
    });
  }
});
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

// Sub-questions for each main point (10 per item)
const subQuestionsEn = {
  social: {
    1: [
      {q:"How do I listen effectively?", a:"Maintain eye contact, nod, and avoid interrupting."},
      {q:"How to show empathy?", a:"Use phrases like 'I understand' or 'I can see why you feel that way'."},
      // 8 more ...
    ],
    2: [
      {q:"How to network?", a:"Attend events, introduce yourself, exchange contacts."},
      {q:"How to start conversations?", a:"Ask open-ended questions."},
      // 8 more ...
    ],
    // similarly for 3,4,5 ...
  },
  religious: {
    1: [
      {q:"What is spiritual counseling?", a:"Guidance to cope with emotional or spiritual issues."},
      {q:"How often should one seek it?", a:"Depends on personal need."},
      // 8 more ...
    ],
    // similarly for 2,3,4,5 ...
  }
};

// Show main support details first
const supportList = document.getElementById('supportList-en');
const detailBox = document.getElementById('detailBox');

const items = supportList.getElementsByClassName('support-item');
for(let i=0;i<items.length;i++){
  items[i].addEventListener('click',()=>{
    const key = items[i].dataset.detail;
    detailBox.innerHTML = ""; // clear previous content
    supportDetailsEn[key].forEach((item,index)=>{
      const li = document.createElement('li');
      li.textContent = item;
      li.style.cursor = "pointer";
      li.style.marginBottom = "5px";
      
      // On click → show sub-questions
      li.addEventListener('click', ()=>{
        const subList = document.createElement('ul');
        subList.style.marginLeft = "20px";
        subQuestionsEn[key][index+1].forEach(sq=>{
          const subLi = document.createElement('li');
          subLi.innerHTML = `<b>Q:</b> ${sq.q} <br> <b>A:</b> ${sq.a}`;
          subLi.style.marginBottom="5px";
          subList.appendChild(subLi);
        });
        // Remove previous subList if exists
        const existing = li.querySelector('ul');
        if(existing) li.removeChild(existing);
        else li.appendChild(subList);
      });

      detailBox.appendChild(li);
    });
  });
        }
