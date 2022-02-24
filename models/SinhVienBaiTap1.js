// tạo các kiểu dữ liệu prototype để lưu trữ thông tin từ giao diện
function SinhVienBT1() {
    this.maSinhVien = '';
    this.tenSV = '';
    this.loaiSV = '';
    this.diemToan = '';
    this.diemVan = '';
    this.tinhDiemTB = function () {
        var dtb = (Number(this.diemToan) + Number(this.diemVan)) / 2;
        return dtb;
    }
    this.xepLoai = function(){
        var diemtong = this.tinhDiemTB();
        var xepLoai = 'Rot';
        if(diemtong >= 5 && diemtong <= 10){
            xepLoai = 'Dau';
        }else if(diemtong <0 && diemtong > 10){
            xepLoai = 'Vui lòng nhập điểm toán và văn hợp lệ'
        }
        return xepLoai;
    }    
}