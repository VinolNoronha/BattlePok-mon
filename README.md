# Pokémon Battle Simulator

A web application that simulates a battle between Pokémon by allowing users to select their favorite Pokémon and initiate a battle. This project utilizes the Pokémon API to retrieve details about Pokémon, their stats, abilities, and moves.

## Features

### 1. Pokémon Card Display

- Displays a list of 15 Pokémon on the main page.
- Each card includes:
  - **Name**: The Pokémon's name.
  - **Image**: Front sprite of the Pokémon.

### 2. Detailed Pokémon Information

- When a user clicks on a Pokémon card, a modal opens with detailed information about the selected Pokémon.
  - **Name**
  - **Height**
  - **Weight**
  - **Base Stats** (HP, Attack, Defense, Speed)
  - **Abilities** (including hidden abilities)
  - **Moves**
  - **Color**
  - **Shape**
  - **Location**
  - **Egg Groups**

### 3. Pokémon Battle Simulation

- Users can select two Pokémon to engage in battle.
- The user clicks on two Pokémon cards, which are then visually highlighted.
- After selecting two Pokémon, a **Battle** button appears, initiating the battle simulation.
  NOTE: THIS BATTLE FEATURE IS NOT FULLY IMPLEMENTED

## Future Work

- **Damage Calculation**: Implement the full damage calculation formula using the Pokémon's stats and selected moves.
- **Type Effectiveness**: Calculate the effectiveness of each move based on the types of the Pokémon involved in the battle.
- **Battle Animations**: Enhance the user experience by adding battle animations and visual feedback.

## Installation and Usage

### Prerequisites

- Ensure you have **Node.js** installed on your machine.
- Clone the repository to your local machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd pokemon-battle-simulator
   ```
