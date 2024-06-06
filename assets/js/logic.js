// Add light/dark mode logic here

const darkModeButton = document.querySelector('#dark-mode-button');
let state = darkModeButton.getAttribute('data-state');
state = localStorage.getItem("darkMode");
console.log(state);

// Get a handle on the entire page
const elSelect = document.querySelectorAll('*');


if (state === 'light') {
    darkModeButton.setAttribute('data-state', 'light');
    for (i = 0; i < elSelect.length; i++) {
        
        console.log(state);
        elSelect[i].setAttribute('style', 'background-color: var(--lm-background); color: var(--lm-color);');
    }
}
else if (state === 'dark') {
    darkModeButton.setAttribute('data-state', 'dark');
    for (i = 0; i < elSelect.length; i++) {
        console.log(state);
        elSelect[i].setAttribute('style', 'background-color: var(--dm-background); color: var(--dm-color);');
        
    }
}

else {
    darkModeButton.setAttribute('data-state', 'light');
    for (i = 0; i < elSelect.length; i++) {
        console.log(state);
        elSelect[i].setAttribute('style', 'background-color: var(--lm-background); color: var(--lm-color);');
    }
}

darkModeButton.addEventListener('click', function() {

    

    // Get state of page being light mode or dark mode
    let state = darkModeButton.getAttribute('data-state');

    // Check state and apply style changes
    if (state === 'light') {
        for (i = 0; i < elSelect.length; i++) {
            state = darkModeButton.setAttribute('data-state', 'dark');
            console.log(state);
            elSelect[i].setAttribute('style', 'background-color: var(--dm-background); color: var(--dm-color);');
            localStorage.setItem('darkMode', 'dark');
        }
    }
    else if (state === 'dark') {
        for (i = 0; i < elSelect.length; i++) {
            state = darkModeButton.setAttribute('data-state', 'light');
            console.log(state);
            elSelect[i].setAttribute('style', 'background-color: var(--lm-background); color: var(--lm-color);');
            localStorage.setItem('darkMode', 'light');
        }
    }

    else {
        for (i = 0; i < elSelect.length; i++) {
            state = darkModeButton.setAttribute('data-state', 'dark');
            console.log(state);
            elSelect[i].setAttribute('style', 'background-color: var(--dm-background); color: var(--dm-color);');
            localStorage.setItem('darkMode', 'dark');
        }
    }

});
