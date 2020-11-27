export const notReact = (function() {
  let _root: Element;
  let _templateCallback: ITemplateCallback;

  let hooks: Array<any> = [];
  let idx: number = 0;

  const _eventArray: IEventArray = [];

  function useState(initValue: any) {
    let state;
    state = hooks[idx] !== undefined ? hooks[idx] : initValue;
    const _idx = idx;
    const setState = (newValue: any) => {
      hooks[_idx] = newValue;
      render();
    }
    idx++;
    return [state, setState];
  }
  function useEffect(callback: any, dependancyArray: Array<any>) {
    const oldDependancies = hooks[idx];
    let hasChanged = true;
    if (oldDependancies) {
      hasChanged = dependancyArray.some((dep, i) => !Object.is(dep, oldDependancies[i]));
    }
    hooks[idx] = dependancyArray;
    idx++;
    if (hasChanged) callback();
  }
  function init(rootElement: Element, templateCallback: ITemplateCallback) {
    _root = rootElement;
    _templateCallback = templateCallback;
    render();
  }
  function render() {
    idx=0;
    _eventArray.length = 0;
    _root.innerHTML = _templateCallback();
  }
  //event Listeners
  //@ts-ignore
  document.addEventListener('click', (e) => handleEventListeners(e));
  function handleEventListeners(e: any) {
    _eventArray.forEach((target: any) => {
      if (e.target.id === target.id) {
        e.preventDefault();
        target.callback();
      }
    });
  }
  function addOnClick(id: string, callback: any) {
    _eventArray.push({id, callback});
  }

  return {useState, useEffect, init, render, addOnClick};
})();


type ITemplateCallback = { (): string; }
type IEventArray = [{id: string, callback: any}] | Array<any>;