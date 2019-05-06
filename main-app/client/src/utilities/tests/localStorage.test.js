import {loadAuthToken, saveAuthToken, clearAuthToken } from '../localStorage.js';


// cannot set mock of localstorage must use stub

describe("LoadAuthToken", () => {
  
  let getItemSpy;
  let setItemSpy;

  beforeEach(() => {
    getItemSpy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
  
    setItemSpy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
  });

  it("return null when no token is set", () => {
    expect(loadAuthToken()).toEqual(null);
  });

  
  it("localstorage is used", () => {
    expect(getItemSpy).toHaveBeenCalled();
    getItemSpy.mockClear();
  });
  
  it("returns userToken  when there is a token in localstorage", () => {
    localStorage.setItem("authToken", "userToken");
    // let userToken = loadAuthToken();
    expect(loadAuthToken()).toEqual("userToken");
    getItemSpy.mockClear();
    localStorage.removeItem('authToken');
  });
});


describe("saveAuthToken", () => {
  
   let setItemSpy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
 
  it("requires an authToken argument", () => {
    saveAuthToken('authToken');
    expect(setItemSpy).toHaveBeenCalledWith('authToken', 'authToken');
    setItemSpy.mockClear();
  });

// should function return error?
});


describe("clearAuthToken", () => {
  
   let removeItemSpy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'removeItem');
 
  it("calls localStorage.removeItem", () => {
    clearAuthToken();
    expect(removeItemSpy).toHaveBeenCalled();
    removeItemSpy.mockClear();
  });

// should function return error?

});
