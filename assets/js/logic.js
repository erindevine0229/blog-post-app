// Controls light and dark mode by assigning CSS via root styling
let lightMode = true;

const toggleButton = document.getElementById('toggle-mode');

const changeMode = function () {

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

// targets the icon for toggling between light and dark
toggleButton.addEventListener('click', changeMode);