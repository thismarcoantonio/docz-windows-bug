import React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import { InputBase, Theme, makeStyles, createStyles } from "@material-ui/core";

type Props = {
  onSearch: Function;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      width: "100%",
      marginLeft: 0,
      display: "flex",
      padding: "5px 10px",
      alignItems: "center",
      boxSizing: "border-box",
      marginRight: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[100]
    },
    searchIcon: {
      width: 20,
      marginRight: 6,
      color: theme.palette.grey[600]
    },
    searchInput: {
      padding: 0,
      fontSize: 14,
      width: "100%"
    },
    searchWrapper: {
      width: "100%"
    }
  })
);

const Search: React.FC<Props> = ({ onSearch }) => {
  const classes = useStyles();

  const handleSearch = (event: React.ChangeEvent<{ value: unknown }>) => {
    onSearch(event.target.value as string);
  };

  return (
    <div className={classes.search}>
      <SearchIcon className={classes.searchIcon} />
      <InputBase
        onChange={handleSearch}
        placeholder="Pesquisar..."
        inputProps={{ "data-testid": "search-input" }}
        classes={{ root: classes.searchWrapper, input: classes.searchInput }}
      />
    </div>
  );
};

export default Search;
