import { useRouteError } from "react-router-dom"

export default function Error() {
    const error=useRouteError();
    console.log(error);
  return (
    <div>
        <h1>Oops !! Error occured : {error.statusText}</h1>
        <p>Error Status : {error.status}</p>
    </div>
  )
}
