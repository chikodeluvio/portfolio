const guides = [
  {
    id: 1,
    title: "Severe Bleeding",
    subtitle: "Wound care · Hemorrhage control",
    icon: "🩸",
    category: "urgent",
    badge: "urgent",
    badgeLabel: "Urgent",
    color: "#fff0f0",
    stepColor: "#ffe0e0",
    stepTextColor: "#d63031",
    steps: [
      { text: "<strong>Call 911</strong> immediately if bleeding is severe or won't stop." },
      { text: "<strong>Apply direct pressure</strong> to the wound using a clean cloth, bandage, or clothing." },
      { text: "<strong>Do not remove</strong> the cloth if it becomes soaked — add more on top." },
      { text: "<strong>Elevate the injured area</strong> above heart level if possible." },
      { text: "<strong>Apply a tourniquet</strong> if available and bleeding is life-threatening (limb only)." },
      { text: "<strong>Keep the person warm</strong> and calm while waiting for help." }
    ],
    warning: { type: "danger", icon: "🚨", text: "Do NOT remove an embedded object. Do NOT apply a tourniquet to the neck, chest, or abdomen.", bg: "#fff0f0", color: "#d63031" }
  },
  {
    id: 2,
    title: "Choking (Adult)",
    subtitle: "Airway obstruction · Heimlich maneuver",
    icon: "🫁",
    category: "urgent",
    badge: "urgent",
    badgeLabel: "Urgent",
    color: "#fff0f0",
    stepColor: "#ffe0e0",
    stepTextColor: "#d63031",
    steps: [
      { text: "Ask <strong>'Are you choking?'</strong> — if they can cough or speak, encourage them to keep coughing." },
      { text: "<strong>Call 911</strong> if the person cannot speak, breathe, or is turning blue." },
      { text: "<strong>Give 5 back blows</strong> — lean them forward and strike firmly between shoulder blades." },
      { text: "<strong>Give 5 abdominal thrusts</strong> (Heimlich) — stand behind, arms around waist, thrust upward." },
      { text: "<strong>Alternate 5 back blows and 5 thrusts</strong> until the object is dislodged." },
      { text: "If the person becomes <strong>unconscious, begin CPR</strong> and check mouth before rescue breaths." }
    ],
    warning: { type: "caution", icon: "⚠️", text: "For infants under 1 year, use a different technique — 5 back slaps + 5 chest thrusts. Never do abdominal thrusts on infants.", bg: "#fff8e1", color: "#8a5c00" }
  },
  {
    id: 3,
    title: "Burns",
    subtitle: "Thermal injury · Skin damage",
    icon: "🔥",
    category: "caution",
    badge: "caution",
    badgeLabel: "Caution",
    color: "#fff4f0",
    stepColor: "#ffe8df",
    stepTextColor: "#e17055",
    steps: [
      { text: "<strong>Remove from source</strong> — stop contact with fire, heat, or chemicals immediately." },
      { text: "<strong>Cool the burn</strong> with cool (not cold/icy) running water for 10–20 minutes." },
      { text: "<strong>Remove clothing/jewelry</strong> near the burn — unless stuck to the skin." },
      { text: "<strong>Cover loosely</strong> with a sterile non-stick bandage or cling wrap." },
      { text: "<strong>Do not pop blisters</strong> — they protect against infection." },
      { text: "<strong>Seek medical help</strong> for burns larger than 3 inches, on face/hands/genitals, or deep burns." }
    ],
    warning: { type: "danger", icon: "🚫", text: "Never apply butter, toothpaste, ice, or oil to burns. These can cause further damage and infection.", bg: "#fff0f0", color: "#d63031" }
  },
  {
    id: 4,
    title: "Heart Attack",
    subtitle: "Cardiac emergency · Chest pain",
    icon: "❤️",
    category: "urgent",
    badge: "urgent",
    badgeLabel: "Urgent",
    color: "#fff0f0",
    stepColor: "#ffe0e0",
    stepTextColor: "#d63031",
    steps: [
      { text: "<strong>Call 911 immediately</strong> — do not drive to hospital yourself." },
      { text: "<strong>Have the person sit or lie down</strong> in a comfortable position." },
      { text: "<strong>Loosen tight clothing</strong> around neck and chest." },
      { text: "If conscious and not allergic, give <strong>aspirin (325mg)</strong> to chew — not swallow." },
      { text: "<strong>Stay with the person</strong> and keep them calm until help arrives." },
      { text: "If they become <strong>unresponsive and stop breathing, begin CPR</strong>." }
    ],
    warning: { type: "info", icon: "ℹ️", text: "Heart attack symptoms: chest pain/pressure, pain radiating to arm/jaw/back, shortness of breath, nausea, cold sweat. Women may experience different symptoms.", bg: "#eaf2fb", color: "#2d6a9f" }
  },
  {
    id: 5,
    title: "Fractures & Broken Bones",
    subtitle: "Bone injury · Immobilisation",
    icon: "🦴",
    category: "caution",
    badge: "caution",
    badgeLabel: "Caution",
    color: "#fff4f0",
    stepColor: "#ffe8df",
    stepTextColor: "#e17055",
    steps: [
      { text: "<strong>Keep the person still</strong> — do not attempt to realign the bone." },
      { text: "<strong>Immobilize the area</strong> using a splint (rolled newspaper, board) padded with cloth." },
      { text: "<strong>Apply ice packs</strong> wrapped in cloth to reduce swelling — 20 min on, 20 min off." },
      { text: "<strong>Elevate the injury</strong> if possible without causing pain." },
      { text: "<strong>Treat for shock</strong> if needed — keep warm, calm, lying down." },
      { text: "<strong>Seek medical attention</strong> — all suspected fractures need X-ray confirmation." }
    ],
    warning: { type: "danger", icon: "🚨", text: "Call 911 for spinal injuries — do NOT move the person. Signs: neck/back pain, numbness, inability to move limbs.", bg: "#fff0f0", color: "#d63031" }
  },
  {
    id: 6,
    title: "Allergic Reaction",
    subtitle: "Anaphylaxis · Allergy response",
    icon: "🌿",
    category: "urgent",
    badge: "urgent",
    badgeLabel: "Urgent",
    color: "#fff0f0",
    stepColor: "#ffe0e0",
    stepTextColor: "#d63031",
    steps: [
      { text: "For <strong>severe reactions (anaphylaxis)</strong>, call 911 immediately." },
      { text: "If available, <strong>use epinephrine auto-injector (EpiPen)</strong> — inject into outer thigh." },
      { text: "<strong>Have the person lie down</strong> with legs elevated — unless breathing is difficult." },
      { text: "If breathing difficulty, <strong>help them sit up</strong> slightly." },
      { text: "<strong>Administer a second EpiPen</strong> after 5–15 minutes if no improvement." },
      { text: "Even if improved, <strong>go to the ER</strong> — symptoms can return hours later." }
    ],
    warning: { type: "info", icon: "ℹ️", text: "Anaphylaxis signs: hives, throat swelling, difficulty breathing, rapid pulse, dizziness, vomiting. This is life-threatening — act fast.", bg: "#eaf2fb", color: "#2d6a9f" }
  },
  {
    id: 7,
    title: "Minor Cuts & Wounds",
    subtitle: "Wound care · Bandaging",
    icon: "🩹",
    category: "common",
    badge: "common",
    badgeLabel: "Common",
    color: "#e8f5f3",
    stepColor: "#c8ede8",
    stepTextColor: "#00897b",
    steps: [
      { text: "<strong>Wash your hands</strong> before treating the wound." },
      { text: "<strong>Rinse the wound</strong> under clean running water for several minutes." },
      { text: "<strong>Clean around the wound</strong> with soap — avoid getting soap inside." },
      { text: "<strong>Apply antiseptic</strong> if available, then an antibiotic ointment." },
      { text: "<strong>Cover with a bandage</strong> or sterile gauze and medical tape." },
      { text: "<strong>Change the dressing daily</strong> or when wet/dirty. Watch for signs of infection." }
    ],
    warning: { type: "caution", icon: "⚠️", text: "Seek medical help if: wound is deep/gaping, won't stop bleeding after 10 min, has debris you can't remove, or shows signs of infection (redness, swelling, pus).", bg: "#fff8e1", color: "#8a5c00" }
  },
  {
    id: 8,
    title: "Heatstroke",
    subtitle: "Heat emergency · Hyperthermia",
    icon: "☀️",
    category: "info",
    badge: "info",
    badgeLabel: "Environmental",
    color: "#eaf2fb",
    stepColor: "#c8dff5",
    stepTextColor: "#2d6a9f",
    steps: [
      { text: "<strong>Call 911 immediately</strong> — heatstroke is life-threatening." },
      { text: "<strong>Move to a cool area</strong> — indoors with AC or shade." },
      { text: "<strong>Cool the person rapidly</strong> — cool water on skin, fan, ice packs on neck/armpits/groin." },
      { text: "<strong>Remove excess clothing</strong> to help cool down faster." },
      { text: "If conscious, <strong>give cool water to drink</strong> in small sips — no alcohol or caffeine." },
      { text: "<strong>Monitor temperature</strong> — continue cooling until temperature drops below 101°F / 38.3°C." }
    ],
    warning: { type: "danger", icon: "🚨", text: "Do NOT give fluids to an unconscious person. Signs of heatstroke: body temp above 104°F, confusion, no sweating, rapid pulse, unconsciousness.", bg: "#fff0f0", color: "#d63031" }
  },
  {
    id: 9,
    title: "Nosebleed",
    subtitle: "Epistaxis · Nasal bleeding",
    icon: "👃",
    category: "common",
    badge: "common",
    badgeLabel: "Common",
    color: "#e8f5f3",
    stepColor: "#c8ede8",
    stepTextColor: "#00897b",
    steps: [
      { text: "<strong>Sit upright and lean slightly forward</strong> — not backward (to avoid swallowing blood)." },
      { text: "<strong>Pinch the soft part of the nose</strong> (below the bony bridge) firmly." },
      { text: "<strong>Hold for 10–15 minutes</strong> without releasing — breathe through the mouth." },
      { text: "Apply a <strong>cold compress or ice pack</strong> to the bridge of the nose." },
      { text: "After bleeding stops, <strong>avoid blowing nose</strong> for several hours." },
      { text: "<strong>Seek medical attention</strong> if bleeding doesn't stop after 20–30 minutes." }
    ],
    warning: { type: "info", icon: "ℹ️", text: "Do NOT tilt head back. Do NOT stuff tissue deep into the nostril. Do NOT resume activity immediately after bleeding stops.", bg: "#eaf2fb", color: "#2d6a9f" }
  },
  {
    id: 10,
    title: "Hypothermia",
    subtitle: "Cold exposure · Core temperature loss",
    icon: "❄️",
    category: "info",
    badge: "info",
    badgeLabel: "Environmental",
    color: "#eaf2fb",
    stepColor: "#c8dff5",
    stepTextColor: "#2d6a9f",
    steps: [
      { text: "<strong>Call 911</strong> for severe hypothermia (shivering stopped, confused, unconscious)." },
      { text: "<strong>Move to a warm, dry location</strong> — out of wind and cold." },
      { text: "<strong>Remove wet clothing</strong> gently and replace with dry, warm layers." },
      { text: "<strong>Warm the core first</strong> — blankets on trunk, neck, armpits, and groin (not extremities first)." },
      { text: "If conscious and swallowing, give <strong>warm (not hot) beverages</strong> — no alcohol." },
      { text: "<strong>Handle gently</strong> — rough movement can trigger cardiac arrest in severe cases." }
    ],
    warning: { type: "danger", icon: "🚨", text: "Do NOT rub limbs vigorously or use heating pads/hot water directly. Do NOT give alcohol. Severe hypothermia requires hospital treatment.", bg: "#fff0f0", color: "#d63031" }
  }
];

