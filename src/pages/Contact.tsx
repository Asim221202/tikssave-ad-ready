import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = contactSchema.parse(formData);
      setLoading(true);
      
      // Simulate form submission - implement your actual submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-[var(--shadow-glow)]">
            <Mail className="w-6 h-6 text-background" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Contact Us
          </h1>
        </div>
        
        <p className="text-muted-foreground text-lg mb-12">
          Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  maxLength={255}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  maxLength={2000}
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">
                <MessageSquare className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">General Inquiries</h3>
              <p className="text-muted-foreground mb-4">
                For general questions about our service, features, or how to use TiksSave.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">
                <Mail className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">DMCA & Copyright</h3>
              <p className="text-muted-foreground mb-4">
                For copyright-related matters, please include "DMCA" in your message subject and refer to our DMCA Policy page.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Response Time</h3>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
