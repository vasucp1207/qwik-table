import { Signal } from "@builder.io/qwik";

export function sortData({
  data,
  tableData,
  sortKey,
  sortOrder,
  totalPosts,
  prevSearch,
  searchBy
}: {
  data: {
    [key: string]: string | number | null | undefined
  }[];
  tableData: {
    [key: string]: string | number | null | undefined
  }[];
  sortKey: Signal<string>;
  sortOrder: Signal<string>;
  totalPosts: Signal<number>;
  prevSearch: Signal<boolean>;
  searchBy: Signal<string>;
}) {
  const initialSearchKey = searchBy.value;
  if (!sortKey.value) return tableData;

  if (tableData.length === 0) tableData = data;

  totalPosts.value = data.length;
  if(prevSearch.value) {
    prevSearch.value = false;
    tableData = data;
    sortKey.value = initialSearchKey;
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
