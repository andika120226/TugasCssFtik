#!/usr/bin/env

# 🚀 QUICK START GUIDE - Student Affairs Page

# Universitas Teknokrat Indonesia

---

## ⚡ 5 MENIT QUICK START

### Langkah 1: Buka Halaman

1. Cari file: `html/StudentAffairs.html`
2. Double-click file tersebut
3. Halaman akan terbuka di browser default Anda

### Langkah 2: Test Carousel

1. Klik tombol **❮** (Previous) - harus disabled di slide pertama
2. Klik tombol **❯** (Next) - slide harus berubah
3. Klik **dot (●)** - langsung pindah ke slide itu
4. Lihat counter berubah (1/5, 2/5, dst)

### Langkah 3: Test Responsivitas

1. Buka DevTools: Tekan **F12**
2. Klik icon **Toggle Device Toolbar** (Ctrl+Shift+M)
3. Pilih device: iPhone, iPad, atau desktop size
4. Lihat layout berubah sesuai ukuran layar

### Langkah 4: Customize Content

1. Buka file `StudentAffairs.html` dengan text editor
2. Cari text yang ingin diubah
3. Edit sesuai kebutuhan
4. Save file (Ctrl+S)
5. Refresh browser (F5)

✅ **Selesai dalam 5 menit!**

---

## 📂 FILE STRUCTURE

```
Tugas css ftik/
│
├── 📄 StudentAffairs.html              ← MAIN FILE (Buka ini!)
├── 🎨 student-affairs-styles.css       ← Styling
├── ⚙️  student-affairs.js              ← Functionality
│
├── 📖 DOKUMENTASI_STUDENT_AFFAIRS.md   ← Full Documentation
├── 📚 PANDUAN_KUSTOMISASI.md           ← How to Customize
├── 📝 SUMMARY.md                       ← Project Overview
├── 📋 TEMPLATES_DAN_CHECKLIST.md       ← Extra Templates
├── 🔍 REFERENCE_GUIDE.html             ← View in Browser
│
├── 📁 html/
│   └── StudentAffairs.html (and others)
│
└── 📁 Kumpulan foto/
    ├── UKM-PROGRAMMER.jpg
    ├── UKM-ISLAM.jpg
    ├── UKM-TARI.jpg
    ├── UKM-HIDATE.jpg
    └── ... (gambar lainnya)
```

---

## 🎯 FITUR UTAMA

### ✅ Carousel

- 5 slide dengan gambar dan konten
- Navigation buttons (prev/next)
- Dot indicators
- Counter posisi
- Smooth transitions

### ✅ Service Cards

- 6 kartu layanan
- Gambar responsive
- Hover effects
- Call-to-action buttons

### ✅ Navigation & Footer

- Modern top navigation
- Complete footer dengan kontak
- Social media links
- Responsive design

### ✅ Mobile Responsive

- Desktop: Full layout
- Tablet: 2-column grid
- Mobile: 1-column stack

---

## 🎨 WARNA UTAMA

```
Merah Tua:  #8b0000  (Headings)
Merah:      #c41e3a  (Accent/Buttons)
Gold:       #f39c12  (Highlights)
Dark:       #2c3e50  (Navigation)
```

Untuk mengubah warna: Edit di `student-affairs-styles.css`

---

## 📝 CARA EDIT KONTEN

### Edit Slide Carousel

**Buka:** `html/StudentAffairs.html`

**Cari:** `<div class="carousel-item">`

**Ubah:**

```html
<div class="carousel-item">
  <img src="../Kumpulan foto/UKM-PROGRAMMER.jpg" alt="UKM Programmer" />
  <h2>UKM Programmer</h2>
  <h3>Unit Kegiatan Mahasiswa</h3>
  <p>Teks deskripsi di sini...</p>
</div>
```

### Edit Service Cards

**Buka:** `html/StudentAffairs.html`

**Cari:** `<div class="service-card">`

**Ubah:**

