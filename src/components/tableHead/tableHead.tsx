import { Signal, component$, useStylesScoped$ } from '@builder.io/qwik';
import { SortButton } from '../SortButton';

interface HeaderProps {
  header: {
    key: string,
    label: string
  }[],
  sortOrder: Signal<string>,
  sortKey: Signal<string>
}

type cellType = {
  [key: string]: string | number | null | undefined;
}

export const TableHead = component$((props: HeaderProps) => {
  useStylesScoped$(AppCSS);
  return (
    <thead>
      <tr>
        {props.header.map((cell: cellType, i) => {
          return (
            <td key={i}>
              {cell[Object.keys(cell)[1]]}
              <SortButton
                cellKey={cell[Object.keys(cell)[0]]}
                sortOrder={props.sortOrder}
                sortKey={props.sortKey}
              />
            </td>
          )
        })}
      </tr>
    </thead>
  );
});

export const AppCSS = `
  td {
    position: relative;
    color: #64758b;
  }
`;
