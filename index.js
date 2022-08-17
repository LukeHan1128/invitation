window.onload = function(){
  // check location - Korea or not
  var type = navigator.appName;
  var lang;

  if(type == 'Netscape'){
    lang = navigator.language
  }
  else{
    lang = navigator.userLanguage
  }
  lang = lang.substr(0,2)

  if(lang == 'ko'){
    document.querySelector('.korea').style.display = 'block';
    get_account();
  }
  else{
    document.querySelector('.korea').style.display = 'none';
  }
}

function get_account(){
  var infoVal = account;

  // set copy account button
  var info = document.querySelector('#info');
  info.value = infoVal;
  info.readOnly = true;
  document.querySelector('#infoBtn').disabled = false;
}

function copy_to_clipboard(){
  var info = document.querySelector('#info').value;
  var cpTxt = document.getElementById('info');
  cpTxt.select();
  document.execCommand('Copy');

  alert(info + '\n\n복사하였습니다.');
}
