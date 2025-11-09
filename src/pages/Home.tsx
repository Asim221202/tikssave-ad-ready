[span_0](start_span)import { useState } from "react";[span_0](end_span)
[span_1](start_span)import { Button } from "@/components/ui/button";[span_1](end_span)
[span_2](start_span)import { Input } from "@/components/ui/input";[span_2](end_span)
[span_3](start_span)import { Download, Sparkles, Shield, Zap } from "lucide-react";[span_3](end_span)
[span_4](start_span)import { toast } from "sonner";[span_4](end_span)
[span_5](start_span)import Layout from "@/components/Layout";[span_5](end_span)
// YENİ EKLEME: API istekleri için axios kütüphanesini içe aktar
import axios from "axios"; 

const Home = () => {
  [span_6](start_span)const [url, setUrl] = useState("");[span_6](end_span)
  [span_7](start_span)const [loading, setLoading] = useState(false);[span_7](end_span)
  // YENİ EKLEME: Başarılı API isteği sonrası dönen shortId'yi tutmak için state
  const [shortId, setShortId] = useState<string | null>(null); 

  // --- GÜNCELLENMİŞ handleDownload İŞLEVİ (ESKİSİNİN YERİNE GEÇER) ---
  const handleDownload = async () => {
    // 1. Geçerlilik Kontrolü
    if (!url.trim()) {
      [span_8](start_span)toast.error("Please enter a TikTok URL");[span_8](end_span)
      [span_9](start_span)return;[span_9](end_span)
    }

    if (!url.includes("tiktok.com")) {
      [span_10](start_span)toast.error("Please enter a valid TikTok URL");[span_10](end_span)
      [span_11](start_span)return;[span_11](end_span)
    }

    [span_12](start_span)setLoading(true);[span_12](end_span)
    setShortId(null); 

    // 2. API İsteği
    try {
      // Back-end'deki TikTok işleme rotasına POST isteği gönder
      const response = await axios.post("/api/tiktok-process", { 
        url: url // Back-end'in beklediği 'url' parametresi
      });

      if (response.data.success && response.data.shortId) {
        
        // 3. Başarılı Sonuç
        const newShortId = response.data.shortId;
        setShortId(newShortId); 

        toast.success("Video is ready for download! Redirecting you now...", {
            duration: 3000
        });
        
        // Kullanıcıyı, back-end'in indirme mantığını işlediği ShortId rotasına yönlendir
        window.location.href = `/${newShortId}`;

      } else {
        // API'dan başarılı yanıt gelse bile success: false dönme ihtimali
        toast.error("Processing failed: Could not get a valid download link.");
      }

    } catch (err) {
      // API isteği sırasında oluşan ağ veya sunucu hatalarını yakala
      let errorMessage = 'An unexpected error occurred. Could not connect to the server.';
      
      if (axios.isAxiosError(err) && err.response) {
          // Sunucudan dönen hata mesajını kullan (eğer varsa)
          errorMessage = err.response.data.message || 'Server processing failed. Please try again.';
      } else if (err instanceof Error) {
          errorMessage = err.message;
      }

      toast.error(`Error: ${errorMessage}`);
      console.error('API Error:', err);

    } finally {
      setLoading(false); //
    }
  };

  return (
    [span_13](start_span)<Layout>[span_13](end_span)
      {/* Hero Section */}
      [span_14](start_span)<section className="container mx-auto px-4 py-20 md:py-32">[span_14](end_span)
        [span_15](start_span)<div className="max-w-4xl mx-auto text-center">[span_15](end_span)
          [span_16](start_span)<div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30">[span_16](end_span)
            [span_17](start_span)<span className="text-sm font-medium bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">[span_17](end_span)
              [span_18](start_span)✨ Fast & Free TikTok Downloader[span_18](end_span)
            </span>
          [span_19](start_span)</div>[span_19](end_span)
          
          [span_20](start_span)<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">[span_20](end_span)
            [span_21](start_span)<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">[span_21](end_span)
              [span_22](start_span)Download TikTok[span_22](end_span)
            </span>
           
            [span_23](start_span)<br />[span_23](end_span)
            [span_24](start_span)<span className="text-foreground">Videos Instantly</span>[span_24](end_span)
          </h1>
          
          [span_25](start_span)<p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">[span_25](end_span)
            [span_26](start_span)Save your favorite TikTok videos in high quality without watermarks.[span_26](end_span)
            [span_27](start_span)No registration required.[span_27](end_span)
          </p>

          {/* Download Form */}
          [span_28](start_span)<div className="relative">[span_28](end_span)
            [span_29](start_span)<div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-20"></div>[span_29](end_span)
            [span_30](start_span)<div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-[var(--shadow-card)]">[span_30](end_span)
              [span_31](start_span)<div className="flex flex-col md:flex-row gap-4">[span_31](end_span)
              
                [span_32](start_span)<Input[span_32](end_span)
                  [span_33](start_span)type="url"[span_33](end_span)
                  [span_34](start_span)placeholder="Paste TikTok video URL here..."[span_34](end_span)
                  [span_35](start_span)value={url}[span_35](end_span)
                  [span_36](start_span)onChange={(e) => setUrl(e.target.value)}[span_36](end_span)
                  [span_37](start_span)className="flex-1 h-14[span_37](end_span) 
                  [span_38](start_span)text-base bg-background/50 border-border/50 focus:border-primary"[span_38](end_span)
                  [span_39](start_span)disabled={loading}[span_39](end_span)
                />
                [span_40](start_span)<Button[span_40](end_span)
                  [span_41](start_span)onClick={handleDownload}[span_41](end_span)
                  [span_42](start_span)disabled={loading}[span_42](end_span)
                  [span_43](start_span)className="h-14 px-8 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300 font-semibold"[span_43](end_span)
                  [span_44](start_span)size="lg"[span_44](end_span)
                >
                  [span_45](start_span){loading ?[span_45](end_span)
                    [span_46](start_span)(
                    <span className="flex items-center gap-2">[span_46](end_span)
                      [span_47](start_span)<div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />[span_47](end_span)
                      [span_48](start_span)Processing...[span_48](end_span)
                    </span>
     
                  [span_49](start_span)) : ([span_49](end_span)
                    [span_50](start_span)<>[span_50](end_span)
                      [span_51](start_span)<Download className="w-5 h-5 mr-2" />[span_51](end_span)
                      [span_52](start_span)Download[span_52](end_span)
                 
                    [span_53](start_span)</>[span_53](end_span)
                  )}
                </Button>
              [span_54](start_span)</div>[span_54](end_span)
              [span_55](start_span)<p className="text-sm text-muted-foreground mt-4 text-left">[span_55](end_span)
                [span_56](start_span)Paste any TikTok video link and download it in seconds - completely free[span_56](end_span)!
              </p>
            [span_57](start_span)</div>[span_57](end_span)
          [span_58](start_span)</div>[span_58](end_span)
        [span_59](start_span)</div>[span_59](end_span)
      [span_60](start_span)</section>[span_60](end_span)

      {/* Features */}
      [span_61](start_span)<section className="container mx-auto px-4 py-16 md:py-24">[span_61](end_span)
        [span_62](start_span)<div className="max-w-6xl mx-auto">[span_62](end_span)
          [span_63](start_span)<div className="grid md:grid-cols-3 gap-6">[span_63](end_span)
            [span_64](start_span){[[span_64](end_span)
          
              [span_65](start_span){
                icon: Zap,[span_65](end_span)
                [span_66](start_span)title: "Lightning Fast",[span_66](end_span)
                [span_67](start_span)description: "Download videos in seconds with our optimized servers"[span_67](end_span)
              },
              [span_68](start_span){
         
                icon: Shield,[span_68](end_span)
                [span_69](start_span)title: "100% Safe",[span_69](end_span)
                [span_70](start_span)description: "No registration required. Your privacy is protected"[span_70](end_span)
              },
              [span_71](start_span){
                icon: Sparkles,[span_71](end_span)
      
                [span_72](start_span)title: "High Quality",[span_72](end_span)
                [span_73](start_span)description: "Get the best quality videos without watermarks"[span_73](end_span)
              }
            [span_74](start_span)].map((feature, index) => ([span_74](end_span)
              [span_75](start_span)<div[span_75](end_span)
                [span_76](start_span)key={index}[span_76](end_span)
      
                [span_77](start_span)className="group relative"[span_77](end_span)
              >
                [span_78](start_span)<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>[span_78](end_span)
                [span_79](start_span)<div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">[span_79](end_span)
                  [span_80](start_span)<div className="w-12 h-12[span_80](end_span) 
                    [span_81](start_span)rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">[span_81](end_span)
                    [span_82](start_span)<feature.icon className="w-6 h-6 text-background" />[span_82](end_span)
                  </div>
                  [span_83](start_span)<h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>[span_83](end_span)
                  [span_84](start_span)<p className="text-muted-foreground">{feature.description}</p>[span_84](end_span)
        
                [span_85](start_span)</div>[span_85](end_span)
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      [span_86](start_span)<section className="container mx-auto px-4 py-16 md:py-24">[span_86](end_span)
        [span_87](start_span)<div className="max-w-4xl mx-auto">[span_87](end_span)
          [span_88](start_span)<h2[span_88](end_span) 
            [span_89](start_span)className="text-3xl md:text-5xl font-bold text-center mb-4">[span_89](end_span)
            [span_90](start_span)<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">[span_90](end_span)
              [span_91](start_span)How It Works[span_91](end_span)
            </span>
          </h2>
          [span_92](start_span)<p className="text-center text-muted-foreground mb-12 text-lg">[span_92](end_span)
            [span_93](start_span)Download any TikTok video in 3 simple steps[span_93](end_span)
       
          [span_94](start_span)</p>[span_94](end_span)
          
          [span_95](start_span)<div className="space-y-6">[span_95](end_span)
            [span_96](start_span){[[span_96](end_span)
              [span_97](start_span){
                step: "01",[span_97](end_span)
                [span_98](start_span)title: "Copy TikTok Link",[span_98](end_span)
              
                [span_99](start_span)description: "Open TikTok, find your video, tap Share and copy the link"[span_99](end_span)
              },
              [span_100](start_span){
                step: "02",[span_100](end_span)
                [span_101](start_span)title: "Paste URL",[span_101](end_span)
                [span_102](start_span)description: "Paste the link into the input field[span_102](end_span) 
                [span_103](start_span)above"[span_103](end_span)
              },
              [span_104](start_span){
                step: "03",[span_104](end_span)
                [span_105](start_span)title: "Download",[span_105](end_span)
                [span_106](start_span)description: "Click download and save your video instantly"[span_106](end_span)
              }
 
            [span_107](start_span)].map((item, index) => ([span_107](end_span)
              [span_108](start_span)<div key={index} className="flex gap-6 items-start group">[span_108](end_span)
                [span_109](start_span)<div className="relative">[span_109](end_span)
                  [span_110](start_span)<div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>[span_110](end_span)
                  [span_111](start_span)<div className="relative w-16[span_111](end_span) 
                    [span_112](start_span)h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center flex-shrink-0">[span_112](end_span)
                    [span_113](start_span)<span className="text-xl font-bold text-background">{item.step}</span>[span_113](end_span)
                  </div>
                </div>
                [span_114](start_span)<div className="flex-1 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 group-hover:border-primary/50 transition-all duration-300">[span_114](end_span)
        
                  [span_115](start_span)<h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>[span_115](end_span)
                  [span_116](start_span)<p className="text-muted-foreground">{item.description}</p>[span_116](end_span)
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 
      [span_117](start_span){/* FAQ */}[span_117](end_span)
      [span_118](start_span)<section className="container mx-auto px-4 py-16 md:py-24">[span_118](end_span)
        [span_119](start_span)<div className="max-w-4xl mx-auto">[span_119](end_span)
          [span_120](start_span)<h2 className="text-3xl md:text-5xl font-bold text-center mb-4">[span_120](end_span)
            [span_121](start_span)<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">[span_121](end_span)
              [span_122](start_span)FAQ[span_122](end_span)
            </span>
          </h2>
   
          [span_123](start_span)<p className="text-center text-muted-foreground mb-12 text-lg">[span_123](end_span)
            [span_124](start_span)Common questions about TiksSave[span_124](end_span)
          </p>
          
          [span_125](start_span)<div className="space-y-4">[span_125](end_span)
            [span_126](start_span){[[span_126](end_span)
              [span_127](start_span){
                q:[span_127](end_span) 
                [span_128](start_span)"Is TiksSave free to use?",[span_128](end_span)
                [span_129](start_span)a: "Yes[span_129](end_span)!
                [span_130](start_span)TiksSave is completely free with no hidden charges or subscriptions."[span_130](end_span)
              },
              [span_131](start_span){
                q: "Do I need to create an account?",[span_131](end_span)
                [span_132](start_span)a: "No registration required.[span_132](end_span)
                [span_133](start_span)Simply paste the URL and download instantly."[span_133](end_span)
              },
              [span_134](start_span){
                q: "Can I download videos without watermark?",[span_134](end_span)
                [span_135](start_span)a: "Yes, we provide high quality downloads without TikTok watermarks."[span_135](end_span)
              },
     
              [span_136](start_span){
                q: "Is it safe to use?",[span_136](end_span)
                [span_137](start_span)a: "Absolutely[span_137](end_span)!
                [span_138](start_span)We don't store your data or require any personal information."[span_138](end_span)
              }
            [span_139](start_span)].map((faq, index) => ([span_139](end_span)
              [span_140](start_span)<div key={index} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300">[span_140](end_span)
                [span_141](start_span)<h3 className="font-semibold text-lg mb-2 text-foreground">{faq.q}</h3>[span_141](end_span)
                [span_142](start_span)<p className="text-muted-foreground">{faq.a}</p>[span_142](end_span)
 
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
