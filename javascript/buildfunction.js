/*build function*/

function TampilkanNilai() {
    let nilai = 72;
    let nama = "Aldi";
    let matakuliah = "Desain dan analis";
    let kelas = "A6";

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

TampilkanNilai();