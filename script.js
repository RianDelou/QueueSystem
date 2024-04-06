const user = document.getElementById("username");
const enqueueButton = document.getElementById("push-button");
const dequeueButton = document.getElementById("shift-button");
const printQueue = document.getElementById("queue-screen");

let queue = [];
let aux = 0;

const enqueue = (value) => {
    queue.push(value);
};

const dequeue = () => {
    aux = 0;

    if (queue.length > 0) {
        queue.shift();
        const elementRemove = document.getElementById("elements");
        elementRemove.parentNode.removeChild(elementRemove);
        updateDequeue();
    }
};

const updateEnqueue = () => {
    aux = 0;

    queue.forEach((element) => {   
        aux++;
        if (aux < queue.length) {
            return;
        }
           
        printQueue.innerHTML += `<p class="mirror-filter queue-screen_elements" id="elements"> ${aux}. ${element}</p>`;
    });
};

const updateDequeue = () => {
    aux = 1;
    printQueue.innerHTML = ``;
    queue.forEach((element) => {   
        printQueue.innerHTML += `<p class="mirror-filter queue-screen_elements" id="elements"> ${aux}. ${element}</p>`;
        aux++;
    });
};

enqueueButton.addEventListener("click", () => {
    if (!isNaN(user.value)) {
        return;
    }

    if (queue.includes(user.value)) {
        return;
    }

    enqueue(user.value);
    user.value = "";
    updateEnqueue();
});

dequeueButton.addEventListener("click", () => {
    dequeue();
    updateDequeue();
});
