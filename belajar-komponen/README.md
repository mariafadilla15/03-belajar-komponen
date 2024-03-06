# **Laporan Praktikum - #02 Components, JSX, dan Props**

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720063|
| Nama |  Maria Fadilla |
| Kelas | TI - 3A |


## **Praktikum 1: Mendefinisikan Komponen**
---
**Membuat project baru**

![Screenshot](assets-report/00.png)

**Membuat Komponen Baru**

Membuat folder baru dan file baru di src/components/profile.tsx

![Screenshot](assets-report/01.png)

Mengimport komponen

![Screenshot](assets-report/02.png)

### **Jawaban Soal 1**

Mengubah isi kode Home() dengan memanfaatkan komponen Profile() yang tadi sudah dibuat dari langkah 1.

```bash
import Profile from "../components/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Ilmuwan yang luar biasa&nbsp;
        </p> 
        <div className="fixed top-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
    </main>
  );
}
```

![Screenshot](assets-report/03.png)

- Dalam bagian ini, saya mempelajari cara mendefinisikan komponon dan cara saya memperbaiki erorr dengan cara menambahkan code di file next.config.js.