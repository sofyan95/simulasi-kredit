function calculate() {
    var hargaBarang = parseFloat(document.getElementById('loan-amount').value);
    var uangMuka = parseFloat(document.getElementById('down-payment').value);
    var jangkaWaktu = parseFloat(document.getElementById('loan-term').value);
    
    var totalPinjaman = hargaBarang - uangMuka;
    var bunga = 0.1; // 10% bunga per tahun
    var bungaBulanan = bunga / 12;
    var pembayaranBunga = (totalPinjaman * bungaBulanan).toFixed(2);
    var pembayaranPokok = (totalPinjaman / jangkaWaktu).toFixed(2);
    var pembayaranBulanan = (parseFloat(pembayaranBunga) + parseFloat(pembayaranPokok)).toFixed(2);

    document.getElementById('result').innerHTML = 'Pembayaran Bulanan: Rp ' + pembayaranBulanan;
}
