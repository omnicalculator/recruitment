import { useParams } from "react-router-dom";

export default function FlightDetails() {
  const { id } = useParams();
  return <div>{id}</div>;
}
