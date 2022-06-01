const Challenge = () => {

  const a = 5;
  const b = 16;

  return (
    <div>
      <h3>Primeiro valor: {a}</h3>
      <h3>Segundo valor: {b}</h3>
      <button onClick={() =>
        console.log(a + b)}
      >
        Somar
      </button>
    </div>
  )

};

export default Challenge;