# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# 🏎️ f1zerocarbon — FIA Motorsports Tracker

f1zerocarbon is a modern web application designed to track and monitor global motorsports operating under the Fédération Internationale de l'Automobile (FIA), specifically focusing on Formula 1 (F1), Formula 2 (F2), and Formula 3 (F3) tiers. 

The platform aggregates racing schedules, driver standings, constructor telemetry, and carbon-sustainability initiatives within the racing sport into a centralized user dashboard.

---

## 🚀 Key Features

* **🏁 Multi-Tier Race Tracking:** Consolidated dashboards tracking schedules, live updates, and performance data across F1, F2, and F3 categories.
* **📊 Standings & Telemetry:** Visual logs mapping driver championship points, team constructor statistics, and structural track timelines.
* **🌱 Eco-Focus Data Modules:** Built with an architectural focus on tracking the FIA’s net-zero carbon transition metrics, hybrid fuel usage analytics, and logistics impact footprints.
* **⚡ Ultra-Fast Client Execution:** Engineered on top of Vite for near-instant rendering speeds, optimized asset hydration, and high-frequency content updates.

---

## 🛠️ Built With

* **Frontend Engine:** [Vue 3](https://vuejs.org) (Single File Components utilizing `<script setup>` syntax)
* **Build System:** [Vite](https://vitejs.dev) (Rapid local development Hot Module Replacement and production bundling)
* **Language Platform:** [JavaScript (ES6+)](https://mozilla.org)
* **Styling Framework:** Extended [CSS3](https://mozilla.org) styling layers tailored for responsive grid telemetry metrics

---

## 📂 Codebase Directory Layout

```text
├── .vscode/                # IDE configuration and extensions recommending Volar syntax
├── public/                 # Static asset hosting (Icons, structural team badges, track vectors)
├── src/                    # Source architecture folder
│   ├── components/         # Reusable Vue components (Data tables, telemetry scales, cards)
│   ├── App.vue             # Global application layer containing views and routing gates
│   └── main.js             # Initial execution script booting up the primary Vue 3 instance
├── .gitignore              # Local node module rules to bypass Git version controls
├── index.html              # Entry DOM anchor file connecting the SPA mounting nodes
├── package.json            # Deployment dependencies and operational automated script dictionary
└── vite.config.js          # Core Vite parameters, asset compilers, and compilation options
```

---

## 💻 Step-by-Step Local Deployment Procedure

Follow these detailed commands to configure, clone, and execute a local development instance of the motorsports dashboard:

### 1. Prerequisites
Ensure you have the latest LTS release of Node.js set up on your workspace system:
* [Download Node.js](https://nodejs.org) (Version `18.x` or higher recommended)

### 2. Clone the Repository
Execute the command below inside your terminal application to fetch the project source files:
```bash
git clone https://github.com
cd f1zerocarbon
```

### 3. Install Package Dependencies
Install the developer environment dependencies and runtime package trees using npm:
```bash
npm install
```

### 4. Fire Up the Local Vite Server
Launch Vite's hot-reloading development pipeline:
```bash
npm run dev
```
Once up and running, open your web browser and navigate to the local network port listed on your console screen (typically `http://localhost:5173`).

---

## 🧱 Production & Compilation Scripts

Run the following scripts inside your workspace terminal to compile or review the code state:

* **`npm run dev`**: Launches the real-time local developer web server.
* **`npm run build`**: Packages and compresses the Vue 3 framework configurations into optimized, flat static assets inside a `/dist` target folder for cloud deployments.
* **`npm run preview`**: Fires up a local web instance targeting the production build folder to carry out manual QA audits.
