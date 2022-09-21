// Image Draggable Slider

const container = document.querySelector('.about-history');
const list = document.querySelector('.history-list');

let isPressedDown = false;
let cursorXSpace;

container.addEventListener('mousedown', (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - list.offsetLeft;
    console.log(list.offsetLeft);
});

window.addEventListener('mouseup', () => {
    isPressedDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    list.style.left = `${e.offsetX - cursorXSpace}px`;
    boundList();
});

function boundList() {
    const container_rect = container.getBoundingClientRect();
    const list_rect = list.getBoundingClientRect();

    if (parseInt(list.style.left) > 0) {
        list.style.left = '0px' ;
    } else if (list_rect.right < container_rect.right) {
        list.style.left = `-${list_rect.width - container_rect.width}px`;
    } 
}


//  Drag MouseMove 
let mouseCursor = document.querySelector('.cursor');
container.addEventListener('mousemove' , cursor);

function cursor(e) {
    container.style.cursor = 'none';
    mouseCursor.style.display = 'block';
    mouseCursor.style.top = e.offsetY + 'px';
    mouseCursor.style.left = e.offsetX + 'px';
}

container.addEventListener('mouseleave', (e) => {
    mouseCursor.style.display = 'none'

})