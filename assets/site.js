document.addEventListener('click',function(e){
var b=e.target.closest('.burger');if(b){var n=b.closest('.hdr').querySelector('.mnav');var o=n.hidden;n.hidden=!o;b.setAttribute('aria-expanded',String(o));return}
var c=e.target.closest('[data-filter]');if(c){var r=c.closest('section')||document;var f=c.dataset.filter;
r.querySelectorAll('[data-filter]').forEach(function(x){var on=x===c;x.classList.toggle('on',on);x.setAttribute('aria-pressed',String(on))});
r.querySelectorAll('.qall [data-theme]').forEach(function(k){k.hidden=!(f==='Tous'||k.dataset.theme===f)})}});