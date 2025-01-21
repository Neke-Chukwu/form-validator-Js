const { checkdata } = require('./validate');

/**
 * @jest-environment jsdom
 */


describe('checkdata', () => {
    let usernameInput;
    let emailInput;

    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="name" />
            <input type="text" id="email" />
        `;
        usernameInput = document.getElementById('name');
        emailInput = document.getElementById('email');
    });

    test('should alert and return false if username is empty', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        usernameInput.value = '';
        emailInput.value = 'test@example.com';

        const result = checkdata();

        expect(window.alert).toHaveBeenCalledWith('Please enter your name');
        expect(result).toBe(false);
    });

    test('should alert and return false if email is empty', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        usernameInput.value = 'John Doe';
        emailInput.value = '';

        const result = checkdata();

        expect(window.alert).toHaveBeenCalledWith('Please enter your email');
        expect(result).toBe(false);
    });

    test('should return true if both username and email are provided', () => {
        usernameInput.value = 'John Doe';
        emailInput.value = 'test@example.com';

        const result = checkdata();

        expect(result).toBe(true);
    });
});