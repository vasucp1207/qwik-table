import { Signal, component$, useStylesScoped$ } from '@builder.io/qwik';

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

  const firstPost = props.pageNo.value * props.postPerPage.value;
  const lastPost = firstPost + props.postPerPage.value;
  const currentPosts = props.data.slice(firstPost, lastPost);

  return (
    <tbody>
      {currentPosts.map((person) => {
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
