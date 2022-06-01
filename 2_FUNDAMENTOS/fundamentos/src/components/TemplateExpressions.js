const TemplateExpressions = () => {

  const name = "Cleverson";
  const data = {
    age: 43,
    job: "Programer",
  }

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions