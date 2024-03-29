const log = {
  d(msg) { /* do nothing */ }
};


const anonArrowFunc = () => {
  return () => console.debug('anon arrow func');
};

function globalFunc() {
  console.error('Global func');
}

let a = (function () {
  console.log('In anon func');

  return function scopedFunc() {
    console.log('scopedFunc');
  }
})();

const wrapper = (f) => {
  return f()
};

class App {
  constructor() {
    log.d('hej');
    console.log('Constructor logging');
  }

  classArrowFunc = () => {
    console.warn('In an arrow func');
  };

  memberFuncWithAnonFunc() {
      const assignedFuncInFunc = () => {
          console.log('func in func');
      };

      return () => {
          console.log('anonFunc in func');
      }
  }

  wrapped = () => wrapper(async () => {
    console.log("I'm wrapped!")
  })
}

export default new App();