import { gql, useQuery } from "@apollo/client";

import FlightList from "../components/FlightList";
import FlightListFilters from "../components/FlightListFilters";

const FLIGHT_LIST_QUERY = gql`
  query GetPastLaunches {
    launchesPast(limit: 10, sort: "launch_date_local", order: "asc") {
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

export default function FlightListPageGraphQL() {
  const { loading, data } = useQuery(FLIGHT_LIST_QUERY);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h2>Launch list</h2>
      <FlightListFilters />
      <FlightList launches={data.launchesPast} />
    </>
  );
}
