import Layout from "@/components/Layout";
import { MessageCircle, Eraser, Video, Zap, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Discord = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const features = [
    {
      icon: Eraser,
      title: "Watermark-Free",
      description: "All videos are delivered clean and ready for sharing, without any distracting TikTok logos or watermarks."
    },
    {
      icon: Video,
      title: "HD Quality & MP3",
      description: "Download videos in the highest available quality or quickly strip the audio to get an MP3 file."
    },
    {
      icon: Zap,
      title: "Instant & Easy",
      description: "No waiting. Use the simple slash command /tiktok and receive your download links in mere seconds."
    }
  ];

  const platforms = [
    { name: "TikTok", icon: "🎵", color: "text-[#fe2c55]" },
    { name: "Instagram", icon: "📷", color: "text-[#E1306C]" },
    { name: "Twitter (X)", icon: "🐦", color: "text-[#1DA1F2]" },
    { name: "More platforms soon", icon: "🔗", color: "text-primary" }
  ];

  const steps = [
    {
      number: 1,
      title: "Use the Slash Command",
      description: "In any text channel where the bot has permission, simply type /tiktok and select the command from the list.",
      image: "https://i.imgur.com/vx9INkX.png"
    },
    {
      number: 2,
      title: "Paste Your Link",
      description: "A popup will appear. Paste the TikTok/Instagram/Twitter video link into the 'url' field and press Enter or click Send.",
      image: "https://i.imgur.com/TjmzfQf.png"
    },
    {
      number: 3,
      title: "Get Your Video",
      description: "The bot will instantly reply with a high-quality video embed, ready for playback, along with dedicated Video and MP3 download buttons.",
      image: "https://i.imgur.com/8RbaVD7.png"
    }
  ];

  const faqs = [
    {
      question: "Is the bot free to use?",
      answer: "Yes, the TiksSave bot is completely free to use in your server with no usage limitations or hidden fees."
    },
    {
      question: "What permissions does it need?",
      answer: "The bot only requires basic permissions to Read Messages, Send Messages, and Embed Links in the channels where you intend to use its commands. It does not require administrative access."
    },
    {
      question: "Does the bot store any data?",
      answer: "No. We respect your privacy. The bot does not log or store any information about the links you download, the content of the videos, or the users who request them."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center py-16 px-6 bg-gradient-to-b from-card/80 to-background rounded-3xl border border-border/50 mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 rounded-2xl bg-[#5865F2] flex items-center justify-center shadow-[0_0_30px_rgba(88,101,242,0.4)] mx-auto">
              <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 199" fill="white">
                <path d="M216.856 16.597C198.36 8.298 179.215 3.068 159.877 0c-2.07 3.639-4.38 8.385-6.014 12.252-17.48-2.633-34.793-2.633-51.772 0-1.635-3.867-4.065-8.613-6.135-12.252-19.338 3.068-38.483 8.298-56.979 16.597C5.818 58.707-3.884 99.622.785 140.043c22.56 16.597 44.476 26.61 66.148 33.93 5.414-7.525 10.197-15.504 14.34-23.905-7.867-2.987-15.379-6.794-22.319-11.511 1.87-1.398 3.74-2.916 5.609-4.314 42.547 19.339 88.897 19.339 131.324 0 1.87 1.398 3.739 2.916 5.609 4.314-6.94 4.837-14.452 8.524-22.319 11.511 4.143 8.401 8.926 16.38 14.22 23.905 21.672-7.32 43.589-17.333 66.149-33.93 5.115-47.232-8.922-87.58-38.606-123.446l-.001-.001ZM85.207 124.838c-12.875 0-23.312-11.729-23.312-26.158 0-14.43 10.314-26.159 23.312-26.159 12.998 0 23.435 11.729 23.312 26.159 0 14.429-10.314 26.158-23.312 26.158Zm85.586 0c-12.875 0-23.312-11.729-23.312-26.158 0-14.43 10.314-26.159 23.312-26.159 12.998 0 23.435 11.729 23.312 26.159 0 14.429-10.314 26.158-23.312 26.158Z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Invite the TiksSave Bot
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The simplest way to download and share TikTok, Instagram, and Twitter videos directly within your Discord server. Enjoy watermark-free videos and MP3 audio instantly.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="h-14 px-8 bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-[0_6px_20px_rgba(88,101,242,0.4)] hover:shadow-[0_8px_25px_rgba(88,101,242,0.6)] transition-all duration-300 font-bold text-lg"
              size="lg"
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1398955028487864390&permissions=51200&integration_type=0&scope=bot+applications.commands', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Add to Your Server
            </Button>
            <Button 
              variant="outline"
              className="h-14 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold text-lg"
              size="lg"
              onClick={() => window.open('https://discord.gg/KyH3EEkswz', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Support Server
            </Button>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Core Bot Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(140,134,252,0.2)] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(140,134,252,0.3)]">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Supported Platforms
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            TiksSave is designed to download TikTok, Instagram and Twitter (X) videos without watermarks. More platforms are coming soon!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 min-w-[140px] text-center"
              >
                <div className={`text-5xl mb-3 ${platform.color}`}>
                  {platform.icon}
                </div>
                <div className="font-semibold text-foreground">{platform.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-xl mb-4 shadow-[0_0_20px_rgba(140,134,252,0.4)]">
                    {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                </div>
                <div className="flex-1">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full max-w-lg mx-auto rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-border/30"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Bot FAQ
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-card/80 transition-colors"
                >
                  <span className="font-semibold text-foreground text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-6 bg-gradient-to-b from-card/80 to-background rounded-3xl border border-border/50">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't waste time with other bots. Add the most reliable multi-platform video downloader to your server today!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="h-14 px-8 bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-[0_6px_20px_rgba(88,101,242,0.4)] hover:shadow-[0_8px_25px_rgba(88,101,242,0.6)] transition-all duration-300 font-bold text-lg"
              size="lg"
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1398955028487864390&permissions=51200&integration_type=0&scope=bot+applications.commands', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Add to Your Server
            </Button>
            <Button 
              variant="outline"
              className="h-14 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold text-lg"
              size="lg"
              onClick={() => window.open('https://discord.gg/KyH3EEkswz', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Support Server
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Discord;
