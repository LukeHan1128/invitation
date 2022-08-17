window.onload = function(){

  var type = navigator.appName;
  var lang;

  if(type=='Netscape')
    lang = navigator.language
  else
    lang = navigator.userLanguage

  lang = lang.substr(0,2)

  if(lang != 'ko')
    document.querySelector('.korea').style.display = 'block';
  else
    document.querySelector('.korea').style.display = 'none';
}

function copy_to_clipboard(){
  var cpTxt = document.getElementById('info');
  cpTxt.select();
  document.execCommand('Copy');
  alert('복사하였습니다.');
}
