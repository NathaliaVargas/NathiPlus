var listaSeries = ['https://m.media-amazon.com/images/M/MV5BZTdkMGNhZmYtNzAxMy00NWJkLThkN2MtNjVkNzY0NzVlMWQ4XkEyXkFqcGdeQXVyMTA0MDgzNTE1._V1_FMjpg_UX1000_.jpg','https://br.web.img3.acsta.net/pictures/19/12/24/09/27/2970070.jpg','https://br.web.img3.acsta.net/pictures/22/10/05/09/42/3385930.jpg','https://noticiasdatv.uol.com.br/media/_versions/recomenda/this-is-us-poster-season-4_fixed_recomenda_big.jpg']
var listaNomes = ['Designated Survivor','Manifest', 'The Rings of Power', 'This is Us']

var listaFilmes = [
  'https://br.web.img2.acsta.net/pictures/22/06/03/13/41/4557063.jpg', 'https://www.curtocinema.com.br/wp-content/uploads/2022/01/um-lugar-silencioso-parte2.jpg', 'https://br.web.img3.acsta.net/pictures/20/12/02/16/22/0450183.jpg'
]
var listaNomesFilmes = [
  'O Homem de Toronto', 'Um lugar silencioso', 'Lupin'
]
/*
document.write('<h1 class="titulo">' +"Series"+'</h1>')
document.write('<div class="container_blocao">')
  for(var i=0; i < listaSeries.length; i++) {
    document.write('<div class="container_series">')
    document.write('<img src='+ listaSeries[i] +'>')
    document.write('<p>'+ listaNomes[i] +'</p>')
    document.write('</div>')
}
document.write('</div>')

document.write('<h2 class="titulo">' +"Filmes"+'</h2>')

document.write('<div class="container_blocao">')
  for(var i=0; i < listaFilmes.length; i++) {
    document.write('<div class="container_series">')
    document.write('<img src='+ listaFilmes[i] +'>')
    document.write('<p>'+ listaNomesFilmes[i] +'</p>')
    document.write('</div>')
}
document.write('</div>')
*/

//transformar for em while:
document.write('<h1 class="titulo">' +"Series"+'</h1>')
document.write('<div class="container_blocao">')
var i = 0;
while(i < listaSeries.length){
//selecionar somente arquivos de imagem
     if((listaSeries[i].endsWith('jpg')) || (listaSeries[i].endsWith('jpeg'))){
         document.write('<div class="container_series">')
         document.write('<img src='+ listaSeries[i] +'>');
         document.write('<p>'+ listaNomes[i] +'</p>'); 
         document.write('</div>')
     } i++;
 } document.write('</div>')


document.write('<h2 class="titulo">' +"Filmes"+'</h2>')
document.write('<div class="container_blocao">')
var i = 0
while(i < listaFilmes.length){
//selecionar somente arquivos de imagem
     if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
         document.write('<div class="container_series">')
         document.write('<img src='+ listaFilmes[i] +'>');
         document.write('<p>'+ listaNomesFilmes[i] +'</p>'); 
         document.write('</div>')
     } i++;
 }
 
 document.write('</div>')



