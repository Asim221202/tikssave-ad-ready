import Layout from "@/components/Layout";
import { Info, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-[var(--shadow-glow)]">
            <Info className="w-6 h-6 text-background" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About TiksSave
          </h1>
        </div>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-12 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <p className="text-lg text-muted-foreground mb-6">
              TiksSave is a free, fast, and reliable TikTok video downloader that helps you save your
              favorite TikTok videos without watermarks. Our mission is to make video downloading 
              simple, accessible, and free for everyone.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">
                  <Target className="w-5 h-5 text-background" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Simplicity</h3>
                <p className="text-muted-foreground">
                  Make video downloading as simple as possible with a clean, intuitive interface.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">
                  <Zap className="w-5 h-5 text-background" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Speed</h3>
                <p className="text-muted-foreground">
                  Provide lightning-fast downloads without compromising on quality.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">
                  <Users className="w-5 h-5 text-background" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  Ensure our service is free and accessible to everyone, on any device.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Why Choose TiksSave?</h2>
            <div className="space-y-4">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-foreground">No Registration Required</h3>
                <p className="text-muted-foreground">
                  We believe in simplicity. You don't need to create an account or provide any 
                  personal information to use our service.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Completely Free</h3>
                <p className="text-muted-foreground">
                  TiksSave is 100% free to use. No hidden charges, no premium plans, no subscription fees.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-foreground">High Quality Downloads</h3>
                <p className="text-muted-foreground">
                  Download videos in the best available quality, including options to remove watermarks.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Privacy Focused</h3>
                <p className="text-muted-foreground">
                  We don't store your downloaded videos or track your activity beyond basic analytics.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Works on All Devices</h3>
                <p className="text-muted-foreground">
                  Whether you're on desktop, tablet, or mobile, TiksSave works seamlessly across all devices.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-3xl font-bold mb-6 text-foreground">How It Works</h2>
            <p className="text-muted-foreground mb-4">
              TiksSave uses publicly available APIs to fetch video information from TikTok. When you
              paste a TikTok URL, we process it through our servers to extract the video download link. 
              We don't host or store any videos - we simply provide a convenient way to access content 
              that's already publicly available.
            </p>
          </section>

          <section className="mb-12 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Legal & Copyright</h2>
            <p className="text-muted-foreground mb-4">
              We respect copyright and intellectual property rights. TiksSave is a tool intended for
              personal use only. Users should only download videos they have the right to access and 
              should respect content creators' rights. For more information, please read our DMCA Policy 
              and Terms of Service.
            </p>
          </section>

          <section className="mb-12 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              TiksSave is not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd.
              TikTok is a trademark of ByteDance Ltd. We are an independent service that provides a 
              technical solution for downloading publicly available content.
            </p>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              Have questions or feedback? We'd love to hear from you. Visit our Contact page to get in touch.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
