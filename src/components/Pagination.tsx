type Props = {
  isNextPage: boolean;
  isPrevPage: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
};
const Pagination = ({
  isNextPage,
  isPrevPage,
  onNextPage,
  onPrevPage,
}: Props) => {
  return (
    <div>
      <button onClick={onPrevPage} disabled={!isPrevPage}>
        Prev
      </button>
      <button onClick={onNextPage} disabled={!isNextPage}>
        Next
      </button>
    </div>
  );
};
export default Pagination;
