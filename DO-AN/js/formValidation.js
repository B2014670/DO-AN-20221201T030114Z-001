var frm = document.forms['frmDangKy'];
frm.addEventListener('submit',function(e){
    frmValidate();
})

//check validate dang ky
function frmValidate(e){
    event.preventDefault();
    var frm = document.forms['frmDangKy'];
    var name1 =frm.name
    var email =frm.email
    var sdt =frm.sdt
    var pw =frm.password
    var pw2 =frm.password2
    var checkbox1 =frm.checkbtn
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if ( name1.value.length == 0 ){
        alert('Tên đăng nhập không được trống')
        name1.focus()
        return false
    }
    if ( email.value.length == 0 ){
        alert('Địa chỉ mail không được trống')
        email.focus()
        return false
    }
    if ( sdt.value.length == 0 || sdt.value.length <10 ){
        alert('Hãy nhập số điện thoại gồm 10 chữ số')
        sdt.focus()
        return false
    }
    if ( pw.value.length == 0 ){
        alert('Hãy nhập mật khẩu')
        pw.focus()
        return false
    }
    if ( pw.value.length < 8 ){
        alert('Mật khẩu từ 8 ký tự')
        pw.focus()
        return false
    }
    if( !filter.test(email.value) ){
        alert("Hãy nhập đúng định dạng Mail!")
        email.focus()
        return false
    }
    
    if(strongRegex.test(pw.value) == false){
        alert("Mk có ký tự in HOA, thường, ký tự đặc biệt và số!");
        pw.focus();
        return false;
    }
    if(pw.value != pw2.value){
        alert("Nhập lại mk không trùng khớp");
        pw2.focus();
        return false;
    }

    //check trung
    var username = localStorage.getItem(name1.value)
    var data = JSON.parse(username)
    if (username != null){
        alert('Tên đăng nhập đã tồn tại')
    }
    else{
        var user ={
            username : name1.value,
            email : email.value,
            phone : sdt.value,
            password : pw.value
        };
        // console.log(user)
        var json = JSON.stringify(user);
        localStorage.setItem(name1.value,json);
        alert('Đăng ký thành công')
        return true
    }
    
}

// xác thực tài khoản
function signIn(e){
    event.preventDefault()
    var frm = document.forms['frmDangNhap'];
    var name1 =frm.name.value
    var pw =frm.password.value
    if ( name1.length == 0 ){
        alert('Hãy nhập tài khoản');
        frm.name.focus();
        return false
    }
    if ( pw.length == 0 ){
        alert('Hãy nhập mật khẩu')
        frm.password.focus()
        return false
    }
    var username = localStorage.getItem(name1)
    var data = JSON.parse(username)
    if (username == null){
        alert('Tài khoản không tồn tại')
    }
    else if( name1==data.username && pw==data.password){
        
        //js hiển thị logo(username) góc phải sau khi đăng nhập chèn tại đây (tương tự bài thi)

        alert('Đăng nhập thành công')
        alert("Chuyển hướng đến trang chủ")
        window.location.href="trangchu.html"
    }
    else{
        alert('Mật khẩu bạn đã nhập không chính xác')
    }
    
}

function frmValidateContact(e){
    event.preventDefault()
    var frm = document.forms['frmLienHe'];
    var ho=frm.ho
    var ten =frm.ten
    var diachi=frm.address
    var email=frm.email
    var sdt =frm.sdt
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( sdt.value.length == 0 || sdt.value.length <10 ){
        alert('Hãy nhập số điện thoại gồm 10 chữ số')
        sdt.focus()
        return false
    }

    alert('Phản hồi thành công')
    return true
}






