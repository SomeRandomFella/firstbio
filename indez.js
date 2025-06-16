const themeBtn = document.getElementById("theme-btn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const rizzy = document.querySelector(".aura");
const hm23 = document.querySelector(".rig");
let count = 0;
let sexymsg = "hi im sexy plankton 👅 do /commands";
let fuckbro = "";
let html2 = "";
let use = "speak english lil bro";
const now = new Date();
const centralTime = now.toLocaleTimeString("en-US", {
  timeZone: "America/Chicago",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});
const urls = [
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
  "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg",
  "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg",
  "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg",
];
const audio = new Audio("hm.mp3");
audio.play();
audio.volume = 0.2;

function createSnowflakes() {
  const snowflakesContainer = document.querySelector(".snowflakes");
  const snowflakeSymbols = ["❄", "❅", "❆", "✻", "✼", "❇", "✦"];

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML =
      snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    const duration = Math.random() * 5 + 4;
    snowflake.style.animationDuration = duration + "s";
    snowflake.style.animationDelay = Math.random() * 2 + "s";

    snowflake.addEventListener("animationend", () => {
      snowflake.classList.add("landed");
      snowflake.style.bottom = "0px";
      snowflake.style.top = "auto";
    });

    snowflakesContainer.appendChild(snowflake);
  }
}

createSnowflakes();

setTimeout(() => {
  if (count === 0) {
    html2 = `
      <div class="bot-response">
        <p class="bot-label">sexyplankton</p>
        <div class="bot-message">${sexymsg}</div>
      </div>
    `;
  } else {
    html2 = `
      <div class="bot-response">
        <div class="bot-message">${sexymsg}</div>
      </div>
    `;
  }
  fuckbro += html2;
  document.querySelector(".message-holder").innerHTML = fuckbro;
}, 500);

rizzy.addEventListener("keydown", (event) => {
  const rizle = rizzy.value;

  if (event.key === "Enter") {
    if (rizle.length < 60) {
      const html = `<div class="message">${rizle}</div>`;
      document.querySelector(".message-holder").innerHTML += html;

      switch (rizle) {
        case "/commands":
          use = `
            <strong>All commands:</strong><br>
            <ul style="margin: 5px 0 0 15px; padding: 0;">
              <li>/socials - shows my socials</li>
              <li>/commands - shows all commands</li>
              <li>/languages - programming languages I know</li>
              <li>/who - who I am</li>
              <li>/cat - sends a random cat gif</li>
              <li>/clear - clear the chat</li>
              <li>/time - shows what time it is for me</li>
              <li>/mute - to mute the music</li>
              <li>/unmute - unmute the music</li>
            </ul>
                `;
          break;

        case "/languages":
          use = `ik html, css and js and im learning node.js rn`;
          break;
        case "/who":
          use = "i am THE sexy plankton";
          break;
        case "/cat":
          const randomUrl = urls[Math.floor(Math.random() * urls.length)];
          use = `
          <div style="margin-top: 10px;">
            <img src="${randomUrl}" alt="cat" style="max-width: 100%; border-radius: 8px;">
          </div>`;
          break;
        case "/clear":
          document.querySelector(".message-holder").innerHTML = "";
          use = "so much more room now";
          break;
        case "/time":
          use = `it is ${centralTime} for me rn`;
          break;
        case "/socials":
          use = `my socials: <br><a href="https://discord.com/users/1148273727272914945" target='_blank'>Discord</a>  <a href="https://github.com/SomeRandomFella" target='_blank'>Github</a></br>`;
          break;
        case "/mute":
          audio.pause();
          use = "ok paused it sir";
          break;
        case "/unmute":
          audio.play();
          use = "alr we back";
          break;
      }

      const html3 = `<div class="bot-response">
          <p class="bot-label">sexyplankton</p>
          <div class="bot-message">${use}</div>
        </div>`;
      use = "vro what";
      console.log("tried");

      setTimeout(() => {
        document.querySelector(".message-holder").innerHTML += html3;
        document.querySelector(".message-holder").scrollTop =
          document.querySelector(".message-holder").scrollHeight;
      }, 1000);

      rizzy.value = "";
    } else if (rizle.length >= 60) {
      hm23.style.opacity = 1;
      setTimeout(() => {
        hm23.style.opacity = 0;
      }, 2000);
    }
  }
});
