function settimeoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

settimeoutPromisified(1000).then(() => {
  console.log(" hi");

  settimeoutPromisified(3000).then(() => {
    console.log(" hello");
  });

  settimeoutPromisified(5000).then(() => {
    console.log(" bi");
  });
});

function resolve() {
  console.log(" hello");
}
