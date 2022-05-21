import { gql, useLazyQuery, useQuery } from "@apollo/client";

import FlightList from "../components/FlightList";
import FlightListFilters from "../components/FlightListFilters";
import Pagination from "../components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
const FLIGHT_LIST_QUERY = gql`
  query GetPastLaunches($limit: Int, $offset: Int, $search: String) {
    launchesPast(
      limit: $limit
      offset: $offset
      find: { mission_name: $search }
      sort: "launch_date_local"
      order: "asc"
    ) {
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
  const [page, setPage] = useState(0);
  const [searchTerm, setSearch] = useState("");
  const [search, { loading, data }] = useLazyQuery(FLIGHT_LIST_QUERY, {
    variables: {
      limit: 10,
      offset: page * 10,
    },
  });
  useEffect(() => {
    search();
  }, [page]);

  const debouncer = useCallback(debounce(search, 1000), []);

  if (loading || !data) {
    return <>Loading...</>;
  }
  const onSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    debouncer({ variables: { search: searchTerm } });
  };
  return (
    <>
      <h2>Launch list</h2>
      <FlightListFilters onFilterChange={onSearch} value={searchTerm} />
      <FlightList launches={data?.launchesPast} />
      <Pagination
        onPrevPage={() => setPage((p) => p - 1)}
        isPrevPage={page > 0}
        isNextPage={data?.launchesPast.length === 10}
        onNextPage={() => setPage((p) => p + 1)}
      />
    </>
  );
}
