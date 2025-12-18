// -----------------------
// Language Switch
// -----------------------
function switchLang(lang) {
  const enElems = ['title-en','subtitle-en','serviceBtn-en','serviceSearch-en'];
  const mmElems = ['title-mm','subtitle-mm','serviceBtn-mm','serviceSearch-mm'];

  if(lang==='en'){
    enElems.forEach(id => document.getElementById(id).style.display='');
    mmElems.forEach(id => document.getElementById(id).style.display='none');
  } else {
    enElems.forEach(id => document.getElementById(id).style.display='none');
    mmElems.forEach(id => document.getElementById(id).style.display='');
  }
  document.getElementById('detailBox').innerHTML = '';
}

// -----------------------
// Toggle Service Search
// -----------------------
document.getElementById('serviceBtn-en').addEventListener('click', () => {
  const box = document.getElementById('serviceSearch-en');
  box.style.display = box.style.display==='none' ? 'block' : 'none';
  document.getElementById('detailBox').innerHTML = '';
});

document.getElementById('serviceBtn-mm').addEventListener('click', () => {
  const box = document.getElementById('serviceSearch-mm');
  box.style.display = box.style.display==='none' ? 'block' : 'none';
  document.getElementById('detailBox').innerHTML = '';
});

// -----------------------
// Main Support Details
// -----------------------
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
    "၁။ စိတ်ခံစားမှုအထောက်အကူပေးခြင်း။",
    "၂။ လူမှုဆက်ဆံရေးနှင့် networking ကူညီခြင်း။",
    "၃။ အသိုင်းအဝိုင်း လှုပ်ရှားမှုများတွင် ကူညီခြင်း။",
    "၄။ လူမှုဆိုင်ရာ အခက်အခဲများအတွက် လမ်းညွှန်ခြင်း။",
    "၅။ အထောက်အကူများနှင့် support group များနှင့် ချိတ်ဆက်ခြင်း။"
  ],
  religious: [
    "၁။ ဘာသာရေးအကြံပေးခြင်း။",
    "၂။ ယုံကြည်မှု လေ့ကျင့်မှုများအတွက် လမ်းညွှန်ခြင်း။",
    "၃။ ဘာသာရေး အခမ်းအနားများအတွက် အထောက်အကူပေးခြင်း။",
    "၄။ ဘာသာရေး အသိုင်းအဝိုင်းနှင့် ချိတ်ဆက်ခြင်း။",
    "၅။ ကျင့်ဝတ်နှင့် ကိုက်ညီမှုအကြံဉာဏ်ပေးခြင်း။"
  ]
};

// -----------------------
// Sub-Questions (Example 10 per main point)
// -----------------------
const subQuestionsEn = {
  social: {
    1: [
      {q:"How do I listen effectively?", a:"Maintain eye contact, nod, and avoid interrupting."},
      {q:"How to show empathy?", a:"Use phrases like 'I understand' or 'I can see why you feel that way'."},
      {q:"How to support someone in crisis?", a:"Offer calm presence and listen without judgment."},
      {q:"How often should I check in?", a:"Regularly, based on their comfort level."},
      {q:"How to respect boundaries?", a:"Ask permission before giving advice or touching."},
      {q:"How to avoid giving unwanted advice?", a:"Focus on listening and reflecting their feelings."},
      {q:"How to encourage openness?", a:"Ask open-ended questions gently."},
      {q:"How to manage emotional fatigue?", a:"Take breaks and practice self-care."},
      {q:"How to show support without words?", a:"Offer gestures like a smile or nod."},
      {q:"How to involve others?", a:"Connect them to resources or supportive community."}
    ]
    // similarly, add 10 Q&A for social 2–5, religious 1–5
  }
};

const subQuestionsMm = {
  social: {
    1: [
      {q:"မည်သို့ထိရောက်စွာနားထောင်ရမည်နည်း?", a:"မျက်လုံးကိုစူးစိုက်စောင့်ကြည့်၊ ခေါင်းထိုး၊ ချို့တဲ့မလုပ်ရန်။"},
      {q:"ဘယ်လိုသနားကြင်နာမှုပြသရမည်နည်း?", a:"'သင်၏ခံစားချက်ကိုနားလည်သည်' ဟုပြောပါ။"},
      {q:"အရေးပေါ်အခြေအနေတွင် မည်သို့ကူညီရမည်နည်း?", a:"အေးဆေးစွာနားထောင်ပါ၊ ဆုံးဖြတ်ချက်မပေးပါ။"},
      {q:"ဘယ်လောက်အကြိမ် check in လုပ်သင့်သလဲ?", a:"သူတို့ရဲ့အဆင်သင့်အရ လေ့လာပါ။"},
      {q:"အနားယူမှုကိုမည်သို့လေးစားရမည်နည်း?", a:"အကြံပေးခြင်းမပြောမီ ခွင့်မေးပါ။"},
      {q:"မလိုအပ်သောအကြံပေးမှုမပေးဘဲ မည်သို့ကူညီရမည်နည်း?", a:"နားထောင်ခြင်းအပေါ် အာရုံစိုက်ပါ။"},
      {q:"ဖွင့်လှစ်မှုကို မည်သို့အားပေးရမည်နည်း?", a:"သက်တမ်းမရွေး စကားမေးပါ။"},
      {q:"စိတ်ခံစားမှု ပင်ပန်းမှုကို မည်သို့စီမံရမည်နည်း?", a:"အနားယူခြင်းနှင့် self-care လေ့ကျင့်ပါ။"},
      {q:"စကားမပြောဘဲ မည်သို့ကူညီရမည်နည်း?", a:"ပြုံးခြင်း သို့မဟုတ် ခေါင်းထိုးခြင်း လုပ်ပါ။"},
      {q:"အခြားသူများကို မည်သို့ပါဝင်စေမည်နည်း?", a:"resource သို့ support community နဲ့ချိတ်ဆက်ပါ။"}
    ]
    // similarly, add 10 Q&A for social 2–5, religious 1–5
  }
};

// -----------------------
// Click Support Item → Show Details & Sub-Questions
// -----------------------
['en','mm'].forEach(lang=>{
  const list = document.getElementById(`supportList-${lang}`).getElementsByClassName('support-item');
  const isEn = lang==='en';
  const detailsObj = isEn ? supportDetailsEn : supportDetailsMm;
  const subObj = isEn ? subQuestionsEn : subQuestionsMm;

  for(let i=0;i<list.length;i++){
    list[i].addEventListener('click',()=>{
      const key = list[i].dataset.detail;
      const details = detailsObj[key];
      const detailBox = document.getElementById('detailBox');
      detailBox.innerHTML = "";

      details.forEach((item,index)=>{
        const li = document.createElement('li');
        li.textContent = item;
        li.style.cursor = "pointer";
        li.style.marginBottom = "5px";

        li.addEventListener('click', ()=>{
          const subList = document.createElement('ul');
          subList.style.marginLeft = "20px";

          if(subObj[key] && subObj[key][index+1]){
            subObj[key][index+1].forEach(sq=>{
              const subLi = document.createElement('li');
              subLi.innerHTML = `<b>Q:</b> ${sq.q} <br> <b>A:</b> ${sq.a}`;
              subLi.style.marginBottom="5px";
              subList.appendChild(subLi);
            });
          }

          const existing = li.querySelector('ul');
          if(existing) li.removeChild(existing);
          else li.appendChild(subList);
        });

        detailBox.appendChild(li);
      });
    });
  }
});
