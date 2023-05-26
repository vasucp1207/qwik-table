# Qwik Table

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

See the live demo.