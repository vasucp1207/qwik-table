import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { TableBody } from '../tableBody/tableBody';
import { TableHead } from '../tableHead/tableHead';

interface tableProps {
  tableData: [],
  headers: []
}

export const QwikTable = component$((props: tableProps) => {
  useStylesScoped$(AppCSS);
  return (
    <div class='table'>
      <TableHead headers={props.headers} />
      <TableBody tableData={props.tableData} />
    </div>
  );
});

export const AppCSS = `
.table {
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  width: fit-content;
}
`;
