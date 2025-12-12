# Dokumentasi Student Affairs Page

## Universitas Teknokrat Indonesia

---

## 📋 Overview

Halaman Student Affairs telah diperbarui dengan desain modern dan interaktif yang menampilkan berbagai layanan kemahasiswaan, organisasi, dan kegiatan mahasiswa.

**File yang dibuat/dimodifikasi:**

1. `StudentAffairs.html` - Halaman utama (dimodifikasi)
2. `student-affairs-styles.css` - File styling
3. `student-affairs.js` - File JavaScript untuk functionality

---

## 🎨 Fitur Utama

### 1. **Carousel/Slider (Gambar Berubah)**

- Menampilkan 5 slide berbeda dengan gambar dan konten
- **Kontrol:**
  - Tombol Prev/Next untuk navigasi manual
  - Tombol dot indicators untuk jump ke slide tertentu
  - Counter menunjukkan posisi saat ini (contoh: "1 / 5")
- **Slide Content:**
  - UKM Programmer
  - UKM Islam
  - UKM Tari
  - UKM HIDATE
  - Layanan Kemahasiswaan

### 2. **Service Cards Grid**

- 6 kartu layanan dengan gambar, judul, dan deskripsi
- Design responsive yang menyesuaikan dengan ukuran layar
- Hover effect yang interaktif
- Tombol "Selengkapnya" untuk setiap layanan

### 3. **Navigasi Atas**

- Menu horizontal dengan 8 menu utama
- Styling modern dengan highlight active
- Responsive design untuk mobile

### 4. **Header & Footer**

- Header dengan logo dan judul
- Footer lengkap dengan kontak, tautan cepat, social media, dan informasi

---

## 🖼️ Gambar yang Digunakan

Berikut gambar dari folder "Kumpulan foto" yang digunakan:

| Slide/Card       | Gambar                   | Keterangan               |
| ---------------- | ------------------------ | ------------------------ |
| Carousel Slide 1 | `UKM-PROGRAMMER.jpg`     | UKM Programmer           |
| Carousel Slide 2 | `UKM-ISLAM.jpg`          | UKM Islam                |
| Carousel Slide 3 | `UKM-TARI.jpg`           | UKM Tari                 |
| Carousel Slide 4 | `UKM-HIDATE.jpg`         | UKM HIDATE               |
| Carousel Slide 5 | `BCommX.png`             | Layanan Kemahasiswaan    |
| Card 1           | `TI.jpg`                 | Organisasi Kemahasiswaan |
| Card 2           | `alur-pendaftaran.jpg`   | Layanan Konseling        |
| Card 3           | `jadwal-pendaftaran.png` | Informasi Beasiswa       |
| Card 4           | `Desain-tanpa-judul.png` | Prestasi Mahasiswa       |
| Card 5           | `faq-1.png`              | Inovasi & Kewirausahaan  |
| Card 6           | `XZXZ-X.png`             | Pengabdian Masyarakat    |

---

## ⚙️ JavaScript Functionality

### Class: `StudentAffairsCarousel`

Menangani semua fungsi carousel dengan method:

```javascript
// Constructor
new StudentAffairsCarousel(containerId);

// Methods:
.next()           // Pindah ke slide berikutnya
.prev()           // Kembali ke slide sebelumnya
.goToSlide(index) // Pindah ke slide tertentu
.updateCarousel() // Update posisi carousel
.autoPlay()       // Auto-play carousel (opsional)
```

### Navigation Functions

```javascript
home(); // Ke halaman Home
profil(); // Ke halaman Profil
academic(); // Ke halaman Academic
facility(); // Ke halaman Facility
admission(); // Ke halaman Admission
scholarship(); // Ke halaman Scholarship
studentAffairs(); // Ke halaman Student Affairs
onlineApplicationForm(); // Ke halaman Online Application Form
downloadFiles(); // Ke halaman Download Files
```

---

## 🎯 Cara Menggunakan

### 1. **Navigasi Carousel**

```
- Klik tombol ❮ untuk slide sebelumnya
- Klik tombol ❯ untuk slide berikutnya
- Klik dot (●) untuk jump ke slide tertentu
```

### 2. **Menambah Slide Carousel**

