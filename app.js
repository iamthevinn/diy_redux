const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterValue = document.querySelector('#counter');
const incButton = document.querySelector('#inc');
const decButton = document.querySelector('#dec')

let initialState = {
  counter: 0
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1};
    case DECREMENT:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}

function render(state) {
  counterValue.innerText = state.counter;
}

const store = createStore(reducer);

store.subscribe(render);

incButton.onclick = () => store.dispatch({ type: INCREMENT });
decButton.onclick = () => store.dispatch({ type: DECREMENT });
