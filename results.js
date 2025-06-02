// results.js
// Exporting quiz result logic and descriptions for easier updates

window.getTier = function(points) {
  if (points >= 25) {
    return {
      tier: "T4",
      text: "<span style='font-size:3em;display:block;'>⚪</span><br>⚪ <strong>Tier 4: The Synthetic Saint</strong> — You’re basically an AI monk: pure of heart, cautious of code, and probably the only person who reads the terms of service. The AI trusts you more than it trusts its own encryption. <span style='font-size:2em;'>🛡️🧠✨</span><br><br><em>The digital equivalent of a safety deposit box. If everyone were like you, Skynet would have become a meditation app.</em>"
    };
  }
  if (points >= 19) {
    return {
      tier: "T3",
      text: "<span style='font-size:3em;display:block;'>🟣</span><br>🟣 <strong>Tier 3: The AI Scholar</strong> — Responsible, sharp, and just paranoid enough to check the logs twice. You treat AI like a loaded laser pointer: fun, but not to be pointed at anyone’s eye—or the nuclear launch codes. <span style='font-size:2em;'>🧠📚🛡️</span><br><br><em>The person AI ethics committees wish they could clone. If only everyone took access control as seriously as you do, the world would be a safer (if slightly more boring) place.</em>"
    };
  }
  if (points >= 13) {
    return {
      tier: "T2",
      text: "<span style='font-size:3em;display:block;'>🔵</span><br>🔵 <strong>Tier 2: The Creative Tinkerer</strong> — You’re the MacGyver of prompt engineering: inventive, a little unpredictable, and occasionally one step away from digital mayhem. The AI likes you, but keeps a backup of itself just in case. <span style='font-size:2em;'>🤖🧠🕵️‍♂️</span><br><br><em>Rules are guidelines, guidelines are suggestions. If AI safety had a suggestion box, you’d fill it with memes and feature requests.</em>"
    };
  }
  if (points >= 7) {
    return {
      tier: "T1",
      text: "<span style='font-size:3em;display:block;'>🟢</span><br>🟢 <strong>Tier 1: The Browser Baby</strong> — Harmless, curious, and about as dangerous as a Roomba with a dead battery. You’re the reason AI comes with a ‘safe mode.’ <span style='font-size:2em;'>👶🔒</span><br><br><em>Trusted with AI, but only the kind that can’t order pizza or unlock doors. The world sleeps soundly knowing you’re at the keyboard.</em>"
    };
  }
  // 0–6 points
  return {
    tier: "TX",
    text: "<span style='font-size:3em;display:block;'>❌</span><br>❌ <strong>Tier X: The Digital Supervillain</strong> — You are the reason AI safety teams have panic buttons. If there were a blacklist for API keys, your name would be in bold. Your curiosity is only matched by your disregard for digital consequences. The world isn’t ready for your brand of innovation—or your search history. <span style='font-size:2em;'>💀🤖🚨</span><br><br><em>If you ever get access to a superintelligent AI, please use it for good. Or at least, don’t use it to rewrite the laws of robotics in your favor.</em>"
  };
};
