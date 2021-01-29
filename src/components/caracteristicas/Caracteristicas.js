import "./style.css";

function Caracteristicas() {
  return (
    <div className="caracteristicas">
      <section className="caracteristicas">
        <h3>Projeto</h3>
        <p>
          {" "}
          O Aimberê by You,Inc é um projeto com exclusividade de torre única e
          arquitetura assinada pelo renomado escritório Perkins e Will. Seu
          terreno de 2.000 m² conta com coworking, piscina com raia de 25 m e
          borda infinita, solarium, spa com sala para massagem, sauna, fitness,
          pet place e muito mais!
        </p>

        {/* <hr> */}
        <ul className="grid">
          <li>
            <h3>Localização privilegiada</h3>

            <p>
              A 3 Min. do Bourbon Shopping A 10 Min. Parque da Água Branca A 4
              Min. Allianz Parque 100 M da ciclovia Sumaré.
            </p>
          </li>
          <li>
            <h3>A melhor localização de perdizes</h3>
            <p>
              O Aimberê by You,Inc está localizado a 290 m da futura estação
              Perdizes, região com infraestrutura completa. Seu entorno conta
              com o Bourbon Shopping, supermercados como o St. Marche, que fica
              a menos de 10 minutos a pé, Parque da Água Branca, PUC e muito
              mais!
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Caracteristicas;
