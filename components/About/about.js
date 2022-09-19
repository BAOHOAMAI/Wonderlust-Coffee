
const container = document.querySelector('.about-history');
const list = document.querySelector('.history-list');

let isPressedDown = false;
let cursorXSpace;

container.addEventListener('mousedown', (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - list.offsetLeft;
    container.style.cursor = 'grabbing';
});

container.addEventListener('mouseup', () => {
    container.style.cursor = 'grab';
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
        list.style.left = 0 ;
    } else if (list_rect.right < container_rect.right) {
        list.style.left = `-${list_rect.width - container_rect.width}px`;
    }
    console.log(list_rect.right);
    console.log(container_rect.right);
}

