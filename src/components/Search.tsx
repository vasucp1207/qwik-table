import { $, Signal, component$, useStylesScoped$ } from '@builder.io/qwik';

interface searchProps {
  searchBy: Signal<string>,
  searchInp: Signal<string>
}

export const Search = component$(( props: searchProps) => {
  useStylesScoped$(AppCSS);

  const setSearchBy = $((e: any) => {
    props.searchBy.value = e.target.value;
  })

  const setSearchInp = $((e: any) => {
    props.searchInp.value = e.target.value;
  })

  return (
    <div class='search-cont'>
      Search by
      <select onInput$={setSearchBy}>
          <option>player_name</option>
          <option>position</option>
          <option>minutes_played</option>
          <option>match_played</option>
          <option>goals</option>
          <option>assists</option>
          <option>distance_covered</option>
        </select>
      <input onInput$={setSearchInp} class='search-inp' placeholder='search' />
    </div>
  );
});

export const AppCSS = `
  .search-inp {
    outline: none;
    border: 1px solid #e2e8f0;
    width: 240px;
    height: 40px;
    border-radius: 8px;
    font-size: 14px;
    margin-left: 10px;
  }
  .search-inp:focus {
    outline: 2px solid #94a2b8;
  }
  select {
    outline: none;
    margin-left: 10px;
    width: 100px;
    height: 40px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  }
  select:focus {
    outline: 2px solid #94a2b8;
  }
`;
