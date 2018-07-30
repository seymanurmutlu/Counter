const state = {
  current : 0,
};

function increment(){
  state.current++;
};

function reset(){
  state.current = 0;
}

function render(){
  const screen = document.getElementById('screen');
  screen.innerText = state.current;
  console.log(state.current);
}

document.getElementById('incrementButton').addEventListener(
  'click',
  function (){
    increment();
    render();
  }
);

document.getElementById('resetButton').addEventListener(
  'click',
  function (){
    reset();
    render();
  }
);
