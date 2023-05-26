import { Signal } from "@builder.io/qwik";

export function searchData({
  data,
  pageNo,
  sortKey,
  sortOrder,
  totalPosts,
  searchBy,
  searchInp,
  prevSearch
}: {
  data: {
    [key: string]: string | number | null | undefined
  }[];
  pageNo: Signal<number>;
  sortKey: Signal<string>;
  sortOrder: Signal<string>;
  totalPosts: Signal<number>;
  searchBy: Signal<string>;
  searchInp: Signal<string>;
  prevSearch: Signal<boolean>;
}) {
  if (!prevSearch.value) pageNo.value = 0;

  prevSearch.value = true;

  const searchedData: any[] = [];
  data.forEach((row: any) => {
    if ((row[searchBy.value].toString()).toLowerCase().indexOf(searchInp.value.toLowerCase()) === -1) {
      // do nothing
    } else {
      searchedData.push(row)
    }
  })

  const finalData = searchedData.sort((a: any, b: any) => {
    return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
  });

  totalPosts.value = finalData.length;

  if (sortOrder.value === 'dsc') return finalData.reverse();
  return finalData;
}