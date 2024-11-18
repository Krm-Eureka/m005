
const ErrorPage=()=> {

  return (
    <div className="p-4 m-6"
    >
        
      <h1 className="text-6xl"><i className="fa-solid fa-gears"></i>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
}

export default ErrorPage