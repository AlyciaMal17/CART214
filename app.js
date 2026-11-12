const decks = {
  "SEASONS": [
    ["SPRING","Fresh starts, light layers and soft energy.","✿"],
    ["SUMMER","Sun-soaked, effortless and a little playful.","☼"],
    ["FALL / AUTUMN","Layered textures, warm tones and cozy drama.","🍂"],
    ["WINTER","Cold-weather styling with main-character energy.","❄"]
  ],
  "CLOTHING": [
    ["OVERSIZED KNIT","A chunky sweater or relaxed cardigan.","✳"],
    ["CROP TOP","A fitted or playful cropped top.","♡"],
    ["GRAPHIC TEE","A tee with a statement print or message.","✦"],
    ["BUTTON-UP","Style a crisp shirt your own way.","▤"],
    ["WIDE-LEG JEANS","Build around a relaxed denim silhouette.","〰"],
    ["MINI SKIRT","A mini skirt is the starting point.","✧"],
    ["MAXI SKIRT","Go long, fluid or dramatic.","〽"],
    ["CARGO PANTS","Utility details and relaxed proportions.","▦"],
    ["LEATHER PANTS","Give the look a little edge.","◒"],
    ["MINI DRESS","One piece, endless styling possibilities.","♧"],
    ["MAXI DRESS","Make a long silhouette the main event.","♢"],
    ["BODYSUIT","Build your look around a fitted base.","♡"],
    ["LACE BODYSUIT","Mix delicate details with your own twist.","✿"]
  ],
  "SHOES + ACCESSORIES": [
    ["KNEE-HIGH BOOTS","Let the shoes set the tone.","♧"],
    ["STATEMENT SNEAKERS","Comfort, colour and a little attitude.","✦"],
    ["STRAPPY HEELS","A dressier finish with personality.","⌁"],
    ["BALLET FLATS","Soft, sweet or unexpectedly cool.","♡"],
    ["OVERSIZED SUNGLASSES","The finishing touch does the talking.","◉"],
    ["STATEMENT BAG","Build the outfit around one standout bag.","▱"],
    ["GOLD JEWELLERY","Add a little shine and warmth.","✧"],
    ["LAYERED BELTS","Play with shape and styling details.","〰"],
    ["BIG EARRINGS","Make the accessories the main character.","✳"]
  ],
  "COLOUR": [
    ["CHERRY RED","A bold pop that refuses to blend in.","●"],
    ["BABY PINK","Soft, playful and unapologetically pretty.","●"],
    ["CHOCOLATE BROWN","Warm, rich and easy to build around.","●"],
    ["BABY BLUE","Cool, fresh and a little nostalgic.","●"],
    ["BUTTER YELLOW","A sunny shade with a soft edge.","●"],
    ["BURGUNDY + CREAM","A rich contrast with a softer balance.","◐"],
    ["SAGE + BUTTER","Muted green meets a warm pastel.","◐"],
    ["BLACK + SILVER","A sleek palette with a little shine.","◐"],
    ["ORANGE + PINK","A loud colour clash. Make it work.","◐"],
    ["MONOCHROME","One colour family, different textures.","◉"]
  ],
  "AESTHETIC": [
    ["Y2K","Playful nostalgia, statement details and early-2000s energy.","✧"],
    ["COQUETTE","Bows, delicate details and romantic styling.","♡"],
    ["STREETWEAR","Relaxed silhouettes, layers and confidence.","✦"],
    ["VINTAGE","Give your outfit a story and a little history.","❀"],
    ["MINIMALIST","Clean lines, thoughtful details and less noise.","—"],
    ["GRUNGE","A little undone, layered and effortlessly cool.","✖"],
    ["BOHEMIAN","Free-spirited shapes, textures and movement.","☼"],
    ["OLD MONEY","Polished classics and understated styling.","♜"],
    ["SPORTY CHIC","Athletic pieces with a styled-up twist.","◉"],
    ["ROMANTIC","Soft shapes, pretty details and dreamy energy.","✿"]
  ]
};

const categoryOrder = ["SEASONS","CLOTHING","SHOES + ACCESSORIES","COLOUR","AESTHETIC"];
let chosenCount = 2;
let round = 1;
let lastDraw = [];

function showPage(index) {
  document.querySelectorAll(".page").forEach((p, i) => p.classList.toggle("active", i === index));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => showPage(Number(btn.dataset.go))));

document.querySelectorAll(".difficulty").forEach(btn => {
  btn.addEventListener("click", () => {
    chosenCount = Number(btn.dataset.count);
    document.querySelectorAll(".difficulty").forEach(b => b.classList.toggle("selected", b === btn));
  });
});

function drawCards() {
  const shuffled = [...categoryOrder].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, chosenCount);
  lastDraw = selected.map(category => {
    const card = decks[category][Math.floor(Math.random() * decks[category].length)];
    return { category, title: card[0], description: card[1], symbol: card[2] };
  });
  renderCards();
  showPage(4);
}

function renderCards() {
  const container = document.getElementById("drawn-cards");
  container.innerHTML = "";
  document.getElementById("round-number").textContent = String(round).padStart(2, "0");
  document.getElementById("result-subtitle").textContent = `${chosenCount} sections. ${chosenCount} cards. One look only you could make.`;
  lastDraw.forEach((card, i) => {
    const el = document.createElement("article");
    el.className = "prompt-card";
    el.style.animationDelay = `${i * 90}ms`;
    el.innerHTML = `
      <div class="prompt-top"><span>THE STYLE DECK</span><span>0${i + 1}</span></div>
      <div>
        <div class="prompt-symbol">${card.symbol}</div>
        <div class="prompt-title">${card.title}</div>
        <div class="prompt-desc">${card.description}</div>
      </div>
      <div class="prompt-bottom"><span>${card.category}</span><span>YOUR PROMPT ↗</span></div>`;
    container.appendChild(el);
  });
}
document.getElementById("draw-btn").addEventListener("click", () => { round = 1; drawCards(); });
document.getElementById("redraw-btn").addEventListener("click", drawCards);
document.getElementById("new-round-btn").addEventListener("click", () => { round++; drawCards(); });