function getBadgeClass(badge) {
  const map = { urgent: 'badge-urgent', common: 'badge-common', caution: 'badge-caution', info: 'badge-info' };
  return map[badge] || 'badge-common';
}

function renderGuides(list) {
  const grid = document.getElementById('guidesGrid');
  const noResults = document.getElementById('noResults');
  const resultsInfo = document.getElementById('resultsInfo');

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    resultsInfo.textContent = 'No results found';
    return;
  }

  noResults.style.display = 'none';
  resultsInfo.textContent = `Showing ${list.length} guide${list.length !== 1 ? 's' : ''}`;

  grid.innerHTML = list.map(g => `
    <div class="guide-card" data-id="${g.id}">
      <div class="card-header" onclick="toggleCard(${g.id})">
        <div class="card-icon" style="background:${g.color}">${g.icon}</div>
        <div class="card-info">
          <div class="card-title">${g.title}</div>
          <div class="card-subtitle">${g.subtitle}</div>
        </div>
        <span class="card-badge ${getBadgeClass(g.badge)}">${g.badgeLabel}</span>
        <div class="card-toggle">+</div>
      </div>
      <div class="card-body">
        <div class="steps-label">// Steps to follow</div>
        <ol class="steps-list">
          ${g.steps.map((s, i) => `
            <li class="step-item">
              <div class="step-num" style="background:${g.stepColor};color:${g.stepTextColor}">${i+1}</div>
              <div class="step-text">${s.text}</div>
            </li>
          `).join('')}
        </ol>
        ${g.warning ? `
          <div class="warning-box" style="background:${g.warning.bg}">
            <span class="w-icon">${g.warning.icon}</span>
            <p style="color:${g.warning.color}">${g.warning.text}</p>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function toggleCard(id) {
  const card = document.querySelector(`.guide-card[data-id="${id}"]`);
  card.classList.toggle('open');
}

let currentCat = 'all';
let currentSearch = '';

function filterGuides() {
  let filtered = guides;
  if (currentCat !== 'all') {
    filtered = filtered.filter(g => g.category === currentCat);
  }
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.subtitle.toLowerCase().includes(q) ||
      g.steps.some(s => s.text.toLowerCase().includes(q))
    );
    document.getElementById('searchTerm').textContent = currentSearch;
  }
  renderGuides(filtered);
}

document.getElementById('searchInput').addEventListener('input', e => {
  currentSearch = e.target.value;
  filterGuides();
});

document.getElementById('categories').addEventListener('click', e => {
  if (e.target.classList.contains('cat-btn')) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentCat = e.target.dataset.cat;
    filterGuides();
  }
});

renderGuides(guides);