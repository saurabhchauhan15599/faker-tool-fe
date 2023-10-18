/* eslint-disable @typescript-eslint/no-explicit-any */
import css from './index.module.scss';
import { useTable, Column } from 'react-table';

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  addFooter?: boolean;
  tableStyle?: any;
}

function Table<T extends object>(props: TableProps<T>) {
  const { columns, data, addFooter = false, tableStyle } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } =
    useTable({
      columns,
      data
    });

  return (
    <table style={tableStyle} className={css.tableWrapper} {...getTableProps()}>
      <thead className={css.tabelHeadWrapper}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className={css.headerWrapper} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className={css.bodyRowWrapper} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td className={css.bodyDataWrapper} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
      {addFooter ? (
        <tfoot className={css.tabelHeadWrapper}>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <th className={css.headerWrapper} {...column.getFooterProps()}>
                  {column.render('Footer')}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      ) : (
        <></>
      )}
    </table>
  );
}

export default Table;
