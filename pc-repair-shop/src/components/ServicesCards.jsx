function ServiceCard() {
  return (
    <div className="serviceCardContainer mx-auto w-200 mt-10 mb-10">
      <div className="serviceCard p-3 flex flex-col justify-between">
        <h2 className="font-bold text-lg text-center">Reparation</h2>
        <p>Reparation af pc tilbydes, først med diagnosticering af problemet.</p>
        <div className="flex flex-row">
          <p className="mr-2 font-bold">Pris:</p>
          <p>150 kr. for tjek og resten af beløbet alt efter størrelse på problemet</p>
        </div>
        <button>Bestil</button>
      </div>
      <div className="serviceCard p-3 flex flex-col justify-between">
        <h2 className="font-bold text-lg text-center">Rensning</h2>
        <p>Rensning af pc. Udskiftning af kølepaste og støvfjerning.</p>
        <div className="flex flex-row">
          <p className="mr-2 font-bold">Pris:</p>
          <p>200 kr.</p>
        </div>
        <button>Bestil</button>
      </div>
      <div className="serviceCard p-3 flex flex-col justify-between">
        <h2 className="font-bold text-lg text-center">Salg af gamle dele</h2>
        <p>Her kan du sælge de gamle dele af din computer, som vil blive brugt til at bygge nye og bæredygtige computerer.</p>
        <div className="flex flex-row">
          <p className="mr-2 font-bold">Pris:</p>
          <p>Afhænger af delen og dens tilstand</p>
        </div>
        <button>Sælg</button>
      </div>
    </div>
  );
}

export default ServiceCard;
