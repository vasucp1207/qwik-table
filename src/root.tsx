import { Table } from './components/table/Table';
import './global.css';
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

      <Table header={headers} data={data} />

      </body>
    </>
  );
};
