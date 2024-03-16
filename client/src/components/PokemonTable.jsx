import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { Column } from "primereact/column";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../queries/pokemonQueries";
import { pokemonTypeTemplate } from "./pokemonTypeTemplate";
import { imageBodyTemplate } from "./imageBodyTemplate";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import { ProgressSpinner } from "primereact/progressspinner";

export const typeRowFilterTemplate = (options) => {
  const types = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  return (
    <Dropdown
      value={options.value}
      options={types}
      onChange={(e) => options.filterApplyCallback(e.value)}
      itemTemplate={pokemonTypeTemplate}
      placeholder="Select One"
      className="p-column-filter"
      showClear
      style={{ minWidth: "12rem" }}
    />
  );
};

const PokemonTable = () => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const header = () => {
    return (
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Pokemon search"
            onInput={(e) =>
              setFilters({
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
                types: { value: null, matchMode: FilterMatchMode.EQUALS },
              })
            }
            className="arcade"
          />
        </span>
      </div>
    );
  };

  const totalBase = (rowData) => {
    return (
      rowData.base.HP +
      rowData.base.Speed +
      rowData.base.Attack +
      rowData.base.Defense
    );
  };

  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading) return <ProgressSpinner />;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <DataTable
      value={data.pokemons}
      loading={loading}
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      rowsPerPageOptions={[10, 20, 50, 100]}
      paginator
      showGridlines
      rows={10}
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      className="w-80"
      scrollable
      scrollHeight="70vh"
      dataKey="id"
      emptyMessage="No pokemon found."
      globalFilterFields={["name"]}
      filters={filters}
      header={header}
      selectionMode="single"
      selection={selectedProduct}
      onSelectionChange={(e) => setSelectedProduct(e.value)}
    >
      <Column body={imageBodyTemplate} className="w-10"></Column>
      <Column field="id" header="ID" sortable className="w-5"></Column>
      <Column field="name" header="Name" sortable className="w-20"></Column>
      <Column
        field="base.type"
        header="Type"
        body={pokemonTypeTemplate}
        sortable
        className="w-20"
        showFilterMenu={false}
        filterMenuStyle={{ width: "14rem" }}
        style={{ minWidth: "12rem" }}
        filter
        filterElement={typeRowFilterTemplate}
      ></Column>
      <Column
        header="Total"
        body={(rowData) => totalBase(rowData)}
        sortable
        className="w-5"
      ></Column>
      <Column field="base.HP" header="HP" sortable className="w-5"></Column>
      <Column
        field="base.Speed"
        header="Speed"
        sortable
        className="w-10"
      ></Column>
      <Column
        field="base.Attack"
        header="Attack"
        sortable
        className="w-10"
      ></Column>
      <Column
        field="base.Defense"
        header="Defense"
        sortable
        className="w-10"
      ></Column>
      <Column
        field="base.SpAttack"
        header="Sp. Attack"
        sortable
        className="w-10"
      ></Column>
      <Column
        field="base.SpDefense"
        header="Sp. Defense"
        sortable
        className="w-10"
      ></Column>
    </DataTable>
  );
};

export default PokemonTable;
