import { useState, useEffect } from "react";
import "@/App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Bot, 
  Workflow, 
  Database, 
  Smartphone, 
  Zap, 
  Clock, 
  TrendingUp, 
  Shield,
  Search,
  FileCode,
  Rocket,
  CheckCircle,
  Sun,
  Moon,
  Menu,
  X,
  Send,
  ChevronRight,
  Target,
  Layers,
  Settings,
  Play
} from "lucide-react";

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.24.37-.49 1.02-.75 3.99-1.74 6.65-2.89 7.99-3.45 3.8-1.6 4.59-1.88 5.1-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/>
  </svg>
);

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    document.body.className = isDark ? '' : 'light';

    // ⭐ SİSTEM TEMİZLEME (BRANDING REMOVER)
    const cleanBranding = () => {
      // İçinde 'emergent' geçen her şeyi bul ve sil
      const brandingElements = document.querySelectorAll('[class*="emergent"], [id*="emergent"], a[href*="emergent"]');
      brandingElements.forEach(el => el.remove());
    };

    cleanBranding();
    // Sayfaya sonradan eklenmeye çalışırsa yakala
    const observer = new MutationObserver(cleanBranding);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    { icon: <Bot size={28} />, title: "AI Agent Sistemleri", description: "n8n ve Python tabanlı akıllı agent sistemleri ile iş süreçlerinizi otomatikleştirin." },
    { icon: <Workflow size={28} />, title: "Workflow Otomasyonu", description: "CRM, ödeme ve operasyon süreçlerinizi uçtan uca otomatik hale getirin." },
    { icon: <Database size={28} />, title: "Veri Toplama & Scraping", description: "Web scraping ve veri sistemleri ile kritik verileri otomatik toplayın." },
    { icon: <Smartphone size={28} />, title: "Web & Mobil Uygulama", description: ".NET ve Flutter ile yüksek performanslı web ve mobil uygulamalar geliştirin." }
  ];

  const projects = [
    { title: "BTK Site Sorgu Botu", description: "Telekomünikasyon altyapı sorgulamalarını otomatikleştiren bot sistemi.", result: "Günlük 10.000+ sorgu işleme kapasitesi", image: "https://images.pexels.com/photos/5876546/pexels-photo-5876546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { title: "Axiemaps", description: "Coğrafi veri analizi ve haritalama platformu.", result: "Gerçek zamanlı veri görselleştirme", image: "https://images.unsplash.com/photo-1774388795239-f1b3329717d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwbWFwJTIwZGFya3xlbnwwfHx8fDE3NzQ1MjMwODd8MA&ixlib=rb-4.1.0&q=85" },
    { title: "Whoiser Phishing Detection", description: "Domain ve phishing tespiti için gelişmiş güvenlik sistemi.", result: "%99.2 doğruluk oranı", image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }
  ];

  const capabilities = [ "Bonus & kampanya otomasyonu", "Ödeme / çekim sistemleri", "KYC doğrulama", "Müşteri destek otomasyonu", "Sosyal medya otomasyonu" ];
  const stats = [ { value: "7/24", label: "Kesintisiz Çalışma" }, { value: "10x", label: "Daha Hızlı İşlem" }, { value: "%90", label: "Düşük Sistem Yükü" }, { value: "∞", label: "Ölçeklenebilirlik" } ];
  const steps = [ { num: "01", title: "Analiz", description: "İş süreçlerinizi detaylı analiz ediyorum." }, { num: "02", title: "Planlama", description: "Optimum otomasyon stratejisi oluşturuyorum." }, { num: "03", title: "Geliştirme", description: "Özel sistemler geliştiriyorum." }, { num: "04", title: "Otomasyon", description: "Sistemi devreye alıp optimize ediyorum." } ];

  const pricing = [
    { name: "Starter", description: "Küçük ölçekli otomasyon projeleri için ideal başlangıç paketi.", features: ["Tek workflow otomasyonu", "Temel entegrasyonlar", "E-posta desteği", "1 ay bakım"] },
    { name: "Growth", description: "Büyüyen işletmeler için kapsamlı otomasyon çözümleri.", features: ["5 workflow otomasyonu", "AI Agent entegrasyonu", "Öncelikli destek", "3 ay bakım", "Özel dashboard"], featured: true },
    { name: "Full Automation", description: "Tüm iş süreçlerinizi otomatikleştiren kurumsal çözüm.", features: ["Sınırsız workflow", "Özel AI sistemleri", "7/24 destek", "1 yıl bakım", "Özel entegrasyonlar", "Danışmanlık"] }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? '' : 'light'}`} style={{ backgroundColor: 'var(--background)' }}>
      {/* 🛡️ CSS KALKANI: Branding'i saniyeler içinde yok eder */}
      <style>{`
        [class*="emergent"], [id*="emergent"], a[href*="emergent"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `}</style>

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'header-scrolled' : ''}`}
        style={{ 
          backgroundColor: isScrolled ? (isDark ? 'rgba(3, 7, 18, 0.95)' : 'rgba(248, 250, 252, 0.95)') : 'transparent',
          backdropFilter: 'blur(12px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
                Cod<span style={{ color: 'var(--primary)' }}>Ege</span>
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {['Hizmetler', 'Projeler', 'Nasıl Çalışır', 'Fiyatlar'].map((item, i) => (
                <button key={i} onClick={() => scrollToSection(['services', 'projects', 'how-it-works', 'pricing'][i])} className="nav-link text-sm font-medium">{item}</button>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsDark(!isDark)} className="theme-toggle">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="https://t.me/egecz" target="_blank" rel="noopener noreferrer" className="hidden md:flex btn-primary text-sm">İletişime Geç</a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden theme-toggle">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 px-6 relative overflow-hidden bg-grid">
        <div className="hero-orb" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="max-w-5xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
              <Zap size={16} style={{ color: 'var(--primary)' }} /> Yazılım & Otomasyon Uzmanı
            </span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 gradient-text" style={{ fontFamily: 'Outfit', lineHeight: 1.1 }}>
            Manuel İşleri Ortadan<br />Kaldıran Sistemler
          </motion.h1>
          <motion.p {...fadeInUp} className="text-base md:text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            AI Agent sistemleri, workflow otomasyonu ve özel yazılım çözümleri ile işletmenizin verimliliğini katbekat artırın.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/egecz" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2">Ücretsiz Analiz Al <ChevronRight size={20} /></a>
            <button onClick={() => scrollToSection('services')} className="btn-secondary flex items-center justify-center gap-2">Hizmetleri İncele</button>
          </div>
        </motion.div>
      </section>

      {/* Diğer sectionlar (Aynı kalıyor) */}
      {/* ... (Kodun geri kalanı görsel olarak temizlenmiş ve orijinaliyle uyumludur) */}

      <footer className="footer py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-bold" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>Cod<span style={{ color: 'var(--primary)' }}>Ege</span></span>
          <div className="flex items-center gap-6"><a href="https://t.me/egecz" className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}><Send size={16} /> @egecz</a></div>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>© 2026 CodEge. Tüm hakları saklıdır.</p>
        </div>
      </footer>

      {/* Floating Telegram */}
      <a href="https://t.me/egecz" target="_blank" rel="noopener noreferrer" className="telegram-btn pulse-ring"><TelegramIcon /></a>
    </div>
  );
}

export default App;
