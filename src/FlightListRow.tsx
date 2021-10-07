import { Launch } from "./FlightListTypes";

type Props = {
  launch: Launch;
};

export default function LaunchRow({ launch }: Props) {
  return (
    <tr key={launch.id}>
      <td>
        <strong>{launch.id}</strong>
      </td>
      <td>{launch.launch_date_local}</td>
      <td>{launch.launch_site.site_name_long}</td>
      <td>{launch.mission_name}</td>
      <td>{launch.rocket.rocket_name}</td>
      <td>{launch.ships[0]?.name}</td>
      <td>{launch.ships[0]?.home_port}</td>
      <td>
        <img
          src={launch.ships[0]?.image}
          alt={launch.ships[0]?.name}
          width="100px"
        />
      </td>
    </tr>
  );
}
