const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// addEventListener for button
$('button').addEventListener('click', function(){
    var sinhVien = new SinhVienBT1();
    sinhVien.maSinhVien = $('#txtMaSV').value;
    sinhVien.tenSV = $('#txtTenSV').value;
    sinhVien.loaiSV = $('#loaiSV').value;
    sinhVien.diemToan = $('#txtDiemToan').value;
    sinhVien.diemVan = $('#txtDiemVan').value;

    // console.log(sinhVien); 
    // print result
    $('#spanTenSV').innerHTML = sinhVien.tenSV;
    $('#spanMaSV').innerHTML = sinhVien.maSinhVien;
    $('#spanLoaiSV').innerHTML = sinhVien.loaiSV;
    $('#spanDTB').innerHTML = sinhVien.tinhDiemTB();
    $('#spanXepLoai').innerHTML = sinhVien.xepLoai();

})