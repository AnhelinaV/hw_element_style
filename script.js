function showResult(){
  const backgroundColorEl  = document.getElementById('background-color');
  const borderRadiusEl = document.getElementById('border-radius');
  const elementWidthEl = document.getElementById('element-width');
  const elementHeightEl = document.getElementById('element-height');

  const resultEl = document.getElementById('result');

  resultEl.style.backgroundColor = backgroundColorEl.value;
  resultEl.style.borderRadius = borderRadiusEl.value + "%";
  resultEl.style.width = elementWidthEl.value + "px";
  resultEl.style.height = elementHeightEl.value + "px";
}