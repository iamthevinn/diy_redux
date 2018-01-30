(function(global){
    function createStore(reducer) {
      let state = reducer(undefined, {type: ''})
      const listeners = [];

      function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach( listener => {
          listener(state);
        })
      }
  
      function subscribe(listener) {
        listener(state);
        listeners.push(listener);
      }
  
      return {
        dispatch: dispatch,
        subscribe: subscribe
      }
    }
    global.createStore = createStore;
  }(window))