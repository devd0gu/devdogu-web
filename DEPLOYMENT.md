# devdogu.tr — Dağıtım ve VDS Kurulum Rehberi

Bu rehber, **devdogu.tr** web sitesini hem yerel ortamda test etmek hem de Linux/Ubuntu VDS sunucusuna kurup yayına almak için hazırlanmıştır.

---

## 1. Yerel Ortamda Çalıştırma (Local Development)

Geliştirme sunucusunu yerel ortamda başlatmak için:

```bash
# Bağımlılıkları yükle (zaten yüklü)
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcınızda açın: **`http://localhost:3000`**

---

## 2. Alan Adı (DNS) Yönlendirmesi

`devdogu.tr` alan adınızın yönetim paneline (TRABİS / Domain kayıt firmanız) girerek DNS kayıtlarını VDS IP adresinize yönlendirin:

| Tür | Ad / Host | Değer / Hedef | TTL |
| --- | --- | --- | --- |
| **A** | `@` (veya boş) | `VDS_SUNUCU_IP_ADRESINIZ` | Otomatik / 3600 |
| **A** | `www` | `VDS_SUNUCU_IP_ADRESINIZ` | Otomatik / 3600 |

*(İsteğe bağlı: Cloudflare kullanıyorsanız Proxy'yi açık tutarak ücretsiz SSL ve DDoS koruması alabilirsiniz.)*

---

## 3. VDS Kurulum Yöntemi A: PM2 + Nginx (En Pratik & Hafif Yöntem)

### Adım 1: VDS'e Node.js, PM2 ve Nginx Kurulumu
Ubuntu VDS sunucunuza SSH ile bağlanıp çalıştırın:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git nginx

# Node.js 22 LTS Kurulumu
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# PM2 (Sürekli arka planda çalışma yöneticisi)
sudo npm install -g pm2
```

### Adım 2: Projeyi VDS'e Çekme & Derleme
```bash
# Proje dizinine geç
cd /var/www
git clone https://github.com/devd0gu/devdogu-web.git devdogu
cd devdogu

# Bağımlılıkları yükle ve build al
npm ci
npm run build

# PM2 ile Next.js uygulamasını başlat
pm2 start npm --name "devdogu-web" -- start
pm2 save
pm2 startup
```

### Adım 3: Nginx Yapılandırması (Reverse Proxy)
Yeni bir Nginx ayar dosyası oluşturun:

```bash
sudo nano /etc/nginx/sites-available/devdogu.tr
```

Aşağıdaki yapılandırmayı yapıştırın:

```nginx
server {
    listen 80;
    server_name devdogu.tr www.devdogu.tr;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Ayarları etkinleştirin:
```bash
sudo ln -s /etc/nginx/sites-available/devdogu.tr /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Adım 4: Ücretsiz SSL (HTTPS - Let's Encrypt Certbot)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d devdogu.tr -d www.devdogu.tr
```
Certbot otomatik olarak SSL sertifikasını kurar ve yenileme görevini zamanlar.

---

## 4. VDS Kurulum Yöntemi B: Docker ile Tek Komut

Eğer VDS'inizde Docker kuruluysa:

```bash
cd devdogu
docker compose up -d --build
```

Container `3000` portunda çalışacaktır. Nginx'i yukarıdaki gibi `proxy_pass http://127.0.0.1:3000;` olarak yönlendirmeniz yeterlidir.

---

## 5. Eski Mağaza Bağlantıları Uyumluluk Kontrolü

Aşağıdaki bağlantılar Google Play Store ve harici kaynaklar için 100% aktif kalmaya devam eder:
- `https://devdogu.tr/googleplaygizliliksozlesmesi.html`
- `https://devdogu.tr/PrivacyPolicy/allfileopener/index.html`
- `https://devdogu.tr/PrivacyPolicy/multibrowser/index.html`
- Ve yeni modern linkler: `https://devdogu.tr/privacy/allfileopener`, `https://devdogu.tr/privacy/multibrowser`
