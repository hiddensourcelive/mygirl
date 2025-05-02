document.querySelector('.bodyOfLetter').style.setProperty('--bg-img', "url('./jaanu.jpg')");

async function printLetter() {
    document.getElementById('settings').style.display = 'none';
    await window.print();
    document.getElementById('settings').style.display = 'block';

}

function updateDateTime() {
    const now = new Date();
    document.getElementById('date').textContent = now.toLocaleDateString();
    document.getElementById('time').textContent = now.toLocaleTimeString();
}

updateDateTime();

setInterval(updateDateTime, 1000);

class myLove {
    constructor(name) {
        this.soul = name;
        this.instaLink = `https://instagram.com/${this.soul}`;
    }

    openInsta() {
        return (
            `<a href=${this.instaLink} target="_blank">${this.soul} </a>`
        );
    }

    showLove() {
        return (
            `<p>love you forever, ${this.openInsta()}</p>`
        )
    }
}
const mygirl = new myLove("jnanaviiii");
const letter = document.getElementById('love');
letter.innerHTML = mygirl.showLove();
