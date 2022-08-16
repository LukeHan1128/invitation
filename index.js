window.onload = function(){

  var type = navigator.appName;
  var lang;

  if(type=='Netscape')
    lang = navigator.language
  else
    lang = navigator.userLanguage

  lang = lang.substr(0,2)

  if(lang != 'ko')
    document.querySelector('div.row.korea').style.display = 'flex';
  else
    document.querySelector('div.row.english').style.display = 'flex';
}