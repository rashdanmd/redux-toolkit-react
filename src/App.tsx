import "./App.css";

function App() {
  return (
    <div>
      <>hello world</>
    </div>
  );
}

export default App;

/*
store
- global state accessible across components
- made up of multiple slices
- takes one key - reducer

actions
- tell redux what you should do the state
- 2 properties
    - type - string and name of the action
    - payload - optional any data to be sent to redux

reducers
- responsible for taking an action and make th update in the redux store
- never directly make updte to the redux store
- imutability can not directly mutate the state
- reducers creat a copy of the state, apply changes to the copy and overwrite the entire state

*/
