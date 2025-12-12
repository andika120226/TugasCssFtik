# Panduan Kustomisasi Student Affairs Page

## 🎨 Cara Menambah Slide Carousel

### Contoh: Menambahkan slide baru UKM Olahraga

**Langkah 1:** Tambahkan HTML slide baru di antara carousel-item lainnya

```html
<!-- Slide Baru: UKM Olahraga -->
<div class="carousel-item">
  <img src="../Kumpulan foto/nama-gambar-olahraga.jpg" alt="UKM Olahraga" />
  <h2>UKM Olahraga</h2>
  <h3>Unit Kegiatan Mahasiswa (UKM)</h3>
  <p>Deskripsi tentang UKM Olahraga...</p>
</div>
```

**Langkah 2:** Tambahkan 1 dot indicator:

```html
<span class="dot"></span>
<!-- Tambah sesuai slide baru -->
```

**Langkah 3:** Update counter HTML dari `1 / 5` menjadi `1 / 6`

```html
<span class="carousel-counter">1 / 6</span>
```

---

## 🎯 Cara Mengubah Warna Theme

Edit file `student-affairs-styles.css` dan cari warna berikut:

```css
/* Warna Merah Tua (Primary) */
#8b0000

/* Warna Merah (Accent) */
#c41e3a

/* Warna Gold (Highlight) */
#f39c12

/* Warna Dark (Background) */
#2c3e50
```

**Contoh:** Ubah semua merah menjadi biru

```css
/* Ganti semua #8b0000 dengan #003366 */
/* Ganti semua #c41e3a dengan #004499 */
```

---

## 🖼️ Cara Mengganti Gambar Carousel

Ubah path `src` di tag `<img>`:

```html
<!-- Dari -->
<img src="../Kumpulan foto/UKM-PROGRAMMER.jpg" alt="UKM Programmer" />

<!-- Menjadi -->
<img src="../Kumpulan foto/gambar-baru-anda.jpg" alt="Judul Baru" />
```

---

## 📝 Cara Mengedit Teks Slide

```html
<!-- Ubah Judul -->
<h2>Judul Slide Baru</h2>

<!-- Ubah Subtitle -->
<h3>Subtitle Baru</h3>

<!-- Ubah Deskripsi -->
<p>Teks deskripsi baru yang lebih panjang...</p>
```

---

## ✏️ Cara Edit Service Cards

### Mengubah card existing:

```html
<!-- Sebelum -->
<div class="service-card">
  <img src="../Kumpulan foto/TI.jpg" alt="Organisasi Kemahasiswaan" />
  <div class="service-card-content">
    <h3>Organisasi Kemahasiswaan</h3>
    <p>Deskripsi lama...</p>
    <a href="#" class="btn">Selengkapnya</a>
  </div>
</div>

<!-- Sesudah -->
<div class="service-card">
  <img src="../Kumpulan foto/gambar-baru.jpg" alt="Judul Baru" />
  <div class="service-card-content">
    <h3>Judul Layanan Baru</h3>
    <p>Deskripsi baru yang lebih menarik...</p>
    <a href="link-ke-halaman.html" class="btn">Selengkapnya</a>
  </div>
</div>
```

### Menambah card baru:

```html
<!-- Tambahkan sebelum </div> yang menutup .cards-grid -->
<div class="service-card">
  <img src="../Kumpulan foto/gambar-baru.jpg" alt="Judul Baru" />
  <div class="service-card-content">
    <h3>Judul Layanan Baru</h3>
    <p>Deskripsi layanan baru Anda di sini...</p>
    <a href="#" class="btn">Selengkapnya</a>
  </div>
</div>
```

---

## 🔗 Cara Mengubah Link Navigation

Edit di bagian `<nav>`:

```html
<!-- Sebelum -->
<li><a href="javascript:void(0)">📚 Organisasi Mahasiswa</a></li>

<!-- Sesudah - dengan link ke halaman -->
<li><a href="halaman-target.html">📚 Organisasi Mahasiswa</a></li>
```

