const App = () => {
  const dateNow = new Date();
  const a = 10;
  const b = 20;
  return (
    <div>
      <p>Hello world. Today is {dateNow.toString()}</p>
      <p>The sum is: {a + b}</p>
    </div>
  );
};

export default App;
