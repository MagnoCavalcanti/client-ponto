import Style from "./Table.module.css"


interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}
  
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}
  
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
}
  
interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
}
  
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
}
  
export const Table: React.FC<TableProps> = ({ className, children, ...props }) => (
    <div style={{ overflowY: "auto", maxHeight: "300px" }}>
      <table
        className={Style.table}
        {...props}
      >
        {children}
      </table>
    </div>
);

export const TableHeader: React.FC<TableHeaderProps> = ({ className, children, ...props }) => (
    <thead className={Style.tableHeader}  {...props}>
      {children}
    </thead>
);
  
export const TableBody: React.FC<TableBodyProps> = ({ className, children, ...props }) => (
    <tbody
      
      {...props}
    >
      {children}
    </tbody>
);
  
export const TableRow: React.FC<TableRowProps> = ({ className, children, ...props }) => (
    <tr
        className={Style.tableRow}
        {...props}
    >
      {children}
    </tr>
);
  
export const TableHead: React.FC<TableHeadProps> = ({ className, children, ...props }) => (
    <th
      className={Style.tableCell}
      style={{ color: "var(--muted-foreground)", textAlign: "left" }}
      {...props}
    >
      {children}
    </th>
);
  
export const TableCell: React.FC<TableCellProps> = ({ className, children, ...props }) => (
    <td
      className={Style.tableCell}
      {...props}
    >
      {children}
    </td>
);