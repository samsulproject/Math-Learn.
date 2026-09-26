/* =========================
   DATA MATERI
========================= */

const materi = [

    {
        nama: "Persamaan Linear",
        kategori: "Aljabar",
        rumus: "ax + b = c",
        deskripsi:
            "Persamaan dengan variabel berpangkat satu."
    },

    {
        nama: "Persamaan Kuadrat",
        kategori: "Aljabar",
        rumus: "x = (-b ± √D) / 2a",
        deskripsi:
            "Persamaan yang memiliki pangkat tertinggi dua."
    },

    {
        nama: "Pertidaksamaan",
        kategori: "Aljabar",
        rumus: "ax + b > c",
        deskripsi:
            "Menyelesaikan perbandingan menggunakan simbol pertidaksamaan."
    },

    {
        nama: "Fungsi",
        kategori: "Aljabar",
        rumus: "f(x) = ax + b",
        deskripsi:
            "Hubungan antara input dan output."
    },

    {
        nama: "Eksponen",
        kategori: "Aljabar",
        rumus: "aᵐ × aⁿ = aᵐ⁺ⁿ",
        deskripsi:
            "Operasi bilangan berpangkat."
    },

    {
        nama: "Logaritma",
        kategori: "Aljabar",
        rumus: "logₐ x = y",
        deskripsi:
            "Kebalikan dari operasi perpangkatan."
    },

    {
        nama: "Barisan Aritmetika",
        kategori: "Aljabar",
        rumus: "Un = a + (n − 1)b",
        deskripsi:
            "Barisan dengan beda yang tetap."
    },

    {
        nama: "Barisan Geometri",
        kategori: "Aljabar",
        rumus: "Un = arⁿ⁻¹",
        deskripsi:
            "Barisan dengan rasio yang tetap."
    },

    {
        nama: "Matriks",
        kategori: "Aljabar",
        rumus: "A + B",
        deskripsi:
            "Operasi dasar pada matriks."
    },

    {
        nama: "Sistem Persamaan Linear",
        kategori: "Aljabar",
        rumus: "ax + by = c",
        deskripsi:
            "Menyelesaikan dua atau lebih persamaan."
    },

    {
        nama: "Trigonometri",
        kategori: "Trigonometri",
        rumus: "sin θ = depan / miring",
        deskripsi:
            "Perbandingan sisi pada segitiga siku-siku."
    },

    {
        nama: "Limit",
        kategori: "Kalkulus",
        rumus: "lim f(x)",
        deskripsi:
            "Nilai yang didekati suatu fungsi."
    },

    {
        nama: "Turunan",
        kategori: "Kalkulus",
        rumus: "d(xⁿ)/dx = nxⁿ⁻¹",
        deskripsi:
            "Menentukan perubahan suatu fungsi."
    },

    {
        nama: "Integral",
        kategori: "Kalkulus",
        rumus: "∫xⁿ dx = xⁿ⁺¹/(n+1)+C",
        deskripsi:
            "Kebalikan dari operasi turunan."
    },

    {
        nama: "Statistika",
        kategori: "Statistika",
        rumus: "Mean = Σx / n",
        deskripsi:
            "Mengolah dan menganalisis data."
    },

    {
        nama: "Peluang",
        kategori: "Peluang",
        rumus: "P(A) = n(A) / n(S)",
        deskripsi:
            "Menghitung kemungkinan suatu kejadian."
    },

    {
        nama: "Vektor",
        kategori: "Geometri",
        rumus: "|v| = √(x² + y²)",
        deskripsi:
            "Besaran yang mempunyai arah dan nilai."
    },

    {
        nama: "Geometri",
        kategori: "Geometri",
        rumus: "L = ½ × a × t",
        deskripsi:
            "Menghitung ukuran bangun datar."
    },

    {
        nama: "Program Linear",
        kategori: "Aljabar",
        rumus: "Z = ax + by",
        deskripsi:
            "Optimasi menggunakan pertidaksamaan."
    },

    {
        nama: "Transformasi Geometri",
        kategori: "Geometri",
        rumus: "(x,y) → (x',y')",
        deskripsi:
            "Perubahan posisi atau bentuk suatu objek."
    }

];


