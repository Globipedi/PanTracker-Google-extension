function saat() {
    var currentDate = new Date();
var year = currentDate.getFullYear();
var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
var day = ('0' + currentDate.getDate()).slice(-2);
var hours = ('0' + currentDate.getHours()).slice(-2);
var minutes = ('0' + currentDate.getMinutes()).slice(-2);
var seconds = ('0' + currentDate.getSeconds()).slice(-2);
var formattedDate = year + '.' + month + '.' + day + ' ' + hours + ':' + minutes + ':' + seconds;
console.log(formattedDate);
}
function saatcheck() {
    var currentDate = new Date();
var year = currentDate.getFullYear();
var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
var day = ('0' + currentDate.getDate()).slice(-2);
var hours = ('0' + currentDate.getHours()).slice(-2);
var minutes = ('0' + currentDate.getMinutes()).slice(-2);
var seconds = ('0' + currentDate.getSeconds()).slice(-2);
var formattedDate = year + '.' + month + '.' + day;
console.log(formattedDate);




var tbody = document.getElementById("vayBODY"); // tbody elementini seç
var rows = tbody.getElementsByTagName("td"); // tbody içindeki tüm <tr> satırlarını al

// Her bir satırı kontrol et
for (var i = 0; i < rows.length; i++) {
    var anchor = rows[i].getElementsByTagName("a")[0]; // Satırın ilk <a> etiketini al
    var anchorText = anchor.innerText || anchor.textContent; // <a> etiketinin içeriğini al

    // Eğer <a> etiketinin metni "2024.04.28" ile başlıyorsa
    if (anchorText.trim().startsWith("2024.04.28")) {
        // Eşleşme durumunda uyarı göster
        alert("Eşleşti: " + anchorText);
        // Döngüyü sonlandır
        return;
    }
}







}
saat();
saatcheck();



