import { QwikTable } from './components/table/QwikTable';
import data from './data.json';

export default () => {
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
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>

        <QwikTable 
          header={headers} 
          data={data}
          title='Champions League'
          headerImg='https://2.bp.blogspot.com/-zgas3qhn4dw/WqCyRRJLbNI/AAAAAAAAJHA/b3ttmTNl4IsSf4e27VZA7aR2wCFdY_NrQCLcBGAs/s1600/League%2BChampion.jpg'
        />

      </body>
    </>
  );
};
