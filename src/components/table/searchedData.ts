import { Signal } from "@builder.io/qwik";

type dataProp = any

export function searchData({
  data,
  tableData,
  pageNo,
  sortKey,
  sortOrder,
  totalPosts,
  searchBy,
  searchInp,
  prevSearch
}: {
  data: any
  tableData: any
  pageNo: Signal<number>;
  sortKey: Signal<string>;
  sortOrder: Signal<string>;
  totalPosts: Signal<number>;
  searchBy: Signal<string>;
  searchInp: Signal<string>;
  prevSearch: Signal<boolean>;
}) {
  let prevData: any[] = [];

  if (!prevSearch.value) pageNo.value = 0, prevData = [];

  prevSearch.value = true;

  const searchedData: any[] = [];
  data.forEach((row: any) => {
    if (row[searchBy.value].toLowerCase().indexOf(searchInp.value.toLowerCase()) === -1) {
      // do nothing
    } else {
      searchedData.push(row)
    }
  })

  prevData = searchedData;

  const finalData = searchedData.sort((a: any, b: any) => {
    return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
  });

  totalPosts.value = finalData.length;

  if (sortOrder.value === 'dsc') return finalData.reverse();
  return finalData;
}