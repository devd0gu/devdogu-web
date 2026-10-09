# devdogu.tr — Gelecekteki Yönetim (Admin) Paneli Yol Haritası

Bu proje **Next.js 15 (App Router)** üzerine inşa edildiği için, gelecekte bir admin paneli eklemek istediğinizde **hiçbir şeyi sıfırdan yazmanıza gerek kalmaz**.

---

## 1. Mimari Nasıl Hazırlandı?

Şu anda uygulamalar ve duyurular şu dosyalardan beslenmektedir:
- `src/data/projects.ts`
- `src/data/announcements.ts`
- `src/data/privacyPolicies.ts`

Tüm arayüz bileşenleri `src/types/index.ts` içindeki TypeScript veri tiplerine bağlıdır.

---

## 2. İleride Admin Paneli Eklerken Yapılacaklar (3 Adımda)

### Adım 1: Hafif Veritabanı (SQLite + Prisma veya Drizzle)
Sunucu maliyeti yaratmamak için VDS içinde çalışan tek bir `devdogu.db` SQLite dosyası mükemmeldir:

```bash
npm i prisma @prisma/client
npx prisma init --datasource-provider sqlite
```

### Adım 2: Admin Rotaları ve Yetkilendirme
Next.js App Router sayesinde:
- `src/app/admin/login/page.tsx` (Şifreli giriş ekranı)
- `src/app/admin/dashboard/page.tsx` (Yeni duyuru ekleme, proje güncelleme)
- `src/app/admin/projects/new/page.tsx` (Yeni uygulama kartı oluşturma)

### Adım 3: Server Actions ile Doğrudan Güncelleme
Next.js Server Actions kullanarak form submit edildiğinde veritabanına doğrudan kayıt atılır:
```ts
// src/app/admin/actions.ts
'use server';

export async function createAnnouncement(formData: FormData) {
  // admin oturumu doğrula
  // SQLite veritabanına ekle
  // revalidatePath('/announcements') çağırarak sayfayı anında güncelle
}
```

Böylece kod değiştirmeden veya yeniden deploy etmeden doğrudan tarayıcıdan yeni blog yazısı, yama notu veya uygulama ekleyebilirsiniz!