/* =========================
   SOAL PERSAMAAN LINEAR
========================= */

function buatSoalPersamaanLinear() {

    const soal = [];

    for (let i = 1; i <= 20; i++) {

        const x = i + 2;

        const b = i;

        const hasil =
            x * x + b;


        soal.push({

            pertanyaan:
                `Tentukan nilai x dari ${x}x + ${b} = ${hasil}.`,

            pilihan: [
                x - 2,
                x,
                x + 2,
                x + 3
            ],

            jawaban: 1,

            langkah: [

                `${x}x + ${b} = ${hasil}`,

                `${x}x = ${hasil} - ${b}`,

                `${x}x = ${x * x}`,

                `x = ${x * x} ÷ ${x}`,

                `<b>x = ${x}</b>`

            ]

        });

    }

    return soal;
}


/* =========================
   VARIABEL QUIZ
========================= */

let materiAktif = 0;

let nomorSoal = 0;

let nilai = 0;

let jawabanDipilih = null;

let sudahMenjawab = false;

let soalAktif = [];


/* =========================
   NAVIGASI HALAMAN
========================= */

function showPage(id) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });


    document
        .getElementById(id)
        .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (id === "materi") {

        tampilkanMateri();

    }


    if (id === "latihan") {

        tampilkanLatihan();

    }


    if (id === "rumus") {

        tampilkanRumus();

    }


    if (id === "nilai") {

        tampilkanNilai();

    }

}


/* =========================
   TAMPILKAN MATERI
========================= */

function tampilkanMateri() {

    const container =
        document.getElementById("daftarMateri");


    container.innerHTML = "";


    materi.forEach((item, index) => {

        container.innerHTML += `

            <div
                class="materi-card"
                onclick="bukaMateri(${index})"
            >

                <div class="materi-number">

                    ${String(index + 1).padStart(2, "0")}

                    • ${item.kategori}

                </div>


                <h3>
                    ${item.nama}
                </h3>


                <p>
                    ${item.deskripsi}
                </p>


                <strong>
                    📖 Materi • 📐 Rumus • 💡 Contoh
                </strong>

            </div>

        `;

    });

}


/* =========================
   BUKA DETAIL MATERI
========================= */

function bukaMateri(index) {

    materiAktif = index;


    const item = materi[index];


    document.getElementById(
        "kategoriMateri"
    ).textContent =
        item.kategori.toUpperCase();


    document.getElementById(
        "judulMateri"
    ).textContent =
        item.nama;


    let langkah;


    if (index === 0) {

        langkah = `

            <div class="langkah">

                <b>Langkah 1</b>

                <br>

                Tulis persamaan:

                <br>

                3x + 6 = 18

            </div>


            <div class="langkah">

                <b>Langkah 2</b>

                <br>

                Kurangi kedua ruas dengan 6.

                <br>

                3x = 18 - 6

                <br>

                3x = 12

            </div>


            <div class="langkah">

                <b>Langkah 3</b>

                <br>

                Bagi kedua ruas dengan 3.

                <br>

                x = 12 ÷ 3

            </div>


            <div class="langkah">

                <b>Langkah 4</b>

                <br>

                Jadi:

                <br>

                <b>x = 4</b>

            </div>

        `;

    } else {

        langkah = `

            <div class="langkah">

                <b>Langkah 1</b>

                <br>

                Identifikasi informasi yang
                diketahui dari soal.

            </div>


            <div class="langkah">

                <b>Langkah 2</b>

                <br>

                Pilih rumus yang sesuai.

            </div>


            <div class="langkah">

                <b>Langkah 3</b>

                <br>

                Masukkan nilai yang diketahui
                ke dalam rumus.

            </div>


            <div class="langkah">

                <b>Langkah 4</b>

                <br>

                Hitung hasilnya dengan teliti.

            </div>

        `;

    }


    document.getElementById(
        "isiMateri"
    ).innerHTML = `

        <div class="detail-box">

            <h3>
                📖 Ringkasan Materi
            </h3>

            <p>
                ${item.deskripsi}
            </p>

        </div>


        <div class="detail-box">

            <h3>
                📐 Rumus Utama
            </h3>

            <div class="rumus-besar">

                ${item.rumus}

            </div>

        </div>


        <div class="detail-box">

            <h3>
                💡 Contoh Soal
            </h3>

            <p>

                Tentukan nilai x:

                <br><br>

                <b>
                    3x + 6 = 18
                </b>

            </p>


            ${langkah}

        </div>


        <button
            class="tombol"
            onclick="mulaiQuiz(${index})"
        >

            📝 Kerjakan 20 Soal

        </button>

    `;


    showPage("detailMateri");

}


