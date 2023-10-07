/*Nested If*/
var nilai = prompt("Inputkan hasil nilai SNBT anda :");
var keterangan = "";

        if(nilai >= 600) keterangan = "Nilai anda sangat baik"
        else if(nilai >= 400) keterangan = "Nilai anda baik"
        else if(nilai >= 200) keterangan = "Nilai anda mencukupi"
        else keterangan = "Nilai anda masih kurang";
        
        document.write(`keterangan : ${keterangan}`);