import { component$, useStylesScoped$ } from '@builder.io/qwik';
import '../../global.css';

interface HeaderProps {
  headers: [];
}

export const TableHead = component$((props: HeaderProps) => {
  useStylesScoped$(AppCSS);
  return (
    <thead class='head-cont'>
      <tr>
        {props.headers.map((header) => {
          return (
            <td
              class='cell'
              key={header.key}
            >
              {header.label}
            </td>
          )
        })}
      </tr>
    </thead>
  );
});

export const AppCSS = `
.head-cont {
  display: flex;
  border: 1px solid black;
  width: 100%;
  padding: 3px;
  justify-content: space-between;
}

.cell {
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  color: red;
}
`;
