/*return Function*/
function DisplayNilai(nama, matakuliah, nilai, kelas) {
    if (nilai > 70 && nilai <= 100) {
        return `${nama} lulus matakuliah ${matakuliah} dengan nilai ${nilai} di kelas ${kelas}`;
    } else if (nilai > 50 && nilai <= 70) {
        return `${nama} mendapat nilai cukup untuk matakuliah ${matakuliah} dengan nilai ${nilai} di kelas ${kelas}`;
    } else {
        return `${nama} tidak lulus matakuliah ${matakuliah} dengan nilai ${nilai} di kelas ${kelas}`;
    }
}

const hasilPesan = DisplayNilai("Aldi", "Desain dan analis", 90, "A6");
console.log(hasilPesan);