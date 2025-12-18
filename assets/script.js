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

// -----------------------
// Sub-Questions (10 per item)
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
    ],
    2: [
      {q:"How to network?", a:"Attend events, introduce yourself, exchange contacts."},
      {q:"How to start conversations?", a:"Ask open-ended questions."},
      {q:"How to maintain connections?", a:"Follow up regularly and show interest."},
      {q:"How to offer value?", a:"Share useful information or help others."},
      {q:"How to build trust?", a:"Be honest, reliable, and respectful."},
      {q:"How to join communities?", a:"Find groups that align with interests or work."},
      {q:"How to overcome shyness?", a:"Prepare topics and start small interactions."},
      {q:"How to use social media?", a:"Connect professionally and politely online."},
      {q:"How to handle rejection?", a:"Stay positive and learn from it."},
      {q:"How to collaborate?", a:"Offer help and participate in group activities."}
    ],
    3: [], 4: [], 5: [] // Similarly add 10 Q&A each
  },
  religious: {
    1: [
      {q:"What is spiritual counseling?", a:"Guidance to cope with emotional or spiritual issues."},
      {q:"How often should one seek it?", a:"Depends on personal need."},
      {q:"Is it confidential?", a:"Yes, private discussions are respected."},
      {q:"Can anyone attend?", a:"Usually anyone seeking guidance."},
      {q:"What topics are covered?", a:"Faith, morality, coping with challenges."},
      {q:"Should I prepare questions?", a:"Yes, it helps make sessions effective."},
      {q:"How long are sessions?", a:"Typically 30-60 minutes, varies by counselor."},
      {q:"Can it replace therapy?", a:"No, it's complementary to mental health care."},
      {q:"Is online counseling possible?", a:"Yes, many provide remote sessions."},
      {q:"How to find a counselor?", a:"Ask your faith community or local resources."}
    ],
    2: [], 3: [], 4: [], 5: [] // Similarly add 10 Q&A each
  }
};

// -----------------------
// Click Support Item → Show Details & Sub-Questions
// -----------------------
['en','mm'].forEach(lang=>{
  const list = document.getElementById(`supportList-${lang}`).getElementsByClassName('support-item');
  const isEn = lang==='en';
  const detailsObj = isEn ? supportDetailsEn : {}; // For Myanmar, define supportDetailsMm similarly
  const subObj = isEn ? subQuestionsEn : {};       // For Myanmar, define subQuestionsMm similarly

  for(let i=0;i<list.length;i++){
    list[i].addEventListener('click',()=>{
      const key = list[i].dataset.detail;
      const details = detailsObj[key];
      detailBox.innerHTML = ""; // Clear previous content

      details.forEach((item,index)=>{
        const li = document.createElement('li');
        li.textContent = item;
        li.style.cursor = "pointer";
        li.style.marginBottom = "5px";

        // On click → show sub-questions
        li.addEventListener('click', ()=>{
          const subList = document.createElement('ul');
          subList.style.marginLeft = "20px";

          if(subObj[key][index+1]){
            subObj[key][index+1].forEach(sq=>{
              const subLi = document.createElement('li');
              subLi.innerHTML = `<b>Q:</b> ${sq.q} <br> <b>A:</b> ${sq.a}`;
              subLi.style.marginBottom="5px";
              subList.appendChild(subLi);
            });
          }

          // Toggle sublist
          const existing = li.querySelector('ul');
          if(existing) li.removeChild(existing);
          else li.appendChild(subList);
        });

        detailBox.appendChild(li);
      });
    });
  }
});
