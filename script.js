const user = document.getElementById("username");
const enqueueButton = document.getElementById("push-button");
const shiftButton = document.getElementById("shift-button");
const printQueue = document.getElementById("queue");

let queue = [];

const enqueue = (value) => {
    queue.push(value);
}

const dequeue = () => {
    queue.shift();
}

enqueueButton.addEventListener("click", () => {
    enqueue(user.value);
});



