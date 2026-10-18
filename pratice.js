function throttle(fn, delay) {
  let timer = null;
  let lastArgs = null;
  let lastContext = null;
  return function (...args) {
    lastArgs = args;
    lastContext = this;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(lastContext, lastArgs);
        timer = null;
        lastArgs = null;
        lastContext = null;
      }, delay);
    }
  };
}

function debounce(fn,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn.apply(this,args);
        },delay)
    }
}
