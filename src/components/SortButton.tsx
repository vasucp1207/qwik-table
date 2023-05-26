import { component$, useOn, useStylesScoped$, $, Signal } from '@builder.io/qwik';

interface typeProps {
  cellKey: string | number | null | undefined,
  sortOrder: Signal<string>,
  sortKey: Signal<string | number | null | undefined>
}

export const SortButton = component$((props: typeProps) => {
  useStylesScoped$(AppCSS);
  useOn(
    'click',
    $(() => {
      props.sortOrder.value === 'asc'? 
        props.sortOrder.value = 'dsc': 
        props.sortOrder.value = 'asc';

      props.sortKey.value = props.cellKey;
    })
  )
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
  );
});

export const AppCSS = `
  svg {
    position: absolute;
    top: 17%;
    margin-left: 0.4rem;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 8px;
  }
  svg:hover {
    background: #f1f5f9;
  }
`;
