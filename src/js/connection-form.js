import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
    const connectionForm = document.querySelector('.connection__form');

    if (!connectionForm) return;

    const nameInput = document.getElementById('connection-name');
    const telInput = document.getElementById('connection-tel');
    const emailInput = document.getElementById('connection-email');
    const submitBtn = document.querySelector('.form__btn');


    if (telInput) {
        IMask(telInput, {
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
        const inputError = input.closest('.form__error');
        input.classList.add('input-error');

        let errorText = inputError.querySelector('.error-message');
        if (!errorText) {
            errorText = document.createElement('span');
            errorText.className = 'error-message';
            inputError.appendChild(errorText);
        }
        errorText.textContent = message;
    };

    const clearError = (input) => {
        if (!input) return;
        const inputError = input.closest('.form__error');
        input.classList.remove('input-error');
        const errorText = inputError.querySelector('.error-message');
        if (errorText) {
            errorText.remove();
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
                showError(emailInput, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError(emailInput);
            }
        }


        if (telInput) {
            // Убираем масочные символы (скобки, плюсы, пробелы, тире), оставляем только цифры
            const rawNumbers = telInput.value.replace(/\D/g, '');

            if (!rawNumbers) {
                showError(telInput, 'Please enter your phone number');
                isValid = false;
            } else if (rawNumbers.length < 12) {
                showError(telInput, 'Please enter a complete phone number');
                isValid = false;
            } else {
                clearError(telInput);
            }
        }
        return isValid;
    };

    [nameInput, emailInput, telInput].forEach((input) => {
        if (input) {
            input.addEventListener('input', () => clearError(input));
        }
    });
    connectionForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const originalBtnText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.classList.add('is-loading');
        submitBtn.textContent = 'Sending...';

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            submitBtn.classList.remove('is-loading');
            submitBtn.classList.add('is-success');
            submitBtn.textContent = 'Sent Successfully! ✓';

            connectionForm.reset();

            setTimeout(() => {
                submitBtn.classList.remove('is-success');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }, 3000);
        } catch (error) {
            alert('Something went wrong. Please try again later.');
            submitBtn.classList.remove('is-loading');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
});

