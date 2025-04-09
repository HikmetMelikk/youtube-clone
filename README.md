# YouTube Clone

Bu proje, YouTube'un modern arayüzünü klonlayan bir React uygulamasıdır. Vite, React, SCSS ve YouTube API kullanılarak geliştirilmiştir.

<img src="/src/assets/youtube.svg" alt="YouTube Clone Screenshot" width="200" >

## 📋 Özellikler

- **Responsive Tasarım**: Farklı ekran boyutlarına uyumlu tasarım
- **YouTube API Entegrasyonu**: Gerçek YouTube verileriyle çalışma
- **Video İçerik Görüntüleme**: Ana sayfa, arama sonuçları ve video detay sayfaları
- **Shorts Görüntüleme**: YouTube Shorts benzeri kısa video formatı
- **Arama Fonksiyonu**: Video içeriklerinde arama yapabilme
- **Açılıp Kapanabilen Sidebar**: YouTube'a benzer yan menü deneyimi
- **Yorumlar ve Açıklamalar**: Video detay sayfasında yorum ve açıklama görüntüleme
- **İlgili Video Önerileri**: İzlenen video ile ilgili diğer videoları görüntüleme

## 🛠️ Kullanılan Teknolojiler

- **React 19**: UI geliştirme için
- **Vite**: Hızlı geliştirme ortamı için
- **SCSS**: Gelişmiş stil özellikleri için
- **React Router**: Sayfa yönlendirmeleri için
- **React Icons**: UI ikonları için
- **YouTube Data API v3**: Video ve içerik verileri için

## 🚀 Kurulum ve Çalıştırma

### Ön Koşullar

- Node.js (v18 veya üzeri)
- npm veya yarn
- YouTube Data API v3 API anahtarı

### Kurulum Adımları

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/youtube-clone.git
   cd youtube-clone
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   ```

3. `.env` dosyası oluşturun ve YouTube API anahtarınızı ekleyin:
   ```
   VITE_YOUTUBE_API_KEY=sizin_api_anahtariniz
   ```

4. Uygulamayı çalıştırın:
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

5. Tarayıcınızda `http://localhost:5173` adresine giderek uygulamayı görüntüleyin.

## 📁 Proje Yapısı

```
youtube-clone/
├── public/              # Statik dosyalar
├── src/
│   ├── assets/          # Görseller ve SVG dosyaları
│   ├── client/          # API istemcileri
│   ├── components/      # UI bileşenleri
│   │   ├── landing-content/ # Ana sayfa içerikleri
│   │   ├── navbar/      # Üst menü bileşenleri
│   │   ├── search-result/ # Arama sonuçları
│   │   ├── shorts/      # Shorts bileşenleri
│   │   ├── sidebar/     # Yan menü bileşenleri
│   │   └── video/       # Video oynatıcı ve detayları
│   ├── routes/          # Sayfa yönlendirmeleri
│   ├── sass/            # SCSS stil dosyaları
│   ├── utils/           # Yardımcı fonksiyonlar
│   ├── views/           # Sayfa görünümleri
│   ├── App.jsx          # Ana uygulama bileşeni
│   ├── App.scss         # Ana stil dosyası
│   ├── main.jsx         # Uygulama giriş noktası
│   └── index.css        # Temel stil tanımlamaları
├── .gitignore
├── eslint.config.js     # ESLint yapılandırması
├── package.json         # Proje bağımlılıkları
├── vite.config.js       # Vite yapılandırması
└── README.md
```

## 📱 Ekran Görüntüleri

- Ana Sayfa
- Shorts Bölümü
- Arama Sonuçları
- Video İzleme Ekranı
- Sidebar (Açık/Kapalı)

## 🧩 Bileşenler

### Ana Bileşenler

- **NavBar**: Üst gezinme çubuğu (logo, arama, profil)
- **Sidebar**: Yan menü (navigasyon, kategoriler)
- **Content**: Ana sayfa içerik akışı
- **VideoCard**: Video önizleme kartları
- **ShortsContent**: Shorts akışı
- **VideoDetails**: Video oynatıcı ve ilgili bilgiler
- **SearchResultContent**: Arama sonuçları

### Önemli Sayfalar

- **HomeView**: Ana sayfa görünümü
- **VideoDetailsView**: Video izleme sayfası
- **SearchResultView**: Arama sonuçları sayfası

## 🔜 Geliştirme Planı

- [ ] Giriş yapma özelliği
- [ ] Video yorum bırakma
- [ ] Dark/Light tema seçenekleri
- [ ] Video bildirimleri
- [ ] İzleme geçmişi
- [ ] Playlist oluşturma


## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje [MIT lisansı](LICENSE) ile lisanslanmıştır.

## 📞 İletişim

Proje sahibi - [@github_kullanici](https://github.com/kullanici)

Proje linki: [https://github.com/kullanici/youtube-clone](https://github.com/kullanici/youtube-clone)
