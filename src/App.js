import React from 'react';

const initialState = { message: 'initial', setMessage: () => {} };
const MyContext = React.createContext(initialState);

const Message = () => {
  const { message, setMessage } = React.useContext(MyContext);
  const [ textVal, setTextVal ] = React.useState();

  return (
    <>
      <p>{message}</p>
      <input type="text" onChange={(e) => setTextVal(e.target.value)} />
      <button
        onClick={() => setMessage(textVal)}
      >
        Change
      </button>
    </>
  )
}

const useProviderValue = () => {
  const [message, setMessage] = React.useState(initialState.message);

  window.providerValue = {
    message,
    setMessage,
  };

  return window.providerValue;
}

export function App(props) {
  const providerValue = useProviderValue();

  console.log('provider', providerValue);

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyContext.Provider value={providerValue}>
        <Message />
      </MyContext.Provider>
      <MyContext.Provider value={providerValue}>
        <Message />
      </MyContext.Provider>
    </div>
  );
}
