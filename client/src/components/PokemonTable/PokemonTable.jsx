import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { pokemonTypeTemplate } from "../Templates/pokemonTypeTemplate";
import { imageBodyTemplate } from "../Templates/imageBodyTemplate";
import { dropdownTypeTemplate } from "../Templates/dropdownTypeTemplate";
import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "./PokemonTable.css";
import { useNavigate } from "react-router-dom";
import { types } from "../../utils/types";

const PokemonTable = ({ data }) => {
  // Filters for search bar
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Table header, with search bar and type filter dropdown
  const header = () => {
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
              type: { value: e.value, matchMode: FilterMatchMode.CONTAINS },
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

  // Change pokemon objects to include a total field
  // NOTE: This speeds up sorting speeds considerably, versus simply summing up the fields in the data table
  const pokemonData = data.pokemons.map((pokemon) => ({
    ...pokemon,
    totalBase:
      pokemon.base.HP +
      pokemon.base.Speed +
      pokemon.base.Attack +
      pokemon.base.Defense +
      pokemon.base.SpAttack +
      pokemon.base.SpDefense,
  }));

  return (
    <DataTable
      value={pokemonData}
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      rowsPerPageOptions={[10, 20, 50, 100]}
      paginator
      showGridlines
      rows={10}
      paginatorTemplate="RowsPerPageDropdown PrevPageLink CurrentPageReport NextPageLink"
      className="arcade data-table"
      scrollable
      scrollHeight="70vh"
      dataKey="id"
      emptyMessage="No pokemon found."
      globalFilterFields={["name"]}
      filters={filters}
      header={header}
      selectionMode="single"
      selection={selectedProduct}
      onSelectionChange={(e) => {
        setSelectedProduct(e.value);
        navigate(`/pokemon/${e.value.id}`); // Go to selected pokemon vue
      }}
    >
      <Column body={imageBodyTemplate} className="w-10"></Column>
      <Column field="id" header="ID" sortable className="w-3"></Column>
      <Column field="name" header="Name" sortable className="w-1"></Column>
      <Column
        field="base.type"
        header="Type"
        body={pokemonTypeTemplate}
        className="w-1"
        style={{ minWidth: "12rem" }}
      ></Column>
      <Column
        header="Total"
        field="totalBase"
        sortable
        className="w-2"
      ></Column>
      <Column field="base.HP" header="HP" sortable className="w-5"></Column>
      <Column
        field="base.Speed"
        header="Speed"
        sortable
        className="w-2"
      ></Column>
      <Column
        field="base.Attack"
        header="Attack"
        sortable
        className="w-2"
      ></Column>
      <Column
        field="base.Defense"
        header="Defense"
        sortable
        className="w-2"
      ></Column>
      <Column
        field="base.SpAttack"
        header="Sp. Att"
        sortable
        className="w-2"
      ></Column>
      <Column
        field="base.SpDefense"
        header="Sp. Def"
        sortable
        className="w-2"
      ></Column>
    </DataTable>
  );
};

export default PokemonTable;
