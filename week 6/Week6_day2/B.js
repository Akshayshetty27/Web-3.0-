const thennable = {
  then: function (onFulfiled) {
    setTimeout(() => onFulfiled(42), 1000);
  },
};

async function main() {
  const v = await thennable;
  console.log(" hello World");
}
main();
// Every Promise is  Thennable
// but every tennable is not a Promise
