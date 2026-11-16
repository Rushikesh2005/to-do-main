# 📝 My To-Do List

A simple, elegant, and fully functional to-do list web application built with vanilla HTML, CSS, and JavaScript. Manage your daily tasks efficiently with persistent local storage.

## 🔗 Live Demo

👉 **[Try it now on Vercel!](https://todo-list-theta-five-42.vercel.app/)** - Click to use the app live (no installation needed)

## 🎯 Features

- ✅ **Add Tasks** - Quickly add new tasks with a clean input interface
- ✏️ **Mark Complete** - Check off tasks as you complete them
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 💾 **Persistent Storage** - Tasks are saved locally in your browser (localStorage)
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient background with smooth animations
- ⌨️ **Keyboard Support** - Press Enter to quickly add tasks
- 🛡️ **Security** - HTML escaping prevents injection attacks

## 🚀 Getting Started

### ⚡ Quick Start (No Installation!)

Want to try the app right now? Just click the live demo link above and start adding tasks immediately!

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. **Open in your browser**
   - Simply double-click the `index.html` file, or
   - Use a local server (recommended for development):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if you have http-server installed)
     http-server
     ```
   - Then visit `http://localhost:8000` in your browser

## 📖 Usage

1. **Adding a Task**
   - Type your task in the input field
   - Click the "Add Task" button or press Enter
   - Your task appears in the list below

2. **Completing a Task**
   - Click the checkbox next to any task to mark it as complete
   - Completed tasks show a strikethrough and faded appearance

3. **Deleting a Task**
   - Click the "Delete" button next to any task
   - Confirm the deletion when prompted
   - The task is permanently removed

4. **Data Persistence**
   - All your tasks are automatically saved to your browser's local storage
   - Your tasks remain even after closing the browser
   - Clearing browser data will reset your task list

## 📁 Project Structure

```
todo-list/
├── index.html      # HTML structure
├── style.css       # Styling and layouts
├── script.js       # Core functionality
└── README.md       # Documentation (this file)
```

## 🛠️ Technical Details

### HTML (`index.html`)
- Semantic HTML5 structure
- Input field for task entry
- Unordered list container for tasks
- Empty state message for better UX

### CSS (`style.css`)
- Modern gradient background (`#667eea` to `#764ba2`)
- Flexbox layout for responsive design
- Smooth transitions and hover effects
- Mobile-first responsive design
- Clean typography with system fonts

### JavaScript (`script.js`)
- **Core Functions:**
  - `addTask()` - Creates and adds new tasks
  - `renderTask()` - Displays tasks on the page
  - `toggleTask()` - Marks tasks complete/incomplete
  - `deleteTask()` - Removes tasks
  - `saveTasks()` - Persists tasks to localStorage
  - `loadTasks()` - Retrieves tasks from localStorage
  - `escapeHtml()` - Sanitizes input for security

## 🎨 Color Scheme

| Element | Color | Purpose |
|---------|-------|---------|
| Primary Gradient | #667eea → #764ba2 | Background |
| Button Hover | #5568d3 | Interactive feedback |
| Delete Button | #ff6b6b | Destructive action |
| Task Background | #f5f5f5 | Content container |
| Text Primary | #333 | Main text |
| Text Secondary | #999 | Completed tasks |

## 🔒 Security Features

- **HTML Escaping** - Input is sanitized using `escapeHtml()` function to prevent XSS attacks
- **No External APIs** - Everything runs locally in your browser
- **No Data Sent** - Your tasks never leave your device

## 🚀 Deployment

This project is deployed on **Vercel** for fast, reliable, and secure hosting.

- **Live URL:** [https://todo-list-theta-five-42.vercel.app/](https://todo-list-theta-five-42.vercel.app/)
- **Hosting Provider:** Vercel
- **Auto-deployment:** Connected to GitHub repository (deploys on every push)
- **Performance:** Global CDN for instant loading from anywhere

### Deploy Your Own

Want to deploy your own version? It's easy with Vercel:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click deploy - that's it!

## 🌐 Browser Support

## 📱 Responsive Breakpoints

- **Desktop** - Full width container with max-width: 500px
- **Tablet** - Adapts with padding adjustments
- **Mobile** - Full width with side padding for smaller screens

## 🔄 How Data Persistence Works

The app uses the browser's `localStorage` API:

```javascript
// Saving: Tasks array is converted to JSON and stored
localStorage.setItem('tasks', JSON.stringify(tasks));

// Loading: JSON is retrieved and parsed back to objects
const tasks = JSON.parse(localStorage.getItem('tasks'));
```

**Note:** localStorage data is:
- ✅ Persistent across browser sessions
- ✅ Limited to ~5-10MB per domain
- ❌ Cleared when browser cache is cleared
- ❌ Not shared across different browsers

## 🚧 Future Enhancements

Potential features for future versions:
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Priority levels
- [ ] Edit existing tasks
- [ ] Dark mode toggle
- [ ] Task filtering (All, Active, Completed)
- [ ] Cloud sync with Firebase
- [ ] Export/Import tasks as JSON
- [ ] Drag-and-drop reordering
- [ ] Local backup functionality


## 📧 Contact & Support

- **GitHub Issues** - Report bugs or request features via GitHub Issues
- **Email** - [adityanarain2060.an@gmail.com]
- **Website** - [https://todo-list-theta-five-42.vercel.app/]

## 🙏 Acknowledgments

- Built with vanilla JavaScript (no frameworks required!)
- Inspired by modern productivity tools
- Thanks to the open-source community

---

**Made with ❤️ by [Aditya Narain Singh]**

*Last Updated: April 2026*
