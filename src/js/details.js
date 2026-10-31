import '../scss/style.scss';
import './deteails-voyage.js';
import './header-blur.js';
import './burger-menu.js';
import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
    const reserveVoyage = document.querySelector('.reserve__form');

    if (!reserveVoyage) return;

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const phoneInput = document.getElementById('user-tel');
    const messageInput = document.getElementById('message');
    const submitBtn = reserveVoyage.querySelector('.reserve__form-button');


    if (phoneInput) {
            IMask(phoneInput, {
                mask: '+{38} (000) 000-00-00', // ваш шаблон
                lazy: false, // ВАЖНО: false заставляет маску показываться постоянно!
                placeholderChar: '_' // символ для незаполненных мест (по умолчанию это '_')
            });
        }


    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const showError = (input, message) => {
        if (!input) return;
        const formGroup = input.closest('.reserve__form-group');
        input.classList.add('reserv-inputerror');

        let errorMessage = formGroup.querySelector('.error-inputmessage');
        if (!errorMessage) {
            errorMessage = document.createElement('span');
            errorMessage.className = 'error-inputmessage';
            formGroup.appendChild(errorMessage);
        }
        errorMessage.textContent = message;
    };

    const clearError = (input) => {
        if (!input) return;
        const formGroup = input.closest('.reserve__form-group');
        input.classList.remove('reserv-inputerror');
        const errorMessage = formGroup.querySelector('.error-inputmessage');
        if (errorMessage) {
            errorMessage.remove();
        }
    };

    const validateForm = () => {
        let isValid = true;
        if (nameInput && !nameInput.value.trim()) {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        } else if (nameInput) {
            clearError(nameInput);
        }

        if (emailInput) {
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Email must contain @');
                isValid = false;
            } else {
                clearError(emailInput);
            }
        }

        if (phoneInput) {
    // Очищаем значение от символов маски (плюсы, скобки, пробелы, тире), оставляя только цифры
    const rawNumbers = phoneInput.value.replace(/\D/g, '');

    if (!rawNumbers) {
        showError(phoneInput, 'Please enter your phone number');
        isValid = false;
    } else if (rawNumbers.length < 12) { 
        showError(phoneInput, 'Number must be at least 12 characters long');
        isValid = false;
    } else {
        clearError(phoneInput);
    }
}

        if (messageInput) {
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Please enter your message');
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                showError(messageInput, 'Message must be at least 10 characters long');
                isValid = false;
            } else {
                clearError(messageInput);
            }
        }

        return isValid;
    };

    [nameInput, emailInput, messageInput, phoneInput].forEach((input) => {
        if (input) {
            input.addEventListener('input', () => clearError(input));
        }
    });

    reserveVoyage.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const reserveBtnText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.classList.add('reserve-loading');
        submitBtn.textContent = 'Sending...';

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            submitBtn.classList.remove('reserve-loading');
            submitBtn.classList.add('reserve-success');
            submitBtn.textContent = 'Sent Successfully! ✓';

            reserveVoyage.reset();

            setTimeout(() => {
                submitBtn.classList.remove('reserve-success');
                submitBtn.disabled = false;
                submitBtn.textContent = reserveBtnText;
            }, 3000);
        } catch (error) {
            alert('Something went wrong. Please try again later.');
            submitBtn.classList.remove('reserve-loading');
            submitBtn.disabled = false;
            submitBtn.textContent = reserveBtnText;
        }
    });

});