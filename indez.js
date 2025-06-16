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

  // why r u reading this shit code

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
      }

      const html3 = `<div class="bot-response">
          <p class="bot-label">sexyplankton</p>
          <div class="bot-message">${use}</div>
        </div>`;
      use = "vro what";
      console.log("tried");

      setTimeout(() => {
        document.querySelector(".message-holder").innerHTML += html3;
      }, 1000);

      rizzy.value = "";
    } else if (rizle.length >= 1200) {
      console.log("NOPE");
      hm23.style.opacity = 1;
      setTimeout(() => {
        hm23.style.opacity = 0;
      }, 2000);
    }
  }
});
