import Styles from "../../styles/block/vaardigheden.module.css";

export default function Vaardigheden() {

  const vaardigheden = [
    { naam: "PHP & Symfony", niveau: 60 }, 
    { naam: "HTML & CSS", niveau: 90 },
    { naam: "Javascript & React", niveau: 80 },
    { naam: "Java", niveau: 70 },
    { naam: "C# & .NET", niveau: 70 },
    { naam: "Python", niveau: 60 },
    { naam: "SQL", niveau: 80 },
    { naam: "Azure", niveau: 60 },
  ];

  const eigenschappen = [
    { naam: "Soft skills", beschrijven:"Probleemoplossend, Creatief, Teamgericht" },
    { naam: "Flexibel", beschrijven:"kan snel schakelen tussen verschillende taken of prioriteiten" },
    { naam: "Verantwoordelijk", beschrijven:"Zorgen dat taken op tijd en correct worden gedaan" },
    { naam: "Doorzingsvermogen", beschrijven:"Blijf gemotiveerd en geef niet snel op" },
    { naam: "Chinees (mandarijns) ", beschrijven:"Moedertaal" },
    { naam: "Nederlands", beschrijven:"B1" },
    { naam: "Engels", beschrijven:"A2" },
  ]

  return (
    <div className={Styles.container}>
      <div className={Styles.vaardigheden }>
        <h2 className={Styles.title}>Vaardigheden</h2>
        {vaardigheden.map((vaardigheid, index) => (
          <div key={`vaardigheid-${index}`} className={Styles.vaardigheidBalk }>
            <div className={Styles.vaardigheidNaam}>{vaardigheid.naam}
              <div className={Styles.vaardigheidContainer}>
                <div
                  className={Styles.vaardigheid}
                  style={{ width: `${vaardigheid.niveau}%` }} 
                >
              </div>
              </div>    
            </div>
        </div>
        ))}
      </div>
      <div className={Styles.eigenschappen }>
        <h2 className={Styles.title}>Eigenschappen</h2>
          {eigenschappen.map((eigenschap, index) => (
            <div key={`eigenschap-${index}`} className={Styles.eigenschapBalk}>
              <div className={Styles.eigschap}><span className={Styles.eigenschapNaam}>{eigenschap.naam} </span>: {eigenschap.beschrijven}</div>
            </div>
          ))}
      </div>
    </div>
  );
}   