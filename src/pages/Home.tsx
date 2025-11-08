import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Video, Zap, Shield, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const Home = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url.trim()) {
      toast.error("Please enter a TikTok URL");
      return;
    }

    if (!url.includes("tiktok.com")) {
      toast.error("Please enter a valid TikTok URL");
      return;
    }

    setLoading(true);
    
    // Simulate download process - you'll need to implement actual API integration
    setTimeout(() => {
      toast.success("Video is ready for download!");
      setLoading(false);
    }, 2000);
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Download TikTok videos in seconds with our optimized servers"
    },
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "No registration required. Your privacy is our priority"
    },
    {
      icon: Video,
      title: "High Quality",
      description: "Download videos in the best available quality without watermarks"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Download TikTok Videos Without Watermark
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fast, free, and easy TikTok video downloader. Save your favorite TikTok videos in high quality without watermarks.
          </p>

          {/* Download Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] border border-border">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="url"
                placeholder="Paste TikTok video URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 h-14 text-base"
                disabled={loading}
              />
              <Button
                onClick={handleDownload}
                disabled={loading}
                className="h-14 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                size="lg"
              >
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-left">
              Simply paste a TikTok video link above and click download. It's that easy!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose TikSave?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The best TikTok downloader with no compromise on quality or speed
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How to Download TikTok Videos
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Follow these simple steps to download any TikTok video
          </p>
          
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Copy TikTok Video URL",
                description: "Open TikTok app, find the video you want to download, tap the Share button, and copy the link"
              },
              {
                step: "2",
                title: "Paste URL",
                description: "Paste the copied TikTok video URL into the input field above"
              },
              {
                step: "3",
                title: "Download Video",
                description: "Click the Download button and your video will be processed and ready to save"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-card rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Everything you need to know about TikSave
          </p>
          
          <div className="space-y-4">
            {[
              {
                q: "Is TikSave free to use?",
                a: "Yes! TikSave is completely free to use. There are no hidden charges or subscription fees."
              },
              {
                q: "Do I need to register or login?",
                a: "No registration is required. Simply paste the TikTok URL and download instantly."
              },
              {
                q: "Are the videos downloaded without watermark?",
                a: "Yes, we provide options to download TikTok videos without the TikTok watermark in high quality."
              },
              {
                q: "Is it legal to download TikTok videos?",
                a: "You should only download videos that you have the right to use. Respect content creators' rights and TikTok's terms of service."
              },
              {
                q: "What devices can I use TikSave on?",
                a: "TikSave works on all devices including desktop computers, tablets, and mobile phones with any modern browser."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
