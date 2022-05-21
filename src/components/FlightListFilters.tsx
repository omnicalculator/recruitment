type Props = {
  onFilterChange: (filter: string) => void;
  value: string;
};
export default function FlightListFilters({ onFilterChange, value }: Props) {
  return (
    <input
      style={{ width: 200 }}
      placeholder={`Search by mission name`}
      onChange={(e) => {
        onFilterChange(e.currentTarget.value);
      }}
      value={value}
    />
  );
}
