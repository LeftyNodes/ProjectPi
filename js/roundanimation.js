(function() {
    let currentIndex = 0;
    const boxes = document.querySelectorAll('.banter-loader__box');
    const totalBoxes = boxes.length;

    function resetBoxes() {
        boxes.forEach(box => {
            box.style.transform = '';
            box.style.backgroundColor = 'lightgrey';
        });
    }

    function updateBox() {
        resetBoxes();
        const box = boxes[currentIndex];
        box.style.backgroundColor = 'darkblue';
        box.style.transform = 'translate(-50%, -50%)';  // Moves box to center
        setTimeout(() => {
            box.style.transform = '';  // Moves box back to original position
            currentIndex = (currentIndex + 1) % totalBoxes;
            updateBox();  
        }, 800);  // Adjust delay here to control how long the box stays in the center
    }

    updateBox();  // Initial call to start the animation
})();
