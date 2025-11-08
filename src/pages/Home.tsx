import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Sparkles, Shield, Zap } from "lucide-react";
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
    
    setTimeout(() => {
      toast.success("Video is ready for download!");
      setLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30">
            <span className="text-sm font-medium bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ✨ Fast & Free TikTok Downloader
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Download TikTok
            </span>
            <br />
            <span className="text-foreground">Videos Instantly</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Save your favorite TikTok videos in high quality without watermarks. No registration required.
          </p>

          {/* Download Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-[var(--shadow-card)]">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="url"
                  placeholder="Paste TikTok video URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 h-14 text-base bg-background/50 border-border/50 focus:border-primary"
                  disabled={loading}
                />
                <Button
                  onClick={handleDownload}
                  disabled={loading}
                  className="h-14 px-8 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300 font-semibold"
                  size="lg"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-left">
                Paste any TikTok video link and download it in seconds - completely free!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Download videos in seconds with our optimized servers"
              },
              {
                icon: Shield,
                title: "100% Safe",
                description: "No registration required. Your privacy is protected"
              },
              {
                icon: Sparkles,
                title: "High Quality",
                description: "Get the best quality videos without watermarks"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">
                    <feature.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Download any TikTok video in 3 simple steps
          </p>
          
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Copy TikTok Link",
                description: "Open TikTok, find your video, tap Share and copy the link"
              },
              {
                step: "02",
                title: "Paste URL",
                description: "Paste the link into the input field above"
              },
              {
                step: "03",
                title: "Download",
                description: "Click download and save your video instantly"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-background">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Common questions about TiksSave
          </p>
          
          <div className="space-y-4">
            {[
              {
                q: "Is TiksSave free to use?",
                a: "Yes! TiksSave is completely free with no hidden charges or subscriptions."
              },
              {
                q: "Do I need to create an account?",
                a: "No registration required. Simply paste the URL and download instantly."
              },
              {
                q: "Can I download videos without watermark?",
                a: "Yes, we provide high quality downloads without TikTok watermarks."
              },
              {
                q: "Is it safe to use?",
                a: "Absolutely! We don't store your data or require any personal information."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
