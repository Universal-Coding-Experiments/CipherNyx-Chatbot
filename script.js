const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');

const replies = [
  "I’m CipherNyx—what can I help you with today?",
  "Nice question! Here's a short answer: keep it simple and clear.",
  "Great! I can help with more details if you tell me your goal.",
  "I’m here to chat. Ask me anything!",
  "Thanks for sharing—let's keep going." 
];

function appendMessage(type, text) {
  const message = document.createElement('div');
  message.className = `message ${type} rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${type === 'user' ? 'bg-gradient-to-r from-[#f9a826] to-[#f26d35] text-[#111827]' : 'bg-[#1f2548] text-slate-200'}`;
  message.innerText = text;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotReply(userText) {
  const normalized = userText.toLowerCase();
  if (normalized.includes('hello') || normalized.includes('hi')) return 'Hello there! I’m CipherNyx. How can I help?';
  if (normalized.includes('how') && normalized.includes('you')) return 'I’m a demo chatbot UI. I’m doing great!';
  if (normalized.includes('help')) return 'Sure! Ask me something specific and I’ll provide a quick response.';
  return replies[Math.floor(Math.random() * replies.length)];
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  appendMessage('user', text);
  chatInput.value = '';

  setTimeout(() => {
    appendMessage('bot', getBotReply(text));
  }, 300);
});
