const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
const allimages = document.getElementsByTagName('img');
for (let image of allimages) {
    console.log(image.src)
    image.style.borderRadius = '100px';
    image.style.transition = 'transform 0.5s ease-in-out';

}
const meimage = document.querySelector('img');
for (let image of allimages) {

};

function rolldie(num = 6) {
    return Math.floor(Math.random() * num) + 1;
}

function greet(msg = "hello ", person = "ur") {
    console.log(`${msg}   ,${ person }`)
}
const dog = ['bark', 'jack', 'whooh'];
const cat = ['meow', 'minoo'];

const pet = [...cat];