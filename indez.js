const rizzy = document.querySelector('.aura');
const hm23 = document.querySelector('.rig');
let count = 0;
let sexymsg = 'hi im sexy plankton 👅';
let fuckbro = '';
let html2 = '';

      for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        if (i === 0) {
        html2 = `
          <div class="bot-response">
            <p class="bot-label">sexyplankton</p>
            <div class="bot-message">${sexymsg}</div>
          </div>
        `;
        }
        else {
          html2 = `
          <div class="bot-response">
            <div class="bot-message">${sexymsg}</div>
          </div>
        `;
        }
        count++;
        console.log(count);
        if (count === 1) {
          sexymsg = 'ik html css js learning node rn';
        }
        else if (count === 2) {
          sexymsg = 'my first bio site lmk what i should add/change';
        }
        else {
          sexymsg = `my socials: <br><a href="https://discord.com/users/1148273727272914945" target='_blank'>Discord</a>  <a href="https://github.com/SomeRandomFella" target='_blank'>Github</a></br>`;
        }
        fuckbro += html2;
        document.querySelector('.message-holder').innerHTML = fuckbro;
      }, i * 500);
      }

      
rizzy.addEventListener('keydown', (event) => {
  const rizle = rizzy.value;

// why r u reading this shit code

  if (event.key === 'Enter') {
    if (rizle.length < 32) {
      const html = `<div class="message">${rizle}</div>`;
      document.querySelector('.message-holder').innerHTML += html;

      setTimeout(() => {
        const html3 = `<div class="bot-response">
            <p class="bot-label">sexyplankton</p>
            <div class="bot-message">sybau</div>
          </div>`
        console.log('tried');

        document.querySelector('.message-holder').innerHTML += html3;
      }, 1000);


      rizzy.value = '';
    } else if (rizle.length >= 32) {
      hm23.style.opacity = 1;
      setTimeout(() => {
        hm23.style.opacity = 0;
      }, 2000);
    }
  }
});
