const form=document.getElementById('formPesan'),pw=document.getElementById('password'),kf=document.getElementById('konfirmasi');
document.querySelectorAll('.pilih').forEach(b=>b.addEventListener('click',()=>{
  document.getElementById('produk-pilih').value=b.dataset.nilai;
  document.getElementById('pesan').scrollIntoView({behavior:'smooth'});
}));
function cekPassword(){kf.setCustomValidity(kf.value&&pw.value!==kf.value?'beda':'');}
pw.addEventListener('input',cekPassword);kf.addEventListener('input',cekPassword);
form.addEventListener('submit',function(e){
  e.preventDefault();cekPassword();
  if(!form.checkValidity()){e.stopPropagation();form.classList.add('was-validated');return;}
  const s=document.getElementById('sukses');
  s.textContent='Terima kasih, '+document.getElementById('nama').value+'. Pesanan '+document.getElementById('jumlah').value+' pak '+document.getElementById('produk-pilih').value+' sudah kami terima.';
  s.style.display='block';form.reset();form.classList.remove('was-validated');
  s.scrollIntoView({behavior:'smooth',block:'center'});
});

/* Foto asli biji kopi (Pexels) dimuat dari internet.
   Kalau gagal, gambar lokal di assets/img/ tetap dipakai. */
document.querySelectorAll('img[data-asli]').forEach(el => {
  const t = new Image();
  t.referrerPolicy = 'no-referrer';
  el.referrerPolicy = 'no-referrer';
  t.onload = () => { el.src = el.dataset.asli; };
  t.src = el.dataset.asli;
});