/* =========================
   TAMPILKAN LATIHAN
========================= */

function tampilkanLatihan() {

    const container =
        document.getElementById(
            "daftarLatihan"
        );


    container.innerHTML = "";


    materi.forEach((item, index) => {

        container.innerHTML += `

            <div
                class="materi-card"
                onclick="mulaiQuiz(${index})"
            >

                <div class="materi-number">

                    ${String(index + 1).padStart(2, "0")}

                </div>


                <h3>
                    ${item.nama}
                </h3>


                <p>
                    ${item.deskripsi}
                </p>


                <strong>
                    📝 20 SOAL
                </strong>

            </div>

        `;

    });

}


/* =========================
   MULAI QUIZ
========================= */

function mulaiQuiz(index) {

    materiAktif = index;

    nomorSoal = 0;

    nilai = 0;

    jawabanDipilih = null;

    sudahMenjawab = false;


    /*
        Saat ini contoh soal
        yang lengkap dibuat untuk
        Persamaan Linear.
    */

    if (index === 0) {

        soalAktif =
            buatSoalPersamaanLinear();

    } else {

        /*
            Untuk materi lain,
            sementara menggunakan
            soal contoh.
        */

        soalAktif =
            buatSoalPersamaanLinear();

    }


    document.getElementById(
        "quizJudul"
    ).textContent =
        materi[index].nama;


    document.getElementById(
        "quizKategori"
    ).textContent =
        materi[index].kategori.toUpperCase();


    tampilkanSoal();


    showPage("quiz");

}


/* =========================
   TAMPILKAN SOAL
========================= */

