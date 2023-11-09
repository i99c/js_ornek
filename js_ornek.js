//? kullanicidan ismini, soyismini, yas alın
//? fonksiyon ile kendini tanıtsın
//? benim adim gökhan, benim soyadim bıyıkoğlu, 21 yaşındayım

function tanit() {
    let kullanicIsmi = prompt('İsim giriniz')
    let kullaniciSoyisim = prompt('Soyisim giriniz')
    let kullaniciYas = prompt('Yaşınızı giriniz')

    return `${kullanicIsmi} ${kullaniciSoyisim} ${kullaniciYas}`
}
console.log(tanit())

// let kullanicIsmi = prompt('İsim giriniz')
// let kullaniciSoyisim = prompt('Soyisim giriniz')
// let kullaniciYas = prompt('Yaşınızı giriniz')

function kendiniTanit(ad, soyad, yas) {
    ad = ad.charAt(0).toUpperCase() + ad.slice(1)
    soyad = soyad.charAt(0).toUpperCase() + soyad.slice(1)

    let tanitma = `Benim adim ${ad}. Benim soyadim ${soyad}. Benim yasim ${yas}`

    return tanitma
}

