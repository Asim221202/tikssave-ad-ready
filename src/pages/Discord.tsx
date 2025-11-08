import Layout from "@/components/Layout";
import { MessageCircle, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Discord = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-[var(--shadow-glow)] mx-auto">
              <MessageCircle className="w-10 h-10 text-background" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Join Our Discord
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with thousands of users, get support, share feedback, and stay updated with the latest features.
          </p>

          <Button 
            className="h-14 px-8 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300 font-semibold text-lg"
            size="lg"
            onClick={() => window.open('https://discord.gg/your-server', '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Join Discord Server
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Users,
              title: "Active Community",
              description: "Join thousands of TiksSave users sharing tips and experiences"
            },
            {
              icon: Zap,
              title: "Fast Support",
              description: "Get help quickly from our support team and community members"
            },
            {
              icon: MessageCircle,
              title: "Latest Updates",
              description: "Be the first to know about new features and improvements"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">
                <feature.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h2 className="text-2xl font-bold mb-4 text-foreground">What You'll Find</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-background font-bold">✓</span>
              </div>
              <span>Dedicated support channels for quick help</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-background font-bold">✓</span>
              </div>
              <span>Community discussions and tips sharing</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-background font-bold">✓</span>
              </div>
              <span>Feature announcements and updates</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-background font-bold">✓</span>
              </div>
              <span>Feedback and suggestions channel</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-background font-bold">✓</span>
              </div>
              <span>Fun community events and giveaways</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Discord;