function tampilkanSoal() {

    const soal =
        soalAktif[nomorSoal];


    jawabanDipilih = null;

    sudahMenjawab = false;


    document.getElementById(
        "nomorSoal"
    ).textContent =
        `Soal ${nomorSoal + 1} / 20`;


    document.getElementById(
        "nilaiQuiz"
    ).textContent =
        `Nilai: ${nilai}`;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${((nomorSoal + 1) / 20) * 100}%`;


    document.getElementById(
        "pertanyaan"
    ).innerHTML =
        soal.pertanyaan;


    const pilihan =
        document.getElementById(
            "pilihan"
        );


    pilihan.innerHTML = "";


    soal.pilihan.forEach(
        (pilihanItem, index) => {

            pilihan.innerHTML += `

                <button
                    class="pilihan"
                    onclick="pilihJawaban(${index})"
                >

                    ${String.fromCharCode(
                        65 + index
                    )}.

                    ${pilihanItem}

                </button>

            `;

        }
    );


    document.getElementById(
        "pembahasan"
    ).classList.add("hidden");


    document.getElementById(
        "btnPeriksa"
    ).classList.remove("hidden");


    document.getElementById(
        "btnBerikutnya"
    ).classList.add("hidden");

}


/* =========================
   PILIH JAWABAN
========================= */

function pilihJawaban(index) {

    if (sudahMenjawab) return;


    jawabanDipilih = index;


    document
        .querySelectorAll(".pilihan")
        .forEach(
            (button, i) => {

                button.classList.toggle(
                    "selected",
                    i === index
                );

            }
        );

}


/* =========================
   PERIKSA JAWABAN
========================= */

function periksaJawaban() {

    if (jawabanDipilih === null) {

        alert(
            "Silakan pilih jawaban terlebih dahulu."
        );

        return;

    }


    const soal =
        soalAktif[nomorSoal];


    sudahMenjawab = true;


    const pilihan =
        document.querySelectorAll(
            ".pilihan"
        );


    pilihan.forEach(
        (button, index) => {

            if (
                index === soal.jawaban
            ) {

                button.classList.add(
                    "benar"
                );

            }


            if (
                index === jawabanDipilih &&
                index !== soal.jawaban
            ) {

                button.classList.add(
                    "salah"
                );

            }

        }
    );


    if (
        jawabanDipilih ===
        soal.jawaban
    ) {

        nilai += 5;

    }


    let html = `

        <h4>

            ${
                jawabanDipilih === soal.jawaban
                ? "✅ Jawaban Benar!"
                : "❌ Jawaban Belum Tepat"
            }

        </h4>


        <p>

            <b>
                Langkah pengerjaan:
            </b>

        </p>

    `;


    soal.langkah.forEach(
        (step, index) => {

            html += `

                <div class="langkah">

                    ${index + 1}.

                    ${step}

                </div>

            `;

        }
    );


    const pembahasan =
        document.getElementById(
            "pembahasan"
        );


    pembahasan.innerHTML = html;


    pembahasan.classList.remove(
        "hidden"
    );


    document.getElementById(
        "btnPeriksa"
    ).classList.add("hidden");


    document.getElementById(
        "btnBerikutnya"
    ).classList.remove("hidden");


    document.getElementById(
        "nilaiQuiz"
    ).textContent =
        `Nilai: ${nilai}`;

}


/* =========================
   SOAL BERIKUTNYA
========================= */

function soalBerikutnya() {

    if (nomorSoal < 19) {

        nomorSoal++;

        tampilkanSoal();

    } else {

        selesaiQuiz();

    }

}


/* =========================
   SELESAI QUIZ
========================= */

function selesaiQuiz() {

    localStorage.setItem(
        "nilai_" + materiAktif,
        nilai
    );


    document.getElementById(
        "hasilMateri"
    ).textContent =
        materi[materiAktif].nama;


    document.getElementById(
        "hasilNilai"
    ).textContent =
        nilai;


    document.getElementById(
        "hasilText"
    ).textContent =
        `Kamu telah menyelesaikan 20 soal. Nilai kamu adalah ${nilai} dari 100.`;


    showPage("hasil");

}


/* =========================
   ULANGI
========================= */

function ulangLatihan() {

    mulaiQuiz(materiAktif);

}


/* =========================
   RUMUS
========================= */

function tampilkanRumus() {

    const container =
        document.getElementById(
            "daftarRumus"
        );


    const pencarian =
        document
            .getElementById(
                "cariRumus"
            )
            .value
            .toLowerCase();


    container.innerHTML = "";


    materi
        .filter(item =>

            item.nama
                .toLowerCase()
                .includes(pencarian)

        )
        .forEach(item => {

            container.innerHTML += `

                <div class="rumus-card">

                    <small>
                        ${item.kategori}
                    </small>


                    <h3>
                        ${item.nama}
                    </h3>


                    <div class="rumus">

                        ${item.rumus}

                    </div>


                    <p>
                        ${item.deskripsi}
                    </p>

                </div>

            `;

        });

}


document
    .getElementById("cariRumus")
    .addEventListener(
        "input",
        tampilkanRumus
    );


/* =========================
   NILAI
========================= */

function tampilkanNilai() {

    const container =
        document.getElementById(
            "daftarNilai"
        );


    container.innerHTML = "";


    materi.forEach(
        (item, index) => {

            const nilai =
                localStorage.getItem(
                    "nilai_" + index
                ) || 0;


            container.innerHTML += `

                <div class="detail-box">

                    <b>
                        ${item.nama}
                    </b>

                    <br>

                    Nilai:

                    <strong
                        style="color:#2563eb"
                    >

                        ${nilai}

                    </strong>

                </div>

            `;

        }
    );

}


/* =========================
   DARK MODE
========================= */

document
    .getElementById("darkMode")
    .addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );

        }
    );


/* =========================
   START
========================= */

tampilkanMateri();

tampilkanLatihan();

tampilkanRumus();

tampilkanNilai();

showPage("dashboard");