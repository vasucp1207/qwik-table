import { component$, useStylesScoped$, useSignal, useStore, $, useVisibleTask$ } from '@builder.io/qwik';
import { TableHead } from '../tableHead/TableHead';
import { TableBody } from '../tableBody/TableBody';
import { Pagination } from '../Pagination';
import { sortData } from './sortData';
import { Search } from '../Search';
import { searchData } from './searchedData';

interface tableProps {
  header: any,
  data: any
}

export const Table = component$((props: tableProps) => {
  useStylesScoped$(AppCSS);

  const sortOrder = useSignal<string>('asc');
  const sortKey = useSignal<string>('player_name');
  const pageNo = useSignal<number>(0);
  const postPerPage = useSignal<number>(10);
  const totalPosts = useSignal<number>(props.data.length);
  const searchBy = useSignal<string>('player_name');
  const searchInp = useSignal<string>('');
  const prevSearch = useSignal<boolean>(false);

  const finalData = useStore({
    items: []
  });

  const sortedData = $(() => sortData({
    data: props.data,
    tableData: finalData.items,
    pageNo: pageNo,
    sortKey: sortKey,
    sortOrder: sortOrder,
    totalPosts: totalPosts,
    searchBy: searchBy,
    searchInp: searchInp,
    prevSearch: prevSearch
  }))

  const searchedData = $(() => searchData({
    data: props.data,
    tableData: finalData.items,
    pageNo: pageNo,
    sortKey: sortKey,
    sortOrder: sortOrder,
    totalPosts: totalPosts,
    searchBy: searchBy,
    searchInp: searchInp,
    prevSearch: prevSearch
  }))

  useVisibleTask$(({ track }) => {
    track(() => sortOrder.value)
    track(() => sortKey.value)
    track(() => pageNo.value)
    track(() => postPerPage.value)
    track(() => searchBy.value)
    track(() => searchInp.value)
    track(() => postPerPage.value)
    track(() => totalPosts.value)
    track(() => prevSearch.value)

    if(searchInp.value === '')
      sortedData().then(res => finalData.items = res);
    else
      searchedData().then(res => finalData.items = res);
  })

  return (
    <div class='table-cont'>
      <div class='table-top'>
        <div class='table-header'>
          <div class='header-title'>
            Champions League
          </div>
          <div>
            <img width={100} height={100} alt='leauge-logo' src='https://2.bp.blogspot.com/-zgas3qhn4dw/WqCyRRJLbNI/AAAAAAAAJHA/b3ttmTNl4IsSf4e27VZA7aR2wCFdY_NrQCLcBGAs/s1600/League%2BChampion.jpg' />
          </div>
        </div>

        <Search searchBy={searchBy} searchInp={searchInp} />

      </div>
      <table>
        <TableHead header={props.header} sortOrder={sortOrder} sortKey={sortKey} />
        <TableBody data={finalData.items} pageNo={pageNo} postPerPage={postPerPage} />
      </table>
      <Pagination pageNo={pageNo} postPerPage={postPerPage} totalPosts={totalPosts} />
    </div>
  );
});

export const AppCSS = `
  .table-header {
    display: flex;
    align-items: center;
    height: 120px;
  }
  img {
    object-fit: cover;
    margin-left: 20px;
  }
  .table-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-title {
    font-size: 40px;
    font-weight: bold;
  }
  .table-cont {
    margin: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border: 1px solid #e2e8f0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 8px;
  }
`;
