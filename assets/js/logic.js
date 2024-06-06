// Add light/dark mode logic here

const darkModeButton = document.querySelector('#dark-mode-button')
let state = darkModeButton.getAttribute('data-state');
state = darkModeButton.setAttribute('data-state', localStorage.getItem('darkMode'))



darkModeButton.addEventListener('click', function() {

    // Get a handle on the entire page
    const bodyEl = document.querySelectorAll();

    // Get state of page being light mode or dark mode
    let state = darkModeButton.getAttribute('data-state');

    // Check state and apply style changes
    if (state === 'light') {
        state = darkModeButton.setAttribute('data-state', 'dark');
        console.log(state);
        bodyEl.setAttribute('style', 'background-color: var(--dm-background); color: var(--dm-color);');
    }
    else if (state === 'dark') {
        state = darkModeButton.setAttribute('data-state', 'light');
        console.log(state);
        bodyEl.setAttribute('style', 'background-color: var(--lm-background); color: var(--lm-color);');
    }

    else {
        state = darkModeButton.setAttribute('data-state', 'dark');
        console.log(state);
        bodyEl.setAttribute('style', 'background-color: var(--dm-background); color: var(--dm-color);');
    }

});
