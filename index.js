function updateDemoGif(feature) {
    const demoGif = document.getElementById('demo-gif');
    demoGif.src = '/assets/' + feature + '.gif';
    demoGif.alt = feature;
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.demo-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const feature = button.getAttribute('demo-feature');
            updateDemoGif(feature);
        })
    })
})