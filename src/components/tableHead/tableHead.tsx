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

export const TableHead = component$((props: HeaderProps) => {
  useStylesScoped$(AppCSS);
  return (
    <thead>
      <tr>
        {props.header.map((cell) => {
          return (
            <td key={cell.key}>
              {cell.label}
              <SortButton
                cellKey={cell.key}
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
