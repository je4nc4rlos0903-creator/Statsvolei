function abrirResumoJogo(j){
 detalhe.style.display="block";
 app.style.display="none";
 listaJogos.style.display="none";

 tituloDetalhe.innerText=j.nome;

 let fundamentos=["saque","recepcao","defesa","levantamento","ataque","bloqueio"];

 let html="<h3>🏐 Sets</h3>";

 j.sets.forEach((s,i)=>{
  let vencedor = s.meuTime > s.adversario ? "MEU TIME" : "ADVERSÁRIO";

  html+=`
   <div style="margin:5px;">
    Set ${i+1}: ${s.meuTime} x ${s.adversario} 
    <b>(${vencedor})</b>
   </div>
  `;
 });

 html+="<h3>📊 Estatísticas por Jogador</h3>";

 html+=`<table>
 <tr>
  <th>Jogador</th>
  ${fundamentos.map(f=>`<th>${f}</th>`).join("")}
 </tr>`;

 j.players.forEach(p=>{
  html+=`<tr><td>#${p.numero} ${p.nome}</td>`;

  fundamentos.forEach(f=>{
   let ac=p.acerto[f];
   let er=p.erro[f];
   html+=`<td>${ac}/${er}</td>`;
  });

  html+="</tr>";
 });

 html+="</table>";

 stats.innerHTML=html;
}