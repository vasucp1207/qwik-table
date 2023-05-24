import { Signal, component$, useStylesScoped$, $, useComputed$ } from '@builder.io/qwik';

interface pageProps {
  pageNo: Signal<number>,
  postPerPage: Signal<number>,
  totalPosts: number
}

export const Pagination = component$((props: pageProps) => {
  useStylesScoped$(AppCSS);

  const totalPage = useComputed$(() => {
    return Math.ceil((props.totalPosts / props.postPerPage.value)) - 1;
  });

  const changePosts = $((e: any) => {
    props.postPerPage.value = e.target.value as number;
  })

  const changePageNo = $((e: any) => {
    props.pageNo.value = e.target.value as number;
  })

  const decPage = $(() => {
    if (props.pageNo.value !== 0) props.pageNo.value--;
  })

  const incPage = $(() => {
    if (props.pageNo.value < totalPage.value) props.pageNo.value++;
  })

  const setFirstPage = $(() => {
    if(props.pageNo.value !== 0) props.pageNo.value = 0;
  })

  const setLastPage = $(() => {
    if(props.pageNo.value !== totalPage.value) props.pageNo.value = totalPage.value;
  })

  return (
    <div class='page-cont'>

      <div class='post-select'>
        <div>Rows per page </div>
        <select onInput$={changePosts}>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </select>
      </div>

      <div>
        <div class='select-page'>Page <input onInput$={changePageNo} value={props.pageNo.value} type='number' min={0} max={totalPage.value} /> of {totalPage.value}</div>
      </div>

      <div class='btn-cont'>
        <button disabled={props.pageNo.value === 0} onClick$={setFirstPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
        </button>
        <button onClick$={decPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button onClick$={incPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <button disabled={props.pageNo.value === totalPage} onClick$={setLastPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
        </button>
      </div>
    </div>
  );
});

export const AppCSS = `
  .post-select {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  select {
    outline: none;
    width: 50px;
    height: 30px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  }
  select:focus {
    outline: 2px solid #94a2b8;
  }
  .select-page>input {
    outline: none;
    border: 1px solid #e2e8f0;
    width: 50px;
    height: 30px;
    border-radius: 8px;
    font-size: 14px;
  }
  .select-page>input:focus {
    outline: 2px solid #94a2b8;
  }
  .page-cont {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
  }
  .btn-cont {
    height: 80px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button {
    height: fit-content;
    background: transparent;
    border: 1px solid #e2e8f0;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:disabled {
    cursor: not-allowed;
  }
  button:hover {
    background: #f8f9fb;
  }
`;
