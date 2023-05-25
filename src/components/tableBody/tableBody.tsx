import { Signal, component$, useComputed$, useStylesScoped$, $ } from '@builder.io/qwik';

interface bodyProps {
  data: any,
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

  console.log(props.data, 'incom')

  const isImage = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  return (
    <tbody>
      {computedPosts.value.map((cell) => {
        const keys = Object.keys(cell);
        return (
          <tr key={cell[keys[0]]}>
            {keys.map((item) => {
              if (isImage(cell[item])) {
                return <td><img width={50} height={50} src={cell[item]} /></td>
              } else {
                return <td>{cell[item]}</td>
              }
            })}
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
  img {
    object-fit: cover;
  }
`;
