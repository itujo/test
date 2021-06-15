// 2. Retornando repositórios Github
// • Construa uma chamada para obter a listagem dos repositórios públicos do Github através da API:
// https://api.github.com/repositories.

// geralmente utilizo o axios para fazer requisições

const fetchData = async () => {
  //caso fosse uma api mais complexa eu usaria then/catch

  // let data;
  // await axios
  //   .get('https://api.github.com/repositories')
  //   .then((res) => {
  //     data = res.data;
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  //como é uma api "simples" prefiro usar desestruturação
  const { data } = await axios.get('https://api.github.com/repositories');
  console.log('q2. dados retornados da api do github: ');
  console.log(data);

  // aqui faria o que fosse necessario com os dados
  // por exemplo colocar todo os nomes em um array e etc

  const names = [];

  // mapeio a array de objetos
  data.map((obj) => {
    names.push(obj.name);
  });

  console.log('nomes dos repositorios: ');
  console.log(names);
};

fetchData();
