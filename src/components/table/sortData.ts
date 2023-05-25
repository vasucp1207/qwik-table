import { Signal } from "@builder.io/qwik";

type dataProp = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  ip_address: string
}

export function sortData({
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
  data: dataProp[];
  tableData: dataProp[] | [];
  pageNo: Signal<number>;
  sortKey: Signal<string>;
  sortOrder: Signal<string>;
  totalPosts: Signal<number>;
  searchBy: Signal<string>;
  searchInp: Signal<string>;
  prevSearch: Signal<boolean>;
}) {
  if (!sortKey.value) return tableData;

  if (tableData.length === 0) tableData = data;

  totalPosts.value = data.length;
  if(prevSearch.value) {
    prevSearch.value = false;
    tableData = data;
    sortKey.value = 'id';
    sortOrder.value = 'asc';
  }
  const sortedData = tableData.sort((a: any, b: any) => {
    return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
  });

  if (sortOrder.value === 'dsc') {
    return sortedData.reverse();
  }

  return sortedData;
}
