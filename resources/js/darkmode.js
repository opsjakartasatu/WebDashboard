function toggleDropdown() {
    const dropdown = document.getElementById("themeDropdown");
    dropdown.classList.toggle("hidden");
}

function setTheme(mode) {
    const html = document.documentElement;

    // Hapus semua class mode terlebih dahulu
    html.classList.remove("dark");
    localStorage.removeItem("theme");

    if (mode === "dark") {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else if (mode === "light") {
        // tidak perlu menambah class 'dark' untuk mode terang
        localStorage.setItem("theme", "light");
    } else {
        // Sistem akan mengikuti preferensi sistem pengguna
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            html.classList.add("dark");
        }
        localStorage.setItem("theme", "system");
    }

    // Sembunyikan dropdown setelah memilih
    toggleDropdown();
}

// Pada saat halaman dimuat, cek preferensi yang tersimpan di localStorage
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else if (savedTheme === "system") {
        // Ikuti pengaturan sistem
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
        }
    }
});

// Periksa perubahan sistem (jika mode diatur ke 'system')
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
        if (localStorage.getItem("theme") === "system") {
            if (e.matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    });
