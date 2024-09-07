# Number Guessing Game

This is an interactive web-based number guessing game built with HTML, CSS, and JavaScript. Players set a range and then try to guess a randomly generated number within that range.

## Features

- Input fields for setting minimum and maximum numbers
- Start game button to generate a random number within the specified range
- Input field for player guesses
- Submit guess button
- Feedback on whether the guess is too high or too low
- Unlimited attempts
- Display of total attempts when the correct number is guessed

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

- Git installed on your local machine
- A web browser

### Cloning the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

   ```
   git clone https://github.com/waleedahmad4015/number-guessing-game.git
   ```

   Replace `waleedahmad4015` with your actual GitHub username if you've hosted the project on GitHub.

4. Once the cloning is complete, navigate into the project directory:

   ```
   cd number-guessing-game
   ```

## How to Play

1. After cloning the repository, open the `index.html` file in your web browser and start the game.
2. Enter the minimum number for your range in the "Min" input field.
3. Enter the maximum number for your range in the "Max" input field.
4. Click the "Start Game" button to generate a random number within your specified range.
5. Enter your guess in the "Your Guess" input field.
6. Click the "Submit Guess" button.
7. You will receive feedback on whether your guess is too high or too low.
8. Keep guessing until you find the correct number.
9. Once you guess correctly, the game will display how many attempts you made.

## File Structure

```
number-guessing-game/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How It Works

The game uses JavaScript to generate a random number within the user-specified range. It then compares the player's guesses to this number, providing feedback and keeping track of the number of attempts. The HTML provides the structure for input and output, the CSS styles the appearance, and the JavaScript handles the game logic.

## Customization

Feel free to modify the styles in `styles.css` to change the appearance of the game. You can also extend the functionality by editing the `script.js` file, such as adding difficulty levels or a score system based on the number of attempts.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

## Author

Waleed Ahmad

---

Enjoy playing the Number Guessing Game!
