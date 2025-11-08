# AI Art Gallery

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.3-38bdf8.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> Create stunning AI-generated art with an intuitive, beautiful interface

[Live Demo](#) | [Report Bug](https://github.com/rohithreddy5250/AI-Art-Gallery/issues) | [Request Feature](https://github.com/rohithreddy5250/AI-Art-Gallery/issues)


## Features

- **AI Art Generation**: Create unique artwork from text prompts
- **Beautiful Gallery**: Browse and discover AI-generated art
- **Save & Download**: Save your favorite creations
- **Like & Share**: Engage with the community
- **Responsive Design**: Works perfectly on all devices
- **Fast & Intuitive**: Smooth user experience with modern UI

## Demo

Try it live: [AI Art Gallery Demo](#)

Example prompts to try:
- "A mystical forest with glowing mushrooms and fireflies"
- "Futuristic city with flying cars at sunset"
- "Abstract cosmic landscape with vibrant colors"

## Built With

- **Frontend Framework**: React 18.2
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **AI Integration**: Ready for Stable Diffusion API integration

## Installation

### Prerequisites

- Node.js 16+ and npm/yarn
- (Optional) Stable Diffusion API key for actual image generation

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/rohithreddy5250/AI-Art-Gallery.git
cd AI-Art-Gallery
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
```
http://localhost:5173
```

## 🔧 Configuration

### Integrating AI Image Generation

To connect real AI image generation, update the `handleGenerate` function in `src/App.jsx`:

```javascript
const handleGenerate = async () => {
  const response = await fetch('YOUR_AI_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${YOUR_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
      // other parameters
    })
  });
  
  const data = await response.json();
  // Process response
};
```

### Supported AI APIs

- **Stability AI** (Stable Diffusion)
- **OpenAI DALL-E**
- **Hugging Face Inference API**
- **Replicate**

##  Project Structure

```
AI-Art-Gallery/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── components/      # Reusable components (future)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── .gitignore
```

##  Usage

### Creating AI Art

1. Enter a descriptive prompt in the text area
2. Click "Generate Art"
3. Wait for the AI to create your masterpiece
4. Download or save to gallery

### Gallery Management

- **Like**: Click the heart icon to like artwork
- **Download**: Hover over image and click download button
- **Share**: Share your creations with others

## Deployment

### Deploy to Vercel

```bash
npm run build
# Then deploy the dist/ folder to Vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/AI-Art-Gallery/'
}
```

2. Build and deploy:
```bash
npm run build
# Use gh-pages package or GitHub Actions
```

## 🛣️ Roadmap

- [ ] Integrate Stable Diffusion API
- [ ] User authentication & profiles
- [ ] Save gallery to cloud storage
- [ ] Advanced editing tools
- [ ] Style transfer features
- [ ] Image upscaling
- [ ] Social sharing features
- [ ] Mobile app version

##  Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Author

**Rohith Reddy**

- GitHub: [@rohithreddy5250](https://github.com/rohithreddy5250)
- LinkedIn: [rohithreddyy](https://linkedin.com/in/rohithreddyy)
- Email: rohithreddybaddam8@gmail.com

## Acknowledgments

- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Unsplash](https://unsplash.com/) for placeholder images
- Inspiration from modern AI art platforms

## Stats

![GitHub Stars](https://img.shields.io/github/stars/rohithreddy5250/AI-Art-Gallery?style=social)
![GitHub Forks](https://img.shields.io/github/forks/rohithreddy5250/AI-Art-Gallery?style=social)

---

⭐ **If you like this project, please give it a star!**

**Made with ❤️ by Rohith Reddy**
