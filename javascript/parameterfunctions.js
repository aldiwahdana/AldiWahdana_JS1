/*parameter*/
function DisplayNilai(nama, matakuliah, nilai, kelas) {
    if (nilai > 70 && nilai <= 100) {
        console.log(`${nama} lulus matakuliah ${matakuliah} dengan nilai ${nilai} di kelas ${kelas}`);
    }
    else if (nilai > 50 && nilai <= 70) {
        console.log(`${nama} mendapat nilai cukup untuk matakuliah ${matakuliah} dengan nilai ${nilai} di kelas ${kelas}`);
    }
    else {
        console.log(`${nama} tidak lulus matakuliah ${matakuliah} dengan nilai ${nilai} di kelas ${kelas}`);
    }
}

DisplayNilai("Aldi", "Desain dan analis", 72, "A6");