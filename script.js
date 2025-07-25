// Character sets for password generation
const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    similar: "0Ol1Il",
    ambiguous: "{}[]()/\\'\"~,;<>&",
};

// Get DOM elements
const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");
const strengthIndicator = document.getElementById("strengthIndicator");
const strengthText = document.getElementById("strengthText");

// Checkboxes
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const excludeSimilarCheck = document.getElementById("excludeSimilar");
const excludeAmbiguousCheck = document.getElementById("excludeAmbiguous");

// Update length display when slider changes
lengthSlider.addEventListener("input", function () {
    lengthValue.textContent = this.value;
});

// Generate password function
function generatePassword() {
    const length = parseInt(lengthSlider.value);
    let charset = "";

    // Build character set based on selected options
    if (uppercaseCheck.checked) charset += charSets.uppercase;
    if (lowercaseCheck.checked) charset += charSets.lowercase;
    if (numbersCheck.checked) charset += charSets.numbers;
    if (symbolsCheck.checked) charset += charSets.symbols;

    // Check if at least one character type is selected
    if (charset === "") {
        alert("Please select at least one character type!");
        return;
    }

    // Remove similar characters if option is checked
    if (excludeSimilarCheck.checked) {
        charset = charset
            .split("")
            .filter((char) => !charSets.similar.includes(char))
            .join("");
    }

    // Remove ambiguous characters if option is checked
    if (excludeAmbiguousCheck.checked) {
        charset = charset
            .split("")
            .filter((char) => !charSets.ambiguous.includes(char))
            .join("");
    }

    // Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Ensure password contains at least one character from each selected type
    password = ensureComplexity(password, length);

    passwordOutput.value = password;
    updateStrengthIndicator(password);
}

// Ensure password complexity by guaranteeing at least one char from each type
function ensureComplexity(password, length) {
    const requiredChars = [];
    let availableCharset = "";

    if (uppercaseCheck.checked) {
        requiredChars.push(getRandomChar(charSets.uppercase));
        availableCharset += charSets.uppercase;
    }
    if (lowercaseCheck.checked) {
        requiredChars.push(getRandomChar(charSets.lowercase));
        availableCharset += charSets.lowercase;
    }
    if (numbersCheck.checked) {
        requiredChars.push(getRandomChar(charSets.numbers));
        availableCharset += charSets.numbers;
    }
    if (symbolsCheck.checked) {
        requiredChars.push(getRandomChar(charSets.symbols));
        availableCharset += charSets.symbols;
    }

    // Apply exclusions to available charset
    if (excludeSimilarCheck.checked) {
        availableCharset = availableCharset
            .split("")
            .filter((char) => !charSets.similar.includes(char))
            .join("");
    }
    if (excludeAmbiguousCheck.checked) {
        availableCharset = availableCharset
            .split("")
            .filter((char) => !charSets.ambiguous.includes(char))
            .join("");
    }

    // If required chars exceed length, just return original password
    if (requiredChars.length > length) {
        return password;
    }

    // Create new password ensuring complexity
    let newPassword = [...requiredChars];

    // Fill remaining positions with random characters
    for (let i = requiredChars.length; i < length; i++) {
        newPassword.push(getRandomChar(availableCharset));
    }

    // Shuffle the password array to distribute required chars randomly
    return shuffleArray(newPassword).join("");
}

// Get random character from charset
function getRandomChar(charset) {
    return charset[Math.floor(Math.random() * charset.length)];
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Calculate and display password strength
function updateStrengthIndicator(password) {
    const strength = calculatePasswordStrength(password);
    strengthIndicator.style.display = "block";

    // Remove existing strength classes
    strengthIndicator.classList.remove(
        "strength-weak",
        "strength-medium",
        "strength-strong"
    );

    if (strength < 3) {
        strengthIndicator.classList.add("strength-weak");
        strengthText.textContent = "Weak";
    } else if (strength < 5) {
        strengthIndicator.classList.add("strength-medium");
        strengthText.textContent = "Medium";
    } else {
        strengthIndicator.classList.add("strength-strong");
        strengthText.textContent = "Strong";
    }
}

// Calculate password strength score
function calculatePasswordStrength(password) {
    let score = 0;

    // Length bonus
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (password.length >= 16) score++;

    // Character variety bonus
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
}

// Copy password to clipboard
async function copyPassword() {
    if (passwordOutput.value === "") {
        alert("Please generate a password first!");
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordOutput.value);

        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        copyBtn.style.background = "#38a169";

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = "#667eea";
        }, 2000);
    } catch (err) {
        // Fallback for older browsers
        passwordOutput.select();
        document.execCommand("copy");

        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

// Generate initial password on page load
window.addEventListener("load", generatePassword);

// Allow copying by clicking on password field
passwordOutput.addEventListener("click", function () {
    if (this.value !== "") {
        copyPassword();
    }
});

// Generate new password when Enter is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        generatePassword();
    }
});

// Auto-generate when settings change (optional - remove if you don't want this behavior)
[
    uppercaseCheck,
    lowercaseCheck,
    numbersCheck,
    symbolsCheck,
    excludeSimilarCheck,
    excludeAmbiguousCheck,
].forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        if (passwordOutput.value !== "") {
            generatePassword();
        }
    });
});

lengthSlider.addEventListener("input", function () {
    if (passwordOutput.value !== "") {
        generatePassword();
    }
});
