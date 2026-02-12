const btn = document.querySelector('button');

/*setTimeout(() => {

btn.style.transform = 'translateX(100px)';
setTimeout(() => {

btn.style.transform = 'translateX(200px)';


}, 2000);


}, 2000);*/

function movex(element, amount, delay, callback) {

    setTimeout(() => {
        element.style.transform = `translateX(${amount}px)`
    }, delay);
}
movex(btn, 600, 2000, () => {
    movex(btn, 100, 2000, () => {
        movex(btn, 200, 2000);
    })
});