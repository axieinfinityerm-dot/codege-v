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
  Globe,
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
  Play,
  Users,
  Award,
  Lightbulb,
  Lock,
  BarChart3,
  Palette,
  Share2,
  AlertTriangle,
  Building
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
      icon: <Search size={28} />,
      title: "SEO",
      subtitle: "Arama Motoru Optimizasyonu",
      description: "Uzman ekibimiz ile markanızı arama motorlarında üst sıralara taşıyoruz.",
      features: ["600+ destekleyici site altyapısı", "Güçlü backlink stratejileri", "Marka adı sıralama garantisi", "Gambling sektörüne özel SEO teknikleri"]
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Dijital Pazarlama",
      subtitle: "Marketing",
      description: "Geniş network ağımız ile düşük maliyet, yüksek verim odaklı kampanyalar yürütüyoruz.",
      features: ["Telegram, forum ve sosyal medya ağları", "Influencer ve yayıncı iş birlikleri", "Performans bazlı reklam stratejileri", "Hedef kitle odaklı büyüme"]
    },
    {
      icon: <Share2 size={28} />,
      title: "Sosyal Medya Yönetimi",
      subtitle: "Social Media Management",
      description: "Markanızı global ölçekte profesyonel şekilde konumlandırıyoruz.",
      features: ["Çok dilli içerik üretimi", "Özgün tasarım ve paylaşım planı", "Etkileşim artırıcı kampanyalar", "Kurumsal marka yönetimi"]
    },
    {
      icon: <Palette size={28} />,
      title: "Grafik Tasarım",
      subtitle: "Site Giydirme",
      description: "Markanızın görsel kimliğini profesyonel tasarımlarla güçlendiriyoruz.",
      features: ["Kurumsal kimlik tasarımı", "Web sitesi tasarımı", "Sosyal medya görselleri", "Banner ve reklam tasarımları"]
    },
    {
      icon: <Bot size={28} />,
      title: "Yazılım Çözümleri",
      subtitle: "Otomasyon Sistemleri",
      description: "Tüm yazılım ihtiyaçlarınıza özel çözümler sunuyoruz.",
      features: ["BTK site sorgu sistemi ile anlık bildirim", "Özel yazılım geliştirme", "Otomasyon ve takip sistemleri", "Entegre altyapı çözümleri"]
    },
    {
      icon: <Shield size={28} />,
      title: "Phishing Koruma",
      subtitle: "Marka Güvenliği",
      description: "Markanızı sahte sitelere karşı koruyoruz.",
      features: ["Yeni açılan phishing sitelerin erken tespiti", "Yayına girmeden müdahale", "Marka güvenliği odaklı sistem", "Kullanıcı kaybını önleme"]
    }
  ];

  const values = [
    {
      icon: <Award size={32} />,
      title: "Güvenilirlik",
      description: "Tüm süreçlerde şeffaf ve sürdürülebilir iş modeli ile ilerleriz."
    },
    {
      icon: <Target size={32} />,
      title: "Performans Odaklılık",
      description: "Her çalışmada maksimum verim ve ölçülebilir sonuç hedeflenir."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Yenilikçilik",
      description: "Teknoloji ve pazarlama trendlerini yakından takip ederek sürekli gelişim sağlarız."
    }
  ];

  const history = [
    {
      phase: "Başlangıç",
      description: "Sektöre giriş yaparak gambling alanına özel çözümler geliştirmeye başladık."
    },
    {
      phase: "Gelişim Süreci",
      description: "SEO ve marketing alanında güçlü network oluşturduk ve aktif projeler yürüttük."
    },
    {
      phase: "Büyüme",
      description: "Yazılım ve otomasyon sistemleri geliştirerek hizmet kapsamımızı genişlettik."
    },
    {
      phase: "Günümüz",
      description: "Birden fazla markaya uçtan uca hizmet sağlayan, entegre çözümler sunan bir yapı haline geldik."
    }
  ];

  const stats = [
    { value: "600+", label: "Destekleyici Site" },
    { value: "7/24", label: "Kesintisiz Koruma" },
    { value: "50+", label: "Aktif Marka" },
    { value: "%99", label: "Müşteri Memnuniyeti" }
  ];

  const culture = [
    "Dinamik çalışma ortamı",
    "Sürekli gelişim ve öğrenme",
    "Ekip içi koordinasyon",
    "Performans odaklı yaklaşım"
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
                CodEge<span style={{ color: 'var(--primary)' }}>Soft</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Hakkımızda', 'Hizmetler', 'Değerler', 'İletişim'].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(['about', 'services', 'values', 'contact'][i])}
                  className="nav-link text-sm font-medium"
                  data-testid={`nav-${item.toLowerCase()}`}
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
              {['Hakkımızda', 'Hizmetler', 'Değerler', 'İletişim'].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(['about', 'services', 'values', 'contact'][i])}
                  className="text-left py-2"
                  style={{ color: 'var(--text-muted)' }}
                  data-testid={`mobile-nav-${item.toLowerCase()}`}
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
              Dijital Büyüme & Yazılım Çözümleri
            </span>
          </motion.div>

          <motion.h1 
            {...fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 gradient-text"
            style={{ fontFamily: 'Outfit', lineHeight: 1.1 }}
            data-testid="hero-title"
          >
            Markaların Dijital Dünyada<br />Güvenli Büyümesi
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            className="text-base md:text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}
            data-testid="hero-subtitle"
          >
            Geliştirdiğimiz yenilikçi stratejiler ve teknolojik çözümler ile 
            iş ortaklarımıza rekabet avantajı kazandırıyoruz.
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
              Ücretsiz Danışmanlık
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

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Şirket Hakkında
            </h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg" style={{ color: 'var(--text-muted)' }}>
              Gambling sektörüne özel çözümler geliştiren ekibimiz, markaların dijitalde 
              sürdürülebilir büyüme elde etmesini hedeflemektedir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users size={24} />, text: "SEO, marketing ve yazılım alanlarında uzman ekip" },
              { icon: <Globe size={24} />, text: "Uluslararası pazarlara uygun stratejik planlama" },
              { icon: <Target size={24} />, text: "Yüksek performans odaklı çalışma modeli" },
              { icon: <Shield size={24} />, text: "Güvenlik ve marka koruma çözümleri" }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="p-6 rounded-2xl card-hover"
                style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                data-testid={`about-card-${i}`}
              >
                <div className="icon-container mb-4">
                  {item.icon}
                </div>
                <p style={{ color: 'var(--text-muted)' }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 px-6 bg-grid">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Tarihçe
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Başlangıçtan bugüne yolculuğumuz</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {history.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="relative"
                data-testid={`history-${i}`}
              >
                <div className="p-6 rounded-2xl h-full" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="step-number mb-4" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
                    {item.phase}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Hizmetlerimiz
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Gambling sektörüne özel kapsamlı çözümler</p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="service-card card-hover"
                data-testid={`service-card-${i}`}
              >
                <div className="icon-container mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--primary)' }}>
                  {service.subtitle}
                </p>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-6 bg-grid">
        <div className="max-w-7xl mx-auto">
          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="stat-item rounded-2xl"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                data-testid={`stat-${i}`}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 md:py-24 px-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
              Değerlerimiz
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Bizi farklı kılan temel ilkeler</p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="text-center p-6 rounded-2xl card-hover"
                style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                data-testid={`value-${i}`}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)' }}
                >
                  <span style={{ color: 'var(--primary)' }}>{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-main)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 md:py-24 px-6 bg-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
                Kültürümüz
              </h2>
              <p className="mb-8" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Ekip içi iletişimi güçlü, hızlı aksiyon alan ve sonuç odaklı bir çalışma yapısı benimsiyoruz.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {culture.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <CheckCircle size={20} style={{ color: 'var(--primary)' }} />
                    <span style={{ color: 'var(--text-main)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="relative">
              <div 
                className="aspect-square rounded-3xl overflow-hidden"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building size={64} style={{ color: 'var(--primary)', margin: '0 auto' }} />
                    <h3 className="text-2xl font-bold mt-6 mb-2" style={{ color: 'var(--text-main)' }}>
                      CodEgeSoft
                    </h3>
                    <p style={{ color: 'var(--text-muted)' }}>
                      Dijital Büyüme & Yazılım Çözümleri
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phishing Protection Feature */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="order-2 md:order-1">
              <div 
                className="aspect-video rounded-3xl overflow-hidden flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                  border: '1px solid var(--border)' 
                }}
              >
                <div className="text-center p-8">
                  <Shield size={80} style={{ color: 'var(--primary)', margin: '0 auto' }} />
                  <p className="mt-4 text-lg font-semibold" style={{ color: 'var(--text-main)' }}>
                    Whoiser Phishing Detection
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="order-1 md:order-2">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4"
                style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}
              >
                <AlertTriangle size={14} />
                Güvenlik Çözümü
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}>
                Phishing Koruma ve Marka Güvenliği
              </h2>
              <p className="mb-6" style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Siber tehditlere karşı Türkiye genelinde anlık koruma. Markanızı sahte sitelere karşı 
                koruyarak kullanıcı kaybını önlüyoruz.
              </p>
              <ul className="space-y-3">
                {[
                  "Yeni açılan phishing sitelerin erken tespiti",
                  "Yayına girmeden müdahale",
                  "BTK site sorgu sistemi entegrasyonu",
                  "7/24 otomatik izleme ve bildirim"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: 'var(--text-muted)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--primary)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-16 md:py-24 px-6 relative overflow-hidden bg-grid">
        <div className="hero-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
              style={{ fontFamily: 'Outfit', color: 'var(--text-main)' }}
              data-testid="final-cta-title"
            >
              Dijital Büyüme İçin<br />Hazır mısınız?
            </h2>
            <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Gambling sektöründe sürdürülebilir ve güvenli büyüme için 
              uzman ekibimizle iletişime geçin.
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
                CodEge<span style={{ color: 'var(--primary)' }}>Soft</span>
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
              © 2024 CodEgeSoft. Tüm hakları saklıdır.
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
