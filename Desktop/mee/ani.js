const btn = document.querySelector('button');

/*setTimeout(() => {

btn.style.transform = 'translateX(100px)';
setTimeout(() => {

btn.style.transform = 'translateX(200px)';


}, 2000);


}, 2000);*/

function movex(element, amount, delay, onsucces, onfailure) {
    const bodyboundary = document.body.clientWidth;
    const elright = element.getBoundingClientRect().right;
    const elleft = element.getBoundingClientRect().left;
    const elwidth = element.offsetWidth;

    if (elright + amount > bodyboundary) {

        onfailure
    } else {
        setTimeout(() => {
            element.style.transform = `translateX(${amount+elleft}px)`
            onsuccess();
        }, delay);
    }
}
//movex(btn, 100, 1000, () => {
//movex(btn, 100, 1000, () => {
//movex(btn, 100, 1000, () => {h
//movex(btn, 1000, 1000);



//});
//});
//});
movex(btn, 100, 1000, () => {}, () => {
    alert('cant move');
});