```html
<div class="service-card">
  <img src="../Kumpulan foto/gambar.jpg" alt="Title" />
  <div class="service-card-content">
    <h3>Judul Card</h3>
    <p>Deskripsi card...</p>
    <a href="#" class="btn">Selengkapnya</a>
  </div>
</div>
```

### Edit Footer Contact

**Buka:** `html/StudentAffairs.html`

**Cari:** `<div class="footer-section">` (yang pertama)

**Ubah:** Nama, alamat, nomor telepon, email sesuai kebutuhan

---

## 🔍 TROUBLESHOOTING

### Problem: Carousel tidak jalan

**Solusi:**

- Buka DevTools (F12)
- Cek tab Console untuk errors
- Pastikan `student-affairs.js` ter-link: `<script src="../student-affairs.js"></script>`

### Problem: Gambar tidak tampil

**Solusi:**

- Cek path gambar: `../Kumpulan foto/nama.jpg`
- Pastikan file gambar ada di folder `Kumpulan foto/`
- Buat URL absolut jika path relative tidak bekerja

### Problem: Styling berantakan

**Solusi:**

- Clear browser cache: Ctrl+Shift+Delete
- Refresh halaman: Ctrl+Shift+R (hard refresh)
- Pastikan CSS file ter-link dengan benar

### Problem: Mobile tidak responsive

**Solusi:**

- Pastikan ada tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- Test dengan DevTools Responsive Mode (F12 → Ctrl+Shift+M)
- Check CSS media queries di file styling

---

## 💻 TEXT EDITOR YANG DIREKOMENDASIKAN

1. **VS Code** (Gratis & Powerful) ⭐ RECOMMENDED

   - Download: https://code.visualstudio.com
   - Fitur: Syntax highlighting, Live Preview, Debugging

2. **Notepad++** (Gratis & Ringan)

   - Download: https://notepad-plus-plus.org

3. **Sublime Text** (Gratis + Paid)

   - Download: https://www.sublimetext.com

4. **Atom** (Gratis & Community-Driven)
   - Download: https://atom.io

---

## 🌐 TESTING DI BROWSER

### Chrome/Edge/Firefox

1. Buka browser
2. Tekan Ctrl+O (Open File)
3. Pilih `StudentAffairs.html`
4. Tekan F12 untuk DevTools

### Testing Responsive

1. Tekan F12
2. Klik icon ⌨️ (Toggle device toolbar)
3. Atau: Ctrl+Shift+M
4. Pilih device: iPhone, iPad, Galaxy, custom size

### Check Performance

1. F12 → Network tab
2. F5 untuk reload
3. Lihat loading time setiap file
4. Lihat total size

---

## ⚙️ ADVANCED TIPS

### Aktifkan Auto-Play Carousel

**File:** `student-affairs.js`

**Cari:** `init()` method

**Uncomment:** `this.autoPlay();`

```javascript
init() {
  // ... code sebelumnya ...
  this.updateCarousel();
  this.autoPlay();  // ← Uncomment ini
}
```

### Ubah Warna Theme

**File:** `student-affairs-styles.css`

**Cari:** Warna yang ingin diubah

**Ganti:** Dengan warna baru

```css
/* Contoh: ubah dari merah ke biru */
.carousel-btn {
  background: #c41e3a; /* Lama */
  background: #003366; /* Baru */
}
```

### Menambah Slide

1. Copy `<div class="carousel-item">` block
2. Paste setelah slide terakhir
3. Ubah content (gambar, text, dsb)
4. Tambah `<span class="dot"></span>` di indicators
5. Update counter `1 / 5` → `1 / 6`

---

## 📚 DOKUMENTASI LENGKAP

File dokumentasi tersedia di folder utama:

1. **DOKUMENTASI_STUDENT_AFFAIRS.md** - Referensi lengkap
2. **PANDUAN_KUSTOMISASI.md** - Tutorial step-by-step
3. **SUMMARY.md** - Project overview
4. **TEMPLATES_DAN_CHECKLIST.md** - Extra templates & checklist
5. **REFERENCE_GUIDE.html** - View di browser untuk visual reference

