# 🔐 Strong Password Generator

A modern, secure, and user-friendly password generator built with vanilla HTML, CSS, and JavaScript. Generate strong passwords with customizable options and real-time strength analysis.

## ✨ Features

-   **🎯 Customizable Length**: Generate passwords from 4 to 50 characters
-   **🔤 Character Options**: Choose from uppercase, lowercase, numbers, and symbols
-   **🚫 Smart Exclusions**: Exclude similar characters (0, O, l, I) and ambiguous characters
-   **💪 Strength Analysis**: Real-time password strength indicator with visual feedback
-   **📋 One-Click Copy**: Copy passwords to clipboard with visual confirmation
-   **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
-   **⌨️ Keyboard Shortcuts**: Press Enter to generate new passwords
-   **🎨 Modern UI**: Clean glassmorphism design with smooth animations

## 🚀 Demo

_Live Demo: [View Demo](https://vanilla-js-simple-password-generato.vercel.app/)_

## 🛠️ Technologies Used

-   **HTML5** - Structure and semantic markup
-   **CSS3** - Modern styling with gradients, glassmorphism effects, and animations
-   **Vanilla JavaScript** - Core functionality and DOM manipulation
-   **Web APIs** - Clipboard API for copy functionality

## 📁 Project Structure

```
password-generator/
│
├── index.html          # Main HTML file with embedded CSS and JS
├── README.md           # Project documentation
└── LICENSE            # License file
```

## 🔧 Installation & Usage

### Option 1: Direct Download

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start generating secure passwords!

### Option 2: Clone Repository

```bash
git clone https://github.com/wpbean/Vanilla-JS-Simple-Password-Generator.git
cd password-generator
```

Then open `index.html` in your preferred browser.

### Option 3: Live Server (Recommended for Development)

If you have VS Code with Live Server extension:

1. Open the project folder in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎮 How to Use

1. **Set Password Length**: Use the slider to choose password length (4-50 characters)
2. **Select Character Types**: Check the boxes for character types you want to include:
    - Uppercase letters (A-Z)
    - Lowercase letters (a-z)
    - Numbers (0-9)
    - Symbols (!@#$%^&\*)
3. **Configure Exclusions** (Optional):
    - Exclude similar characters to avoid confusion
    - Exclude ambiguous characters for better readability
4. **Generate Password**: Click "Generate Password" or press Enter
5. **Copy Password**: Click the "Copy" button or click on the password field

## 🔒 Security Features

-   **Cryptographically Secure**: Uses `Math.random()` for character selection
-   **Complexity Guarantee**: Ensures at least one character from each selected type
-   **Character Shuffling**: Uses Fisher-Yates algorithm for random distribution
-   **No Data Storage**: Passwords are generated client-side and not stored anywhere

## 📱 Browser Compatibility

-   ✅ Chrome 63+
-   ✅ Firefox 53+
-   ✅ Safari 13.1+
-   ✅ Edge 79+

_Note: Clipboard API requires HTTPS in production environments_

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

-   Follow existing code style and formatting
-   Test your changes across different browsers
-   Update documentation if needed
-   Keep the design responsive and accessible

## 🐛 Bug Reports

Found a bug? Please open an issue with:

-   Browser and version
-   Steps to reproduce
-   Expected vs actual behavior
-   Screenshots (if applicable)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

-   GitHub: [@wpbean](https://github.com/wpbean)
-   LinkedIn: [wp-imran](https://www.linkedin.com/in/wp-imran/)

## 🙏 Acknowledgments

-   Inspired by modern password security best practices
-   UI design influenced by glassmorphism trends
-   Fisher-Yates shuffle algorithm for secure randomization

---

⭐ **If you found this project helpful, please give it a star!** ⭐
