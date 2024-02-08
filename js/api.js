(function() {
    let currentIndex = 0;
    const boxes = document.querySelectorAll('.block-anter-loader__box');  // Updated class name
    const totalBoxes = boxes.length;
    const centerBox = document.getElementById('bbox3');  // Updated ID
    const order = [0, 1, 3, 4];
    const colors = ['red', 'green', 'blue', 'orange'];

    function resetBoxes() {
        boxes.forEach((box, index) => {
            box.style.backgroundColor = 'lightgrey';
        });
    }

    function moveToBox(box, color) {
        const { top, left } = box.getBoundingClientRect();
        const { top: centerTop, left: centerLeft } = centerBox.getBoundingClientRect();
        const translateX = left - centerLeft ;
        const translateY = top - centerTop ;
        

        // If moving to left or up, set z-index to -1, otherwise set it to 1
        centerBox.style.zIndex = (translateX < 0 || translateY < 0) ? '-1' : '1';

        centerBox.style.transform = `translate(${translateX}px, ${translateY}px)`;
        box.style.backgroundColor = color;

        setTimeout(() => {
            centerBox.style.transform = '';
            box.style.backgroundColor = 'lightgrey';
            centerBox.style.zIndex = '1';  // Reset z-index to 1
        }, 1000);
    }

    function updateBox() {
        resetBoxes();
        const box = boxes[order[currentIndex]];
        const color = colors[currentIndex];  // Get the color for this box from the colors array
        if (box.id !== 'bbox3') {  // Updated ID
            moveToBox(box, color);
        }
        
        document.getElementById('bbox3').style.backgroundColor = '#2196f3';  // Set background color to blue
    
        // console.log('Current Index:', currentIndex);  // Log the current index to the console
    
        currentIndex = (currentIndex + 3) % order.length;  // Increment index based on order array length
        
        setTimeout(updateBox, 2000);  // Wait 2 seconds before moving to the next box
    }
    

    updateBox();  // Initial call to start the animation
})();