Tambahkan div baru di dalam `.carousel`:

```html
<div class="carousel-item">
  <img src="path/to/image.jpg" alt="Title" />
  <h2>Judul Slide</h2>
  <h3>Subtitle</h3>
  <p>Deskripsi slide...</p>
</div>
```

Update juga jumlah dots di `.carousel-indicators`:

```html
<span class="dot"></span>
<!-- Tambah sesuai jumlah slide -->
```

### 3. **Mengubah Konten Service Cards**

Edit atau tambahkan card di section `.cards-grid`:

```html
<div class="service-card">
  <img src="path/to/image.jpg" alt="Title" />
  <div class="service-card-content">
    <h3>Judul Layanan</h3>
    <p>Deskripsi layanan...</p>
    <a href="#" class="btn">Selengkapnya</a>
  </div>
</div>
```

### 4. **Mengaktifkan Auto-play Carousel**

Di file `student-affairs.js`, uncomment baris ini dalam `init()`:

```javascript
this.autoPlay(); // Setiap 5 detik
```

---

## 🎨 Customization

### Warna Utama (Brand Colors)

- Merah Tua: `#8b0000`
- Merah Brand: `#c41e3a`
- Gold/Emas: `#f39c12`
- Dark: `#2c3e50`

Untuk mengubah warna, edit di file `student-affairs-styles.css`:

```css
/* Contoh: ubah warna tombol */
.carousel-btn {
  background: #c41e3a; /* Ubah warna sini */
}
```

### Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 480px

---

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Browsers

---

## 📁 File Structure

```
Tugas css ftik/
├── html/
│   ├── StudentAffairs.html      (UTAMA - diperbarui)
│   ├── StudentAffairs_New.html  (Backup)
│   └── ... file HTML lainnya
├── student-affairs-styles.css   (CSS - BARU)
├── student-affairs.js           (JavaScript - BARU)
├── eksternal.css
├── style-hero.css
├── home-styles.css
└── Kumpulan foto/
    ├── UKM-PROGRAMMER.jpg
    ├── UKM-ISLAM.jpg
    ├── UKM-TARI.jpg
    ├── UKM-HIDATE.jpg
    └── ... gambar lainnya
```

---

## 🚀 Optimasi & Performance Tips

1. **Lazy Loading Gambar** (Opsional)
   Tambahkan atribut `loading="lazy"` pada tag `<img>` untuk kinerja lebih baik

2. **Minify CSS & JS**
   Untuk production, gunakan minified version dari CSS dan JS

3. **Image Optimization**
   Kompresi gambar sebelum upload untuk mempercepat loading

4. **Caching**
   Browser caching secara otomatis akan improve performance

---

## 🐛 Troubleshooting

### Carousel tidak berfungsi

- Pastikan file `student-affairs.js` ter-link dengan benar
- Periksa browser console untuk error messages (F12 → Console)

### Gambar tidak tampil

- Verifikasi path gambar sudah benar
- Pastikan file gambar ada di folder `Kumpulan foto/`

### Styling tidak sesuai

- Clear browser cache (Ctrl+Shift+Delete)
- Verifikasi file CSS ter-link dengan benar
- Periksa file tidak ada konflik styling

---

## 📝 Notes

- Halaman sudah **fully responsive** untuk semua ukuran layar
- Semua konten dapat dengan mudah di-customize sesuai kebutuhan
- JavaScript menggunakan **vanilla JS** (tanpa library eksternal)
- Compatible dengan semua browser modern

---

## 👨‍💻 Developer Info

**Dibuat dengan:**

- HTML5
- CSS3 (Grid, Flexbox, Gradients)
- Vanilla JavaScript (ES6)

**Inspirasi:** kemahasiswaan.teknokrat.ac.id

---

## ✅ Checklist Implementasi

- [x] Carousel dengan 5 slide
- [x] Navigation prev/next buttons
- [x] Dot indicators
- [x] Counter posisi slide
- [x] Service cards grid (6 items)
- [x] Responsive design
- [x] Modern styling
- [x] Footer dengan kontak info
- [x] JavaScript untuk interaktivitas
- [x] Semua gambar terintegrasi

---

**Last Updated:** 2025-12-11
