# rollStats - DnD inspired Character Stat Roller

A simple JavaScript utility to generate character stats for role-playing games.

## Overview

This utility consists of several functions that together enable you to:
- Roll a six-sided dice.
- Compute the total of three dice rolls while discarding the lowest roll.
- Generate a new character with random stats (Str, Dex, Con, Int, Wis, Cha).
- Check and provide feedback on the quality of a character's stats.

## Setup

### Prerequisites

Ensure you have:
- A modern web browser with JavaScript support.
- An editor (if you wish to modify the script).

### Installation

1. Clone this repository or download the provided JavaScript file.
2. Open the JavaScript file in an editor if you wish to make modifications.
3. If using within a web environment, link the JavaScript file to your HTML file using a `<script>` tag.

## Example Usage

```javascript
const johnWinters = newCharacter("John Winters");
checkCharacter(johnWinters);
```
This will create a character object with the name "John Winters", roll the stats and then log a message based on the "quality" of the stats. You can modify the content to fit your needs.

## Feedback Messages

Depending on the quality of the stats, the utility might print messages like:

- "I've never seen such bad luck before."
- "Wow! Nice Stats!"
- "18! A truly legendary character, good luck."
... and many more.

## Contribution & Customization

Feel free to fork this repository and make your changes. Modify the thresholds and messages as needed to fit your specific game or setting. If you come up with improvements, consider making a pull request!
