function gerarPDF(){
 let jogos = JSON.parse(localStorage.getItem("jogos")) || [];

 let texto = "RELATÓRIO SCOUT VÔLEI\n\n";

 jogos.forEach(j=>{
  texto += `Jogo: ${j.nome}\nSets: ${j.setA} x ${j.setB}\n`;

  j.sets.forEach((s,i)=>{
   texto += `Set ${i+1}: ${s.meuTime} x ${s.adversario}\n`;
  });

  texto += "\n";
 });

 let blob = new Blob([texto], {type:"application/pdf"});
 let link = document.createElement("a");

 link.href = URL.createObjectURL(blob);
 link.download = "relatorio.pdf";
 link.click();
}