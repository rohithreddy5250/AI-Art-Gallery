import React, { useState } from 'react';
import { Sparkles, Download, Palette, Loader2, Heart, Share2, ImagePlus } from 'lucide-react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [gallery, setGallery] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
      prompt: 'Abstract colorful digital art',
      likes: 24
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400',
      prompt: 'Futuristic cityscape at sunset',
      likes: 18
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400',
      prompt: 'Surreal landscape with floating islands',
      likes: 32
    }
  ]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    setTimeout(() => {
      const newArt = {
        id: Date.now(),
        url: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000000)}?w=400`,
        prompt: prompt,
        likes: 0
      };
      setGeneratedImage(newArt);
      setIsGenerating(false);
    }, 3000);
  };

  const saveToGallery = () => {
    if (generatedImage) {
      setGallery([generatedImage, ...gallery]);
      setGeneratedImage(null);
      setPrompt('');
    }
  };

  const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ai-art.jpg';
    link.click();
  };

  const likeArt = (id) => {
    setGallery(gallery.map(art => 
      art.id === id ? { ...art, likes: art.likes + 1 } : art
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Art Gallery
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              My Gallery
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              Create AI Art
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Enter your prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the art you want to create... e.g., 'A mystical forest with glowing mushrooms and fireflies'"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none resize-none h-32"
                  disabled={isGenerating}
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed font-semibold transition flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Art
                    </>
                  )}
                </button>
              </div>
            </div>

            {generatedImage && (
              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Your Generated Art</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <img
                      src={generatedImage.url}
                      alt={generatedImage.prompt}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 rounded-lg">
                      <button
                        onClick={() => downloadImage(generatedImage.url)}
                        className="p-3 bg-white/20 hover:bg-white/30 rounded-full"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/20 hover:bg-white/30 rounded-full">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-300 mb-2">Prompt:</p>
                      <p className="text-lg">{generatedImage.prompt}</p>
                    </div>
                    <button
                      onClick={saveToGallery}
                      className="w-full px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 font-semibold transition"
                    >
                      Save to Gallery
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <ImagePlus className="w-8 h-8 text-blue-400" />
            Community Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((art) => (
              <div
                key={art.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-purple-400 transition group"
              >
                <div className="relative">
                  <img
                    src={art.url}
                    alt={art.prompt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <button
                        onClick={() => downloadImage(art.url)}
                        className="flex-1 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-300 mb-2 line-clamp-2">{art.prompt}</p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => likeArt(art.id)}
                      className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition"
                    >
                      <Heart className="w-4 h-4" />
                      <span>{art.likes}</span>
                    </button>
                    <span className="text-xs text-gray-400">2 hours ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-16 border-t border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-400">
          <p>Built with ❤️ by Rohith Reddy | Powered by AI</p>
        </div>
      </footer>
    </div>
  );
}

export default App;