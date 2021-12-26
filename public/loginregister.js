const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const msgBox = document.getElementById('message');

if(urlParams.get("register")=="succesful"){
    let wrapper = document.createElement('div');
    wrapper.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert">Hesabınız Oluşturuldu<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    msgBox.append(wrapper);
}else if(urlParams.get("register")=="unsuccesful"){
    let wrapper = document.createElement('div');
    wrapper.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">Bu isim kullanılmakta ya da girdiğiniz bilgiler eksik.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    msgBox.append(wrapper);
};