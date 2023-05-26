![q-table](https://github.com/vasucp1207/qwik-table/assets/85363195/c318d71b-12cd-427c-bbd4-8db03cd1e543)

<h1 align='center'>Qwik Table</h1>

## 📦Install
``npm i qwik-table``

## 🦄Usage
Simply import **QwikTable** from the package.

```ts
import { component$ } from '@builder.io/qwik';
import data from '../data.json';
import { QwikTable } from 'qwik-table';

export default component$(() => {
  const headers = [
    { key: "player_name", label: "Player" },
    { key: "club", label: "Club" },
    { key: "position", label: "Position" },
    { key: "minutes_played", label: "Min Played" },
    { key: "match_played", label: "Matches" },
    { key: "goals", label: "Goals" },
    { key: "assists", label: "Assists" },
    { key: "distance_covered", label: "Distance Covered" },
  ];

  return (
    <div>
      <QwikTable 
        header={headers} 
        data={data}
        title='Champions League'
        headerImg='/league.png'
      />
    </div>
  );
});
```

See the live [demo](https://qwik-table.vercel.app/).
