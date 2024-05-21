
let lightMode = true;

const toggleButton = document.getElementById('toggle-mode');

const changeMode = function (event) {
    event.preventDefault();

    if (lightMode) {
        document.body.classList.add('dark-mode');
        toggleButton.textContent= '🌒'; 
        lightMode = false;
    } 

    else if (!lightMode) {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent ='☀️'; 
        lightMode = true;
    }
   
};

toggleButton.addEventListener('click', changeMode);