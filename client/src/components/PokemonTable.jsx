import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../queries/pokemonQueries";
import { pokemonTypeTemplate } from "./pokemonTypeTemplate";
import { imageBodyTemplate } from "./imageBodyTemplate";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const PokemonTable = () => {
  const [filter, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <>
      <DataTable
        value={data.pokemons}
        loading={loading}
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        rowsPerPageOptions={[10, 20, 50, 100]}
        paginator
        showGridlines
        rows={10}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        style={{ maxWidth: "80%", width: "80%" }}
      >
        <Column header="" body={imageBodyTemplate}></Column>
        <Column field="id" header="ID" sortable></Column>
        <Column
          field="name"
          header="Name"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="base.type"
          header="Type"
          body={pokemonTypeTemplate}
          sortable
        >
          style={{ maxWidth: "10%", width: "10%" }}
        </Column>
        <Column
          field="base.HP"
          header="HP"
          sortable
          style={{ maxWidth: "15%", width: "15%" }}
        ></Column>
        <Column
          field="base.Speed"
          header="Speed"
          sortable
          style={{ maxWidth: "15%", width: "15%" }}
        ></Column>
        <Column
          field="base.Attack"
          header="Attack"
          sortable
          style={{ maxWidth: "15%", width: "15%" }}
        ></Column>
        <Column field="base.Defense" header="Defense" sortable>
          {" "}
          style={{ maxWidth: "15%", width: "15%" }}
        </Column>
      </DataTable>
    </>
  );
};

export default PokemonTable;
