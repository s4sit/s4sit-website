// Guru AI — FAQ Chatbot for S4SIT SOLUTION LLC
const FAQ = [
  {
    keys: ['what', 'service', 'do', 'offer', 'provide', 's4sit'],
    answer: "S4SIT SOLUTION LLC is a full-service digital marketing agency. We: ✅ Set up & manage ad accounts ✅ Build marketing strategies per product/service ✅ Run Facebook, Instagram, TikTok, Google & YouTube ads ✅ Generate sales for your clients ✅ Automate delivery processes ✅ Fund ad accounts globally (currency support) 🌍"
  },
  {
    keys: ['strategy', 'marketing strategy', 'plan', 'planning'],
    answer: "Yes! For each client (or each product/service), we build a custom marketing strategy:\n• Target audience research\n• Competitor analysis\n• Funnel structure\n• Ad format & messaging framework\n• Budget allocation\n• KPI targets\nOne tailored strategy per product — not templates! 🎯"
  },
  {
    keys: ['setup', 'account setup', 'ad account setup', 'business manager', 'pixel'],
    answer: "We handle full ad account setup: ✅ Business Manager creation ✅ Pixel/conversion API installation ✅ Audience & catalog setup ✅ Account health & compliance check. Done right from day one so your campaigns perform from the start. 🛠️"
  },
  {
    keys: ['sales', 'generate', 'leads', 'conversion', 'result'],
    answer: "Sales generation is our core service! We build full-funnel campaigns designed to drive real conversions — not just clicks. Every campaign includes tracking, optimization, and clear sales/lead reporting for your clients. 💰"
  },
  {
    keys: ['automation', 'automate', 'delivery', 'crm', 'workflow', 'follow up'],
    answer: "We set up delivery automation including: 🤖 Lead follow-up sequences, WhatsApp auto-responses, CRM integrations, reporting dashboards, and notification systems — so you deliver results consistently without manual work per client."
  },
  {
    keys: ['tiktok'],
    answer: "Yes! We manage TikTok Ads — creative strategy, spark ads, conversion campaigns, and trend-based targeting. TikTok is one of the fastest-growing ad platforms right now. 🎵"
  },
  {
    keys: ['threads', 'thread'],
    answer: "Yes — we handle Threads marketing and cross-platform social strategy to build brand presence and warm audiences for paid campaigns. 🧵"
  },
  {
    keys: ['platform', 'support', 'meta', 'facebook', 'instagram', 'google', 'youtube', 'whatsapp', 'linkedin', 'tiktok', 'email'],
    answer: "We support: ✅ Meta (Facebook & Instagram) ✅ Google Ads ✅ YouTube Ads ✅ WhatsApp Business Ads ✅ LinkedIn Ads ✅ TikTok Ads ✅ Email Marketing. Not seeing your platform? Just ask — we likely support it!"
  },
  {
    keys: ['payment', 'pay', 'method', 'paypal', 'payoneer', 'wise', 'usdt', 'crypto', 'bitcoin', 'bank', 'wire', 'zelle'],
    answer: "We accept: 💳 PayPal · Payoneer · Wise (TransferWise) · USDT (crypto) · Bank Wire · Zelle. Use whatever is most convenient for your agency — we're flexible!"
  },
  {
    keys: ['fast', 'speed', 'time', 'long', 'quick', 'hour', 'process', 'processing', 'when'],
    answer: "⚡ Same-day processing for most transactions. Once your payment is confirmed, we load your ad account within 1–6 hours. Urgent? Message us on WhatsApp — we prioritize fast turnaround."
  },
  {
    keys: ['minimum', 'minimum amount', 'min', 'least', 'start', 'small'],
    answer: "Minimum load is $100 USD. No hard maximum — agencies regularly do $5,000–$50,000+ per transaction. Contact us for bulk rates and volume discounts! 📦"
  },
  {
    keys: ['safe', 'secure', 'trust', 'scam', 'legit', 'real', 'verified', 'reliable'],
    answer: "100% safe. ✅ Every transaction gets a receipt. We're independently verified on Trustpilot, ScamAdviser, and Clutch. We've served 500+ clients with zero disputes. References from ngital.com and brainyzat.com available on request."
  },
  {
    keys: ['country', 'worldwide', 'global', 'international', 'outside', 'abroad', 'location', 'where'],
    answer: "We serve agencies in 30+ countries! 🌍 Everything is handled online — location doesn't matter. If you run ads anywhere in the world, we can fund them."
  },
  {
    keys: ['fee', 'charge', 'rate', 'cost', 'price', 'commission', 'how much'],
    answer: "Our fees are shared transparently before every transaction — no surprises. Rates depend on payment method, amount, and currency. Message us on WhatsApp for a quick quote: wa.me/17208197366 📊"
  },
  {
    keys: ['start', 'begin', 'how to', 'get started', 'contact', 'reach', 'first step'],
    answer: "Easy! Message us on WhatsApp: +880 1842-868803 or email support@s4sit.com. Tell us your client's business, goal, platform, and budget — we respond within minutes and send a proposal within 24 hours. 🚀"
  },
  {
    keys: ['whatsapp', 'phone', 'number', 'call', 'contact', 'facebook'],
    answer: "📱 WhatsApp (fastest): +880 1842-868803\n📧 Email: support@s4sit.com\n📘 Facebook: facebook.com/profile.php?id=61589403123161\n🕒 24/7 — we reply within minutes!"
  },
  {
    keys: ['refund', 'return', 'cancel', 'back', 'fail'],
    answer: "If an ad account load fails for any reason on our end, we'll refund or retry immediately. We stand behind every transaction. Contact us on WhatsApp to resolve any issues instantly."
  },
  {
    keys: ['client', 'example', 'portfolio', 'who', 'ngital', 'brainyzat'],
    answer: "Our clients include: 🏆 Ngital (ngital.com) 🏆 BrainyZat (brainyzat.com) — plus 500+ agencies across 30+ countries running Meta, Google, YouTube, and more."
  },
  {
    keys: ['us', 'usa', 'colorado', 'llc', 'registered', 'company', 'legal'],
    answer: "Yes! S4SIT SOLUTION LLC is registered in Colorado, USA. US Office: 1618 Weatherby Ln, Pueblo, CO 81008. We also operate from Mirpur DOHS, Dhaka, Bangladesh for timezone-flexible support."
  },
  {
    keys: ['retarget', 'retargeting', 'pixel', 'audience', 'remarketing'],
    answer: "Absolutely! We specialize in retargeting budget funding — keep your pixel warm, your audiences fresh, and your conversion campaigns running continuously. No budget gaps = better ROAS. 🎯"
  },
  {
    keys: ['bulk', 'volume', 'large', 'big', 'discount', 'recurring'],
    answer: "Yes — bulk and recurring clients get preferential rates! If you're funding $2,000+ regularly, message us on WhatsApp to discuss a custom rate agreement. 💼"
  },
  {
    keys: ['hello', 'hi', 'hey', 'salaam', 'salam', 'assalam', 'hola'],
    answer: "Hi there! 👋 I'm Guru — S4SIT's AI assistant. I can answer questions about our ad account funding, payment methods, pricing, and more. What would you like to know?"
  },
  {
    keys: ['thanks', 'thank', 'great', 'perfect', 'awesome', 'good'],
    answer: "You're welcome! 😊 If you need anything else, just ask. Ready to fund your campaigns? Message us on WhatsApp: +1 720-819-7366 or use the contact form above!"
  }
];

const FALLBACK = "I'm not sure about that specific question. 🤔 For the best answer, reach us directly:\n📱 WhatsApp: +1 720-819-7366\n📧 Email: support@s4sit.com\nWe reply within minutes!";

function getAnswer(input) {
  const lower = input.toLowerCase().trim();
  if (!lower) return null;
  let best = null, bestScore = 0;
  for (const item of FAQ) {
    let score = 0;
    for (const key of item.keys) {
      if (lower.includes(key)) score += key.length > 4 ? 2 : 1;
    }
    if (score > bestScore) { bestScore = score; best = item; }
  }
  return bestScore > 0 ? best.answer : FALLBACK;
}

function appendMsg(text, role) {
  const box = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = 'msg ' + role;
  msg.textContent = text;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  appendMsg(text, 'user');
  input.value = '';
  setTimeout(() => {
    const answer = getAnswer(text);
    appendMsg(answer, 'bot');
  }, 350);
}

document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('chatSend');
  const chatInput = document.getElementById('chatInput');
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (chatInput) {
    chatInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendMessage();
    });
  }
});
