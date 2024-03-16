import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { useQuery } from "@apollo/client";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import { InputText } from "primereact/inputtext";
import { GET_POKEMON } from "../../queries/pokemonQueries";
import { pokemonTypeTemplate } from "../Templates/pokemonTypeTemplate";
import { imageBodyTemplate } from "../Templates/imageBodyTemplate";
import { dropdownTypeTemplate } from "../Templates/dropdownTypeTemplate";
import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "./PokemonTable.css"

const PokemonTable = () => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [selectedType, setSelectedType] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const header = () => {
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
      <div className="tableHeader">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Pokemon search"
            onInput={(e) => {
              setFilters({
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
                types: { value: null, matchMode: FilterMatchMode.EQUALS },
              });
              setSelectedType(null);
            }}
            className="arcade"
          />
        </span>
        <Dropdown
          value={selectedType}
          options={types.map((type) => ({ label: type, value: type }))}
          onChange={(e) => {
            setSelectedType(e.value);
            setFilters((prevFilters) => ({
              ...prevFilters,
              type: { value: e.value, matchMode: FilterMatchMode.EQUALS },
            }));
          }}
          itemTemplate={dropdownTypeTemplate}
          optionLabel="label"
          placeholder="Select Type"
          className="p-column-filter"
          showClear
          style={{ minWidth: "12rem" }}
        />
      </div>
    );
  };

  const totalBase = (rowData) => {
    return (
      rowData.base.HP +
      rowData.base.Speed +
      rowData.base.Attack +
      rowData.base.Defense +
      rowData.base.SpAttack +
      rowData.base.SpDefense
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
        className="w-20"
        style={{ minWidth: "12rem" }}
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