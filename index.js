window.onload = function(){
  // check location - Korea or not
  var type = navigator.appName;
  var lang;

  if(type == 'Netscape'){
    lang = navigator.language;
  }
  else{
    lang = navigator.userLanguage;
  }
  lang = lang.substr(0,2);

  // check hits
  var params = new URLSearchParams(window.location.search);
  if(params.get('isHits') == 'true'){
    document.querySelector('.cpright > a').style.display = 'block';
  }

  if(params.get('language') == 'en'){
    lang = 'en';
  }
  if(params.get('language') == 'ko'){
    lang = 'ko';
  }

  document.querySelector('#language').addEventListener('change', function(){
    set_language(this.value);
  });

  // set display
  set_language(lang);

  var select = document.querySelector('#language');

  for(var i=0; i<select.length ;++i){
    if(select[i].value == lang) select[i].selected = true
  }
}

function set_language(lang){
  var eList = document.querySelectorAll('.english');
  var kList = document.querySelectorAll('.korea');

  var eType = 'none';
  var kType = 'none';

  if(lang == 'ko'){
    eType = 'none';
    kType = 'block';
    get_account();
  }
  else{
    eType = 'block';
    kType = 'none';
  }

  for(var i=0; i<kList.length ;++i){
    kList[i].style.display = kType;
  }
  for(var i=0; i<eList.length ;++i){
    eList[i].style.display = eType;
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
  /*
  var cpTxt = document.getElementById('info');
  cpTxt.select();
  document.execCommand('Copy');
  */

  alert(info /* + '\n\n복사하였습니다.' */);
}
