import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Container, Badge } from "react-bootstrap";
import Loader from "./components/Loader";
import GamesSearchBar from "./components/GamesSearchBar";
import GamesList from "./components/GamesList";
import Pagination from "./components/Pagination";
import FilterByProvider from "./components/FilterByProvider";

const App = () => {
  let url = "data.json";
  const [gamesList, setGamesList] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // variables used for pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 16;

  // variables used for filter by logic
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    if (!gamesList.length) {
      axios
        .get(url)
        .then((response) => {
          setGamesList(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [url, gamesList]);

  useEffect(() => {
    const filteredList = gamesList
      .filter((game) => {
        // check on user input for search and filter live on search input
        if (searchInput) {
          return game.name
            .toLowerCase()
            .includes(searchInput.toLocaleLowerCase());
        }
        return true;
      })
      .filter((game) => {
        // check on what current provider chosen is active
        if (selectedProvider) {
          return game.provider_title === selectedProvider.value;
        }
        return true;
      });

    setFilteredGames(filteredList);
  }, [searchInput, selectedProvider, gamesList]);

  // provider options for labels UI and values to use for filter by
  const providerOptions = useMemo(() => {
    const providers = Array.from(
      new Set(gamesList.map((game) => game.provider_title))
    );

    return providers.map((provider) => ({
      value: provider,
      label: provider,
    }));
  }, [gamesList]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const numberOfPages = filteredGames
    ? Math.ceil(filteredGames.length / gamesPerPage)
    : Math.ceil(gamesList.length / gamesPerPage);

  const lastIndex = currentPage * gamesPerPage;
  const firstIndex = lastIndex - gamesPerPage;

  const currentGames = filteredGames.slice(firstIndex, lastIndex);

  return (
    <Container>
      <h2 className="text-uppercase text-center my-5">
        games list lobby <Badge bg="info">{gamesList.length} New</Badge>
      </h2>

      {/* show loader when data are getting to be fetched until we have data */}
      {!gamesList && <Loader />}

      {/* show search bar to search by game name */}
      <GamesSearchBar
        handleInputChange={handleInputChange}
        searchInput={searchInput}
      />

      {/* filter by provider of games lobby */}
      <FilterByProvider
        providerOptions={providerOptions}
        setSelectedProvider={setSelectedProvider}
        selectedProvider={selectedProvider}
      />

      {/* show games list and filtered ones */}
      <GamesList gamesList={currentGames} />

      {/* pagination built to have better UI view and better UX instead of scrolling long */}
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default App;
