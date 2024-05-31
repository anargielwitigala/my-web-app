function displayMessage() {
    const message = "You are my everything, and I love you more every day! You are the most amazing person i can ever wish from god! I LOVE YOU SO MUCH";
    document.getElementById('message').innerText = message;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Example event listener for button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});