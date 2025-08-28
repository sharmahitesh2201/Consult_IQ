# ConsultIQ 

**Your personal AI guide to consulting excellence.**

ConsultIQ is an AI-powered, web-based platform designed for aspiring consultants. It provides a comprehensive toolkit to master case studies, learn essential business frameworks, track performance, and practice interview skills with a dedicated, Gemini-powered AI coach.

---

## Key Features

- **Interactive Dashboard:** Get a quick overview of your progress, key stats, and quick links to all major sections.
- **Extensive Case Study Library:** Explore a wide range of real-world consulting cases across various industries and difficulty levels.
- **Framework Encyclopedia:** Learn and review essential consulting frameworks like Porter's Five Forces, SWOT, and the BCG Matrix, complete with detailed explanations.
- **AI-Powered Practice Arena:** Tackle brain teasers and mini-cases with real-time guidance from our intelligent AI Coach.
- **Comprehensive Progress Tracking:** Visualize your performance over time with charts, analyze skill breakdowns, and review your detailed session history.
- **Curated Strategy Videos:** Watch expert-led videos embedded directly in the app to enhance your strategic thinking and communication skills.
- **On-Demand AI Coach:** Chat with a helpful AI assistant anytime using the floating chat window. Ask questions, get hints, or practice your responses on the fly.


---

## Built With

- **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[Google Gemini API](https://ai.google.dev/)**: Powering the intelligent AI Coach features.
- **[React Router](https://reactrouter.com/)**: For client-side routing and navigation.
- **[Marked](https://marked.js.org/)**: For rendering Markdown content from the case studies and frameworks.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need a modern web browser and a way to serve the static files. A popular and simple choice is the `live-server` package for `npm`.

```sh
npm install -g live-server
```

### Setup & Running

1.  **Clone the repository (or download the files):**
    ```sh
    git clone https://github.com/your-username/consultiq.git
    cd consultiq
    ```

2.  **Set up your Gemini API Key:**
    The AI features of this application rely on the Google Gemini API. You must provide an API key for the chat functionality to work.

    - The application is designed to access the API key via `process.env.API_KEY`. In a typical development environment (like Vite or Create React App), you would create a `.env` file in the project's root directory:
      ```
      API_KEY=YOUR_GEMINI_API_KEY
      ```
    - **For this simple static project**, you'll need to ensure the environment where you serve the files has this variable accessible, or you might need to manually insert it if you are adapting the code.

3.  **Run the application:**
    From the root directory of the project, run your static file server.

    ```sh
    live-server
    ```

    Your default browser should open to `http://127.0.0.1:8080` (or a similar address), and the ConsultIQ app will be running.

---

## Usage

1.  **Dashboard**: Start here for an at-a-glance view of your stats and quick links to other sections.
2.  **Case Studies / Frameworks**: Browse the libraries to study new materials. Click "View Details" to dive into the rich-text content.
3.  **Practice Arena**: Choose a scenario. Read the prompt on its details page, then use the **red chat icon** in the bottom-right corner to start a guided session with the AI Coach.
4.  **My Progress**: Visit this page to see charts of your score trends, a breakdown of your skills, and a complete history of your completed sessions.
5.  **AI Coach**: The chat window can be opened from any page to ask general consulting questions or get help with a specific problem you're working on.
