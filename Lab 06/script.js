// Lab Task 1
function LabTask1() {
    alert("Lab Task 01");
}

// Lab Task 2
function LabTask2() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    alert("Window height: " + windowHeight + " Window width: " + windowWidth);
}

// Lab Task 3
function LabTask3() {
    var input = document.getElementById("LT3");
    input.addEventListener("keydown", function(event) {
        alert("Key Code:"+ event.keyCode);
    });
}

// Lab Task 4
function LabTask4() {
    const inputElement = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');

            
    const number = parseInt(inputElement.value);

            
    if (number >= 0 && Number.isInteger(number)) {
        resultElement.textContent = `Factorial of ${number} is: ${getFactorial(number)}`;
    } else {
        resultElement.textContent = 'Please enter a non-negative integer.';
    }
}

function getFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * getFactorial(number - 1);
    }
}

// Lab Task 5
const form = document.getElementById('userInfoForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
            
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const userData = `Name: ${name}\nEmail: ${email}`;
    alert(userData);
});

// Lab Task 6(1)
const dataInput = document.getElementById('dataInput');
const saveButton = document.getElementById('saveButton');
const displayData = document.getElementById('displayData');
const clearButton = document.getElementById('clearButton');
const name = document.getElementById('name');
const email = document.getElementById('email');

if (localStorage.getItem('savedData')) {
    displayData.textContent = `Data from Local Storage: ${localStorage.getItem('savedData')}`;
}

saveButton.addEventListener('click', function () {
    const data = dataInput.value;
    const userData = ` ${name.value}\n ${email.value}`;
    localStorage.setItem('savedData', data);
    localStorage.setItem('userData', userData);
    displayData.textContent = `Data from Local Storage: ${data + userData}`;
});

// Lab Task 6(2)
clearButton.addEventListener('click', function () {
    localStorage.removeItem('savedData');
    localStorage.removeItem('userData');
    displayData.textContent = 'Data cleared from Local Storage';
});

// Lab Task 6(3)
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

const storedTasks = localStorage.getItem('tasks');
const tasks = (storedTasks && storedTasks.split(',')) || [];

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', tasks.join(','));
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        taskInput.value = '';
        saveTasksToLocalStorage();
        displayTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.textContent = tasks[i];
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeTask(i));
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }
}

addTaskButton.addEventListener('click', addTask);
displayTasks();

// Lab Task 6(4)
const visitCountElement = document.getElementById('count');


let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

visitCount++;
visitCountElement.textContent = visitCount.toString();

localStorage.setItem('visitCount', visitCount.toString());

// Lab Task 6(5)
const productList = document.getElementById('productList');
const cartList = document.getElementById('cartList');
const addToCartButtons = document.querySelectorAll('.addToCart');

const cartItems = (localStorage.getItem('cartItems') || '').split(',');

function saveCartItemsToLocalStorage() {
    localStorage.setItem('cartItems', cartItems.join(','));
}

function addToCart(product) {
    cartItems.push(product);
    saveCartItemsToLocalStorage();
    displayCart();
}

function displayCart() {
    cartList.innerHTML = '';
    cartItems.forEach((item) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = item;
        cartList.appendChild(cartItem);
    });
}

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(`Product ${index + 1}`);
    });
});

displayCart();

// Lab Task 6(6)
const bgColorSelect = document.getElementById('bgColorSelect');
const fontSizeSelect = document.getElementById('fontSizeSelect');

const savedBgColor = localStorage.getItem('bgColor');
const savedFontSize = localStorage.getItem('fontSize');

function applyUserPreferences() {
    const bgColor = savedBgColor || 'white';
    const fontSize = savedFontSize || '16px';

    document.body.style.backgroundColor = bgColor;
    document.body.style.fontSize = fontSize;

    bgColorSelect.value = bgColor;
    fontSizeSelect.value = fontSize;
}

function handlePreferenceChange() {
    const newBgColor = bgColorSelect.value;
    const newFontSize = fontSizeSelect.value;

    localStorage.setItem('bgColor', newBgColor);
    localStorage.setItem('fontSize', newFontSize);

    applyUserPreferences();
}

bgColorSelect.addEventListener('change', handlePreferenceChange);
fontSizeSelect.addEventListener('change', handlePreferenceChange);

applyUserPreferences();

// Lab Task 6(7)
function storeCredentials(username, password) {
    // const username = muhammadammar33;
    // const password = 12345678;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

function authenticate(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        return true;
    }

    return false;
}

const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (authenticate(username, password)) {
        message.textContent = 'Authentication successful';
    } else {
        message.textContent = 'Authentication failed. Please check your credentials.';
    }
});

storeCredentials('your_username', 'your_password');