import { Signal, component$, useComputed$, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik';

interface bodyProps {
  data: {
    id: number,
    first_name: string,
    last_name: string,
    email: string, gender:
    string,
    ip_address: string
  }[] | [],
  pageNo: Signal<number>,
  postPerPage: Signal<number>
}

export const TableBody = component$((props: bodyProps) => {
  useStylesScoped$(AppCSS);

  const computedPosts = useComputed$(() => {
    return props.data.slice((props.pageNo.value * props.postPerPage.value),
      ((props.pageNo.value * props.postPerPage.value)
        + parseInt(props.postPerPage.value)))
  })

  return (
    <tbody>
      {computedPosts.value.map((person) => {
        return (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td>{person.email}</td>
            <td>{person.gender}</td>
            <td>{person.ip_address}</td>
          </tr>
        );
      })}
    </tbody>
  );
});

export const AppCSS = `
  tbody {
    color: #0f172a;
    font-size: 15px;
    letter-spacing: 0.3px;
  }
`;
