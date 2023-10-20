(function() {
    document.addEventListener('DOMContentLoaded', (event) => {
        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');

        function animateBox(box, color) {
            box.style.transition = 'transform 1s, background-color 1s';
            box.style.transform = 'translateX(50px)';
            box.style.backgroundColor = color;
            setTimeout(() => {
                shootSmallBox(box);
                box.style.transform = 'translateX(0)';
                box.style.backgroundColor = 'lightgrey';
                setTimeout(() => {
                    animateBox(box, color);
                }, 1000); // Pause for 1 second before animating again
            }, 1000); // Pause for 1 second before shooting
        }

        function shootSmallBox(box) {
            const smallBox = document.createElement('div');
            smallBox.classList.add('small-box');
            const boxRect = box.getBoundingClientRect();
            const loaderRect = document.querySelector('.banter-loader2').getBoundingClientRect();  // Updated class name
            const initialLeft = boxRect.left - loaderRect.left + boxRect.width / 2;
            const initialTop = boxRect.top - loaderRect.top + boxRect.height / 2;

            smallBox.style.left = initialLeft + 'px';
            smallBox.style.top = initialTop + 'px';

            document.querySelector('.banter-loader2').appendChild(smallBox);  // Updated class name

            const shootAnimation = setInterval(() => {
                const currentX = parseFloat(getComputedStyle(smallBox).left);
                const smallBoxRect = smallBox.getBoundingClientRect();
                const box3Rect = document.getElementById('box3').getBoundingClientRect();

                // Check the distance to box3 and start fading earlier
                const distanceToBox3 = box3Rect.left - smallBoxRect.right;
                if (distanceToBox3 < 50) {  // Start fading when 50px away from box3
                    smallBox.style.transition = 'opacity 0.5s';  // Add transition to opacity
                    smallBox.style.opacity = '0';  // Set opacity to 0 for fading effect
                }

                const isColliding = !(smallBoxRect.right < box3Rect.left ||
                                      smallBoxRect.left > box3Rect.right ||
                                      smallBoxRect.bottom < box3Rect.top ||
                                      smallBoxRect.top > box3Rect.bottom);

                if (isColliding) {
                    document.getElementById('box3').style.backgroundColor = 'darkblue';  // Change color on collision
                }

                if (currentX < 200) {
                    smallBox.style.left = currentX + 10 + 'px';
                } else {
                    clearInterval(shootAnimation);
                    smallBox.remove();  // Remove the small box after shooting

                    // Delay the color reset by an additional 2 seconds (or any desired time)
                    setTimeout(() => {
                        document.getElementById('box3').style.backgroundColor = 'lightgrey';  // Reset color when shooting ends
                    }, 600);
                }
            }, 100);  // Adjust the interval to control shooting speed
        }

        animateBox(box1, '#02A3FE'); // Animate the first box
        setTimeout(() => animateBox(box2, 'lightgreen'), 3000); // Delay the animation of the second box
    });
})();
