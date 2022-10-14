const columns = [];
// columns.map(({ title }) => title)

const funcao = function () {
  console.log("tchau");
};
const x = function funcao2() {
  console.log("oi");
};

funcao(); // printa "tchau"
x();
funcao2(); // printa "oi"

columns.map(function (object) {
  return object.title;
});

const funcao3 = () => {
  console.log("au revoir");
};
funcao3(); // printa "au revoir"

columns.map((object) => object.title);
const { a } = { a: "2" };
columns.map(({ title }) => title);
