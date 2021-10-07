import { Launch } from './FlightListTypes'
import LaunchRow from './FlightListRow'

import './FlightList.css';


const FLIGHT_LIST_TABLE_HEADERS = ['id', 'date', 'site name', 'mission', 'rocket', 'ship', 'port', 'image'];

type Props = {
    launches: Launch[];
  }

export default function FlightList({ launches }: Props) {
    return (<table>
        <thead>
          <tr>
            { FLIGHT_LIST_TABLE_HEADERS.map(header => <th>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {launches.map(launch => (
            <LaunchRow launch={launch} />
          ))}
        </tbody>
      </table>);
}
