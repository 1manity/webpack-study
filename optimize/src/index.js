

const btn = document.querySelector('button');

btn.onclick = async function() {
  const {chunk} = await import('./util');

  const result = chunk([11, 22, 33, 44, 55, 66, 77, 88, 99, 100], 3);
  console.log(result);
};
