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
  sortKey,
  reverse,
}: {
  data: dataProp[];
  tableData: dataProp[] | [];
  sortKey: Signal<string>;
  reverse: boolean;
}) {
  if (!sortKey.value) return tableData;

  if (tableData.length === 0) tableData = data;

  const sortedData = tableData.sort((a: any, b: any) => {
    return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}
