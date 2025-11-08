import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-card/30">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="TiksSave Logo" 
              className="w-10 h-10 rounded-xl transition-all duration-300 group-hover:shadow-[var(--shadow-glow)]"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TiksSave
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/discord" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Discord
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/50 backdrop-blur-sm mt-auto bg-card/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="TiksSave" className="w-8 h-8 rounded-lg" />
                <span className="font-bold text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  TiksSave
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fast and free TikTok video downloader. Save videos without watermark.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm text-foreground">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Downloader
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/dmca" className="hover:text-primary transition-colors">
                    DMCA
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm text-foreground">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/discord" className="hover:text-primary transition-colors">
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
            <p>© 2025 TiksSave. All rights reserved. Not affiliated with TikTok or ByteDance Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
