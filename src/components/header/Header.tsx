import { Signal, component$, useStylesScoped$ } from "@builder.io/qwik";
import { Search } from '../Search';

interface headerProps {
  headers: {
    key: string,
    label: string
  }[],
  searchBy: Signal<string>,
  searchInp: Signal<string>,
  title: string,
  headerImg?: string
}

export const Header = component$((props: headerProps) => {
  useStylesScoped$(AppCSS);
  return (
    <div class='table-top'>
      <div class='table-header'>
        <div class='header-title'>
          {props.title}
        </div>
        <div>
          { props.headerImg && <img width={100} height={100} alt='leauge-logo' src={props.headerImg} /> }
        </div>
      </div>
      <Search headers={props.headers} searchBy={props.searchBy} searchInp={props.searchInp} />
    </div>
  )
})

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
