function Author({state}) {
  return (
    <div>
      {state &&    
        state.map((res,j) => {
          return <h1 key={j}>{res}</h1>;
        })} 
    </div>
  );
}
export default Author;