// Add light/dark mode logic here

darkModeButton = document.querySelector('#dark-mode-button')


function toggleDarkMode() {

    // Get a handle on the entire page
    const htmlEl = document.querySelector('*');

    // Get state of page being light mode or dark mode
    const state = darkModeButton.getAttribute('data-state');

    // Check state and apply style changes
    if (state === 'light') {
        state = 'dark';
        console.log(state);
        htmlEl.setAttribute('style', 'background-color: var(--dm-background); color: var(--dm-color);')
    }
    else if (state === 'dark') {
        state = 'light';
        htmlEl.setAttribute('style', 'background-color: var(--lm-background); color: var(--lm-color);')
    }

}

darkModeButton.addEventListener('click', toggleDarkMode());
