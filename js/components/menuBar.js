const menuBar = (elemento, estado) => {
  const $elemento = document.getElementById(elemento);
  const $estado = document.getElementById(estado);
  console.log('estado: ', estado);
  $estado.addEventListener('click', () => {
    if (!$elemento.style.maxHeight) {
      $elemento.style.maxHeight = $elemento.scrollHeight + 'px';
    } else {
      $elemento.style.maxHeight = null;
    }
  });
}

export { menuBar }