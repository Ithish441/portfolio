# Glass-Brutalism Portfolio

A high-performance, responsive 3-page portfolio website for a Full-Stack Developer and Graphic Designer. Built with a unique "Glass-Brutalism" aesthetic, combining the raw, bold power of Brutalism with the elegant, translucent feel of Glassmorphism.

## 🚀 Tech Stack

*   **Framework:** React 18 (Vite)
*   **Language:** TypeScript
*   **Routing:** React Router 6
*   **Styling:** Vanilla CSS (Custom Glass-Brutalism Design System)
*   **Icons:** Lucide-React

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd glass-brutalism-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run in development mode:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📸 Adding Your Photo

To personalize the "About Me" section:
1.  Place your photo inside the `src/assets/` directory.
2.  Open `src/pages/Details.tsx`.
3.  Import your image: `import myPhoto from '../assets/your-photo-name.jpg';`
4.  Update the `<img>` tag's `src` attribute: `src={myPhoto}`.

## 📂 Project Structure

*   `src/index.css`: Contains the global "Glass-Brutalism" design tokens and utility classes.
*   `src/App.tsx`: Main layout and routing configuration.
*   `src/pages/`: Contains the three main pages (Home, Details, Contact).
*   `src/assets/`: Recommended location for personal images and static assets used within components.
*   `public/`: Static assets served at the root (like favicons).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
