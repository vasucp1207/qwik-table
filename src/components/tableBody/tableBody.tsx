import { component$, useStylesScoped$ } from '@builder.io/qwik';
import '../../global.css';

interface tableProps {
  tableData: [];
}

export const TableBody = component$((props: tableProps) => {
  useStylesScoped$(AppCSS);
  return (
    <div class='table-cont'>
      {props.tableData.map((data) => {
        return (
          <div class='table-data' key={data.id}>
            <div class='cell'>{data.id}</div>
            <div class='cell'>{data.first_name}</div>
            <div class='cell'>{data.last_name}</div>
            <div class='cell'>{data.email}</div>
            <div class='cell'>{data.gender}</div>
            <div class='cell'>{data.ip_address}</div>
          </div>

        )
      })}
    </div>
  );
});

export const AppCSS = `
.table-cont {
  display: flex;
  border: 1px solid black;
  width: 100%;
  padding: 3px;
  justify-content: space-between;
  flex-direction: column;
}

.table-data {
  display: flex;
  border: 1px solid black;
}

.cell {
  width: 100%;
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 17px;
  color: black;
}
`;
