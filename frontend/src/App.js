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

// Telegram Icon Component
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

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const services = [
    {
      icon: <Bot size={28} />,
      title: "AI Agent Sistemleri",
      description: "n8n ve Python tabanlı akıllı agent sistemleri ile iş süreçlerinizi otomatikleştirin."
    },
    {
      icon: <Workflow size={28} />,
      title: "Workflow Otomasyonu",
      description: "CRM, ödeme ve operasyon süreçlerinizi uçtan uca otomatik hale getirin."
    },
    {
      icon: <Database size={28} />,
      title: "Veri Toplama & Scraping",
      description: "Web scraping ve veri sistemleri ile kritik verileri otomatik toplayın."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Web & Mobil Uygulama",
      description: ".NET ve Flutter ile yüksek performanslı web ve mobil uygulamalar geliştirin."
    }
  ];

  const projects = [
    {
      title: "Türkiye Odaklı Uptime Monitoring",
      description: "Telekomünikasyon altyapı sorgulamalarını otomatikleştiren bot sistemi.",
      result: "Günlük 10.000+ sorgu işleme kapasitesi",
      image: "https://i.hizliresim.com/s2hhdww.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "Axiemaps",
      description: "Coğrafi veri analizi ve haritalama platformu.",
      result: "Gerçek zamanlı veri görselleştirme",
      image: "https://i.hizliresim.com/t0qtr3z.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "Whoiser Phishing Detection",
      description: "Domain ve phishing tespiti için gelişmiş güvenlik sistemi.",
      result: "%99.2 doğruluk oranı ile altyapı içerisindeki Phishing hesapları yakalar",
      image: "https://i.hizliresim.com/cya76vl.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];

  const capabilities = [
    "Bonus & kampanya otomasyonu",
    "Ödeme / çekim sistemleri",
    "KYC doğrulama",
    "Müşteri destek otomasyonu",
    "Sosyal medya otomasyonu",
    "Marketing partner analiz otomasyonu",
  ];

  const stats = [
    { value: "7/24", label: "Kesintisiz Çalışma" },
    { value: "10x", label: "Daha Hızlı İşlem" },
    { value: "%90", label: "Düşük Sistem Yükü" },
    { value: "∞", label: "Ölçeklenebilirlik" }
  ];

  const steps = [
    { num: "01", title: "Analiz", description: "İş süreçlerinizi detaylı analiz ediyorum." },
    { num: "02", title: "Planlama", description: "Optimum otomasyon stratejisi oluşturuyorum." },
    { num: "03", title: "Geliştirme", description: "Özel sistemler geliştiriyorum." },
    { num: "04", title: "Otomasyon", description: "Sistemi devreye alıp optimize ediyorum." },
    { num: "05", title: "Marketing", description: "Gelişmiş Chatbotlar ile Telegram, WhatsApp Instagram gibi ortamlarda insansı yapay zeka asistanı" },
  ];

  const pricing = [
    {
      name: "Starter",
      description: "Küçük ölçekli otomasyon projeleri için ideal başlangıç paketi.",
      features: ["Tek workflow otomasyonu", "Temel entegrasyonlar", "E-posta desteği", "1 ay bakım"]
    },
    {
      name: "Growth",
      description: "Büyüyen işletmeler için kapsamlı otomasyon çözümleri.",
      features: ["5 workflow otomasyonu", "AI Agent entegrasyonu", "Öncelikli destek", "3 ay bakım", "Özel dashboard"],
      featured: true
    },
    {
      name: "Full Automation",
      description: "Tüm iş süreçlerinizi otomatikleştiren kurumsal çözüm.",
      features: ["Sınırsız workflow", "Özel AI sistemleri", "7/24 destek", "1 yıl bakım", "Özel entegrasyonlar", "Danışmanlık"]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? '' : 'light'}`} style={{ backgroundColor: 'var(--background)' }}>
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
            {/* Logo */}
            <a href="/" className="flex items-center gap-2" data-testid="logo">
              <span className="text-2xl font-bold" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
                Cod<span style={{ color: 'var(--primary)' }}>Ege</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Hizmetler', 'Projeler', 'Nasıl Çalışır', 'Fiyatlar'].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(['services', 'projects', 'how-it-works', 'pricing'][i])}
                  className="nav-link text-sm font-medium"
                  data-testid={`nav-${item.toLowerCase().replace(' ', '-')}`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="theme-toggle"
                data-testid="theme-toggle"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="https://t.me/egecz"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex btn-primary text-sm"
                data-testid="header-cta"
              >
                İletişime Geç
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden theme-toggle"
                data-testid="mobile-menu-toggle"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 glass border-b"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {['Hizmetler', 'Projeler', 'Nasıl Çalışır', 'Fiyatlar'].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(['services', 'projects', 'how-it-works', 'pricing'][i])}
                  className="text-left py-2"
                  style={{ color: 'var(--text-muted)' }}
                  data-testid={`mobile-nav-${item.toLowerCase().replace(' ', '-')}`}
                >
                  {item}
                </button>
              ))}
              <a
                href="https://t.me/egecz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-sm mt-2"
                data-testid="mobile-header-cta"
              >
                İletişime Geç
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 px-6 relative overflow-hidden bg-grid">
        {/* Background orb */}
        <div className="hero-orb" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
        
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <motion.div {...fadeInUp} className="mb-6">
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{ 
                backgroundColor: 'var(--surface)', 
                border: '1px solid var(--border)',
                color: 'var(--text-muted)'
              }}
            >
              <Zap size={16} style={{ color: 'var(--primary)' }} />
              Yazılım & Otomasyon Uzmanı
            </span>
          </motion.div>

          <motion.h1 
            {...fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 gradient-text"
            style={{ fontFamily: 'Outfit', lineHeight: 1.1 }}
            data-testid="hero-title"
          >
            Manuel İşleri Ortadan<br />Kaldıran Sistemler
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            className="text-base md:text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}
            data-testid="hero-subtitle"
          >
            AI Agent sistemleri, workflow otomasyonu ve özel yazılım çözümleri ile 
            işletmenizin verimliliğini katbekat artırın.
          </motion.p>

          <motion.div 
            {...fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://t.me/egecz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
              data-testid="hero-cta-primary"
            >
              Ücretsiz Analiz Al
              <ChevronRight size={20} />
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary flex items-center justify-center gap-2"
              data-testid="hero-cta-secondary"
            >
              Hizmetleri İncele
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8"
          style={{ color: 'var(--text-muted)' }}
        >
          <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'var(--border)' }}>
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
          </div>
        </motion.div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Problem & Çözüm
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>İş süreçlerinizdeki darboğazları ortadan kaldırıyorum</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Problems */}
            <motion.div 
              {...fadeInUp}
              className="p-8 rounded-3xl"
              style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                  <X size={20} style={{ color: '#ef4444' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-main)' }}>Sorunlar</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Manuel ve tekrarlayan işler",
                  "İnsan hatası riski",
                  "Yavaş süreçler",
                  "Ölçeklenme zorlukları",
                  "Yüksek operasyonel maliyetler"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#ef4444' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div 
              {...fadeInUp}
              className="p-8 rounded-3xl"
              style={{ 
                backgroundColor: 'var(--background)', 
                border: '1px solid var(--primary)',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.1)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-main)' }}>Çözümler</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Tam otomatik iş akışları",
                  "Hatasız sistemler",
                  "Anlık işlem kapasitesi",
                  "Sınırsız ölçeklenebilirlik",
                  "Düşük operasyonel maliyet"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6 bg-grid">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Hizmetlerim
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>İşletmenizi bir sonraki seviyeye taşıyacak çözümler</p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="service-card card-hover"
                data-testid={`service-card-${i}`}
              >
                <div className="icon-container mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Projelerim
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Gerçek dünya problemlerine ürettiğim çözümler</p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="project-card group"
                data-testid={`project-card-${i}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overlay flex flex-col justify-end p-6">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--primary)' }}>
                    <TrendingUp size={16} />
                    {project.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Automation Capabilities */}
      <section className="py-24 md:py-32 px-6 bg-grid">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Otomasyon Yetenekleri
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Otomatikleştirebileceğim iş süreçleri</p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="capability-item"
                data-testid={`capability-${i}`}
              >
                <Zap size={20} style={{ color: 'var(--primary)' }} />
                <span style={{ color: 'var(--text-main)' }}>{cap}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Performans
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Sistemlerimizin sağladığı avantajlar</p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="stat-item rounded-2xl"
                style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                data-testid={`stat-${i}`}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 md:py-32 px-6 bg-grid relative overflow-hidden">
        <div className="hero-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8"
              style={{ fontFamily: 'Outfit', color: 'var(--text-main)', lineHeight: 1.2 }}
              data-testid="differentiation-title"
            >
              "Çoğu geliştirici kod yazar.<br />
              <span style={{ color: 'var(--primary)' }}>Ben iş yükünü ortadan kaldıran sistemler kurarım.</span>"
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Sadece yazılım geliştirmiyorum, işletmenizin operasyonel yükünü azaltan, 
              ölçeklenebilir ve sürdürülebilir sistemler tasarlıyorum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Nasıl Çalışır?
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>4 adımda işletmenizi dönüştürün</p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="text-center p-6"
                data-testid={`step-${i}`}
              >
                <div className="step-number mx-auto mb-6">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 px-6 bg-grid">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Paketler
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>İhtiyacınıza uygun çözümü seçin</p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className={`p-8 rounded-3xl card-hover ${plan.featured ? 'pricing-featured' : ''}`}
                style={{ 
                  backgroundColor: 'var(--surface)', 
                  border: plan.featured ? '2px solid transparent' : '1px solid var(--border)'
                }}
                data-testid={`pricing-card-${i}`}
              >
                {plan.featured && (
                  <div 
                    className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-4"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                  >
                    Popüler
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>
                  {plan.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://t.me/egecz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.featured ? 'btn-primary w-full text-center block' : 'btn-secondary w-full text-center block'}
                  data-testid={`pricing-cta-${i}`}
                >
                  Teklif Al
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="hero-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
              style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}
              data-testid="final-cta-title"
            >
              İşletmenizi Otomatikleştirmeye<br />Hazır mısınız?
            </h2>
            <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Manuel süreçlerinizi otomatikleştirin, operasyonel maliyetlerinizi düşürün 
              ve işinizi ölçeklendirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/egecz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
                data-testid="final-cta-primary"
              >
                <Rocket size={20} />
                Hemen Başla
              </a>
              <a
                href="https://t.me/egecz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
                data-testid="final-cta-secondary"
              >
                Ücretsiz Danışmanlık Al
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
                Cod<span style={{ color: 'var(--primary)' }}>Ege</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://t.me/egecz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm"
                style={{ color: 'var(--text-muted)' }}
                data-testid="footer-telegram"
              >
                <Send size={16} />
                @egecz
              </a>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              © 2024 CodEge. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Telegram Button */}
      <a
        href="https://t.me/egecz"
        target="_blank"
        rel="noopener noreferrer"
        className="telegram-btn pulse-ring"
        data-testid="floating-telegram-btn"
        aria-label="Telegram ile iletişime geç"
      >
        <TelegramIcon />
      </a>
    </div>
  );
}

export default App;
