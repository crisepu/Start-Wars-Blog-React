import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const FavoriteDropdown = () => {
    const { store, actions } = useContext(Context);

    const showFavorites = (favorites) => {
        favorites.length > 0 &&
        favorites.map((favorite) => {
            return (
                <li key={favorite.id}>
                <a className="dropdown-item" href="#"> //modificar para linkear a favorito
                  {favorite.name}                       // agregar boton para eliminar
                </a>
              </li>
            )

        })
    }
  return (
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
       Favorites
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {showFavorites()}
      </ul>
    </div>
  );
};

export default FavoriteDropdown;