**Baca ini jika:** Ingin informasi lebih detail, fitur advanced, atau troubleshooting

---

## ✅ QUICK CHECKLIST

Sebelum go-live, pastikan:

- [ ] Carousel berfungsi (prev, next, dots)
- [ ] Semua gambar tampil
- [ ] Text/konten sesuai kebutuhan
- [ ] Responsive di mobile (F12)
- [ ] No errors di console (F12)
- [ ] Tested di Chrome, Firefox, Safari
- [ ] Footer contact info benar
- [ ] Social media links benar
- [ ] Navigation links benar
- [ ] Page loads cepat

---

## 🚀 NEXT STEPS

### Langkah Pertama:

1. Open `StudentAffairs.html` di browser
2. Test semua fitur carousel
3. Periksa mobile responsivitas

### Langkah Berikutnya:

1. Edit konten sesuai kebutuhan
2. Ganti gambar jika diperlukan
3. Update warna/styling jika ingin
4. Test di berbagai browser

### Terakhir:

1. Deploy ke website
2. Update link navigasi dari halaman lain
3. Monitor performance
4. Gather user feedback

---

## 🎓 TIPS & TRICKS

**💡 Tip 1:** Selalu backup file sebelum edit besar-besaran

```
StudentAffairs_backup.html (copy dari file original)
```

**💡 Tip 2:** Gunakan browser DevTools (F12) untuk:

- Inspect element
- Debug JavaScript
- Check network performance
- Test responsive design

**💡 Tip 3:** Kompresi gambar sebelum upload:

- Gunakan TinyPNG.com
- Target: < 100KB per gambar
- Format: JPG untuk foto, PNG untuk icon

**💡 Tip 4:** Test di real devices, bukan hanya browser

- iPhone/iPad
- Android phone
- Tablet
- Desktop

---

## 📞 SUPPORT

**Jika ada masalah:**

1. Cek console errors: F12 → Console
2. Baca troubleshooting guide di file dokumentasi
3. Periksa file path dan nama file
4. Clear browser cache dan refresh
5. Try di browser berbeda

**File dokumentasi:**

- Baca DOKUMENTASI_STUDENT_AFFAIRS.md
- Baca PANDUAN_KUSTOMISASI.md
- Lihat REFERENCE_GUIDE.html di browser

---

## 📊 FILE SIZES

- student-affairs-styles.css: ~15 KB
- student-affairs.js: ~3 KB
- StudentAffairs.html: ~8 KB
- Images: ~2-3 MB (semua gambar)
- **Total: ~2.5 MB** (reasonable untuk loading)

---

## 🎉 SELESAI!

Halaman Student Affairs Anda sekarang siap digunakan. Enjoy!

**Status:** ✅ Production Ready
**Browser Support:** Chrome, Firefox, Safari, Edge (latest versions)
**Mobile Support:** iOS 12+, Android 8+

---

**Last Updated:** 11 December 2025  
**Version:** 1.0 (Final)  
**Author:** Design & Development Team

**Made with ❤️ for Universitas Teknokrat Indonesia**

---

# 🎯 QUICK COMMAND REFERENCE

## File Paths

```
Main: html/StudentAffairs.html
CSS: student-affairs-styles.css
JS: student-affairs.js
Docs: DOKUMENTASI_STUDENT_AFFAIRS.md
Guide: PANDUAN_KUSTOMISASI.md
```

## Browser DevTools

```
Open: F12
Mobile Mode: Ctrl+Shift+M
Refresh: F5 (soft) atau Ctrl+Shift+R (hard)
Console: F12 → Console tab
Inspector: F12 → Elements tab
Network: F12 → Network tab
```

## Common Edits

```
Edit Text: Find text → Replace sesuai kebutuhan
Edit Image: Ubah src path di <img> tag
Edit Color: Cari warna hex di CSS → Replace
Edit Size: Ubah width/height/max-height values
```

---

**💬 Questions? Check the documentation files!**
