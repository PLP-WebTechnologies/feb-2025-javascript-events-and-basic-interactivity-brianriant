// Event Handling Section
document.addEventListener('DOMContentLoaded', () => {
    // Click Button
    const clickBtn = document.getElementById('clickBtn');
    clickBtn.addEventListener('click', () => {
        clickBtn.textContent = 'Clicked!';
        setTimeout(() => {
            clickBtn.textContent = 'Click Me!';
        }, 1000);
    });

    // Hover Box
    const hoverBox = document.getElementById('hoverBox');
    hoverBox.addEventListener('mouseenter', () => {
        hoverBox.style.backgroundColor = '#e9ecef';
        hoverBox.style.transform = 'scale(1.05)';
    });
    hoverBox.addEventListener('mouseleave', () => {
        hoverBox.style.backgroundColor = '#f8f9fa';
        hoverBox.style.transform = 'scale(1)';
    });

    // Keypress Box
    const keypressBox = document.getElementById('keypressBox');
    const keyDisplay = document.getElementById('keyDisplay');
    keypressBox.addEventListener('keydown', (e) => {
        keyDisplay.textContent = ` - You pressed: ${e.key}`;
        setTimeout(() => {
            keyDisplay.textContent = '';
        }, 2000);
    });

    // Secret Box (Double Click)
    const secretBox = document.getElementById('secretBox');
    let pressTimer;
    
    secretBox.addEventListener('dblclick', () => {
        secretBox.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            secretBox.style.transform = 'rotate(0deg)';
        }, 1000);
    });

    // Interactive Elements Section
    // Color Changing Button
    const colorBtn = document.getElementById('colorBtn');
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
    let colorIndex = 0;

    colorBtn.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        colorBtn.style.backgroundColor = colors[colorIndex];
    });

    // Image Gallery
    const images = document.querySelectorAll('.gallery-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;

    // Show first image initially
    images[currentImageIndex].classList.add('active');

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });

    // Form Validation
    const form = document.getElementById('validationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Real-time validation
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        input.style.borderColor = '#dc3545';
    }

    function showSuccess(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = '';
        input.style.borderColor = '#28a745';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    username.addEventListener('input', () => {
        if (username.value.length < 3) {
            showError(username, 'Username must be at least 3 characters');
        } else {
            showSuccess(username);
        }
    });

    email.addEventListener('input', () => {
        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
        } else {
            showSuccess(email);
        }
    });

    password.addEventListener('input', () => {
        if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 characters');
        } else {
            showSuccess(password);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;

        // Final validation
        if (username.value.length < 3) {
            showError(username, 'Username must be at least 3 characters');
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 characters');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
            // Reset success styling
            [username, email, password].forEach(input => {
                input.style.borderColor = '#dee2e6';
            });
        }
    });
});
