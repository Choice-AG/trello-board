import TrashIcon from "../icons/Trashcon";
import { Column, Id } from "../types";

type Props = {
  column: Column;
  deleteColumn: (id: Id) => void;
};

export const ColumnContainer = (props: Props) => {
  const { column, deleteColumn } = props;
  return (
    <div className="bg-columnBackgroundColor w-[200px] h-[300px] p-4 flex justify-between">
      <h2>{column.title}</h2>
      <button
        onClick={() => {
          deleteColumn(column.id)
        }}
        className="h-fit bg-columnBackgroundColor"
      >
        <TrashIcon />
      </button>
    </div>
  );
};
