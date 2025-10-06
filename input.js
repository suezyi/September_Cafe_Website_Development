function validateInput(input) {
    // the input can only be number
    let value = parseInt(input.value);

    // If the value is not a number or less than the minimum, set it to the minimum
    if (isNaN(value) || value < 1) {
        input.value = 1;
    }

    // If the value exceeds the maximum, set it to the maximum
    if (value > 20) {
        input.value = 20;
    }
}