---

## 📞 Cara Update Kontak di Footer

Edit section "Hubungi Kami":

```html
<div class="footer-section">
  <h3>📍 Hubungi Kami</h3>
  <p><strong>Direktorat Kemahasiswaan</strong></p>
  <p>
    Jl. Z.A. Pagaralam, No.9-11 Labuhan Ratu<br />
    Kota Bandar Lampung, Lampung 35132
  </p>
  <p>
    📞 (0721) 702022 (Hunting)<br />
    💬 0858-3051-2141 (Chat Only)<br />
    📧 uti@teknokrat.ac.id
  </p>
</div>
```

---

## 🎬 Cara Mengaktifkan Auto-Play Carousel

Di file `student-affairs.js`, cari method `init()`:

```javascript
init() {
  // ... code sebelumnya ...
  this.updateCarousel();

  // Uncomment baris ini untuk enable auto-play:
  this.autoPlay();  // Akan berganti slide otomatis setiap 5 detik
}
```

---

## 📐 Cara Mengubah Ukuran Carousel

Edit di `student-affairs-styles.css`:

```css
.carousel-item img {
  max-width: 100%;
  max-height: 400px; /* Ubah nilai ini untuk memperbesar/mengecil gambar */
  object-fit: contain;
  margin: 0 auto 30px;
}
```

---

## 🎨 Cara Mengubah Typography (Font)

Defaultnya menggunakan "Poppins". Untuk mengubah:

```css
/* Di bagian atas file CSS */
body {
  font-family: "Nama Font Baru", sans-serif;
}
```

Atau import font baru dari Google Fonts:

```html
<!-- Di <head> tag -->
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

Kemudian gunakan:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

---

## 💻 Quick Edit Checklist

- [ ] Tambah/edit slide carousel
- [ ] Update dot indicators
- [ ] Ganti gambar carousel
- [ ] Edit teks slide
- [ ] Tambah/edit service cards
- [ ] Ubah warna theme
- [ ] Update kontak footer
- [ ] Aktifkan auto-play (opsional)
- [ ] Test di berbagai ukuran layar (F12 → Responsive Design Mode)

---

## 🧪 Testing Responsivitas

**Chrome DevTools (F12):**

1. Buka DevTools (F12)
2. Klik icon Toggle Device Toolbar (Ctrl+Shift+M)
3. Test berbagai ukuran:
   - Mobile: 375px (iPhone)
   - Tablet: 768px (iPad)
   - Desktop: 1024px+

**Harus test di:**

- ✅ Desktop (1920px)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

---

## 📊 CSS Grid Reference

Service cards menggunakan CSS Grid yang responsive:

```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
```

Artinya:

- Setiap card minimal 280px lebar
- Auto-fit columns sesuai ukuran viewport
- Gap (jarak) 30px antar card

---

## 🐞 Common Issues & Solutions

| Problem               | Solution                                       |
| --------------------- | ---------------------------------------------- |
| Gambar tidak tampil   | Cek path relatif: `../Kumpulan foto/nama.jpg`  |
| Carousel tidak jalan  | Pastikan `student-affairs.js` ter-link         |
| Styling berantakan    | Clear cache (Ctrl+Shift+Delete)                |
| Text terpotong mobile | Kurangi padding di `@media (max-width: 480px)` |
| Gambar terlalu besar  | Kurangi `max-height` di `.carousel-item img`   |

---

## 🎓 Tips Pro

1. **Selalu backup** sebelum edit besar-besaran
2. **Use DevTools** untuk inspect element dan debugging
3. **Test di mobile first** untuk UX lebih baik
4. **Kompresi gambar** untuk faster loading
5. **Gunakan semantic HTML** untuk accessibility

---

**Happy customizing! 🚀**
