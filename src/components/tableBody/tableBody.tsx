import { Signal, component$, useComputed$, useStylesScoped$ } from '@builder.io/qwik';
import { isImage } from '../../utils/imageBool';

interface bodyProps {
  data: {
    [key: string]: string | number | null | undefined
  }[],
  pageNo: Signal<number>,
  postPerPage: Signal<number>
}

type cellType = {
  [key: string]: string | number | null | undefined;
}

export const TableBody = component$((props: bodyProps) => {
  useStylesScoped$(AppCSS);

  const computedPosts = useComputed$(() => {
    return props.data.slice((props.pageNo.value * props.postPerPage.value),
      ((props.pageNo.value * props.postPerPage.value)
        + parseInt(props.postPerPage.value.toString())))
  })

  /* Todo: removing this console.log results in a bug(searching and sorting simontaneously) */
  console.log(props.data.length);

  return (
    <tbody>
      {computedPosts.value.map((cell: cellType) => {
        const keys = Object.keys(cell);
        return (
          <tr key={cell[keys[0]]}>
            {keys.map((item, i) => {
              if (isImage(cell[item])) {
                const imgSrc = cell[item] as string;
                return (
                  <td key={i}>
                    <img width={50} height={50} src={imgSrc} />
                  </td>)
              } else {
                return <td key={i}>{cell[item]}</td>
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
