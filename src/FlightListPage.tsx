import useFetch from 'use-http'

import FlightList from "./FlightList";
import FlightListFilters from "./FlightListFilters";
import {useEffect} from "react";

export default function FlightListPage() {
    const {get, loading, data} = useFetch('https://api.spacexdata.com/v3/launches?limit=10')

    useEffect(() => {
        get();
    }, [get]);

    if (loading) {
        return <>Loading...</>;
    }

    return (
        <>
            <h2>Launch list</h2>
            <FlightListFilters/>
            <FlightList launches={data}/>
        </>
    );
}
