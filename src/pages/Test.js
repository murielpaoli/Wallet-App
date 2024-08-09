/* import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import RecipeList from './RecipeList';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchInput: false,
      searchOption: 'ingredient',
      searchResults: [],
    };
  }

  toggleSearchInput = () => {
    this.setState((prevState) => ({
      showSearchInput: !prevState.showSearchInput,
    }));
  };

  handleSearchOptionChange = (event) => {
    this.setState({
      searchOption: event.target.value,
    });
  };

  handleSearch = async () => {
    const SEARCH_OPTION_INGREDIENT = 'ingredient';
    const SEARCH_OPTION_NAME = 'name';
    const SEARCH_OPTION_FIRST_LETTER = 'first-letter';
    const { searchOption } = this.state;
    const searchTerm = document.querySelector('#search-input').value.trim();
    if (searchOption === SEARCH_OPTION_FIRST_LETTER && searchTerm.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    let endpoint = '';
    const { location: { pathname } } = this.props;
    if (pathname === '/meals') {
      switch (searchOption) {
      case SEARCH_OPTION_INGREDIENT:
        endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
        break;
      case SEARCH_OPTION_NAME:
        endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        break;
      case SEARCH_OPTION_FIRST_LETTER:
        endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`;
        break;
      default:
        break;
      }
    } else if (pathname === '/drinks') {
      switch (searchOption) {
      case SEARCH_OPTION_INGREDIENT:
        endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
        break;
      case SEARCH_OPTION_NAME:
        endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        break;
      case SEARCH_OPTION_FIRST_LETTER:
        endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`;
        break;
      default:
        break;
      }
    }
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      this.setState({
        searchResults: data.meals || data.drinks || [],
      });
    } catch (error) {
      console.error(error);
    }
  };

  renderSearchInput() {
    const { showSearchInput, searchOption } = this.state;
    if (showSearchInput) {
      return (
        <div>
          <input
            id="search-input"
            type="text"
            data-testid="search-input"
            placeholder="Search"
          />
          <div>
            <label>
              <input
                type="radio"
                name="search-option"
                value="ingredient"
                checked={ searchOption === 'ingredient' }
                onChange={ this.handleSearchOptionChange }
                data-testid="ingredient-search-radio"
              />
              Ingredient
            </label>
            <label>
              <input
                type="radio"
                name="search-option"
                value="name"
                checked={ searchOption === 'name' }
                onChange={ this.handleSearchOptionChange }
                data-testid="name-search-radio"
              />
              Name
            </label>
            <label>
              <input
                type="radio"
                name="search-option"
                value="first-letter"
                checked={ searchOption === 'first-letter' }
                onChange={ this.handleSearchOptionChange }
                data-testid="first-letter-search-radio"
              />
              First letter
            </label>
          </div>
          <button
            type="button"
            onClick={ this.handleSearch }
            data-testid="exec-search-btn"
          >
            Search
          </button>
        </div>
      );
    }
    return null;
  }

  renderSearchIcon() {
    const { location: { pathname } } = this.props;

    if (pathname === '/meals' || pathname === '/Drinks') {
      return (
        <button
          type="button"
          onClick={ this.toggleSearchInput }
          data-testid="search-top-btn"
        >
          <img src={ searchIcon } alt="Search" />
        </button>
      );
    }

    return null;
  }

  renderTitle() {
    const { location: { pathname } } = this.props;
    let title = '';

    if (pathname === '/meals') {
      title = 'Meals';
    } else if (pathname === '/Drinks') {
      title = 'Drinks';
    } else if (pathname === '/profile') {
      title = 'Profile';
    } else if (pathname === '/done-recipes') {
      title = 'Done Recipes';
    } else if (pathname === '/favorite-recipes') {
      title = 'Favorite Recipes';
    }

    return <h1 data-testid="page-title">{title}</h1>;
  }

  render() {
    const { searchResults } = this.state;
    const { location: { pathname } } = this.props;
    const shouldRenderHeader = pathname !== '/meals/:id-da-receita'
    && pathname !== '/drinks/:id-da-receita'
    && pathname !== '/meals/:id-da-receita/in-progress'
    && pathname !== '/drinks/:id-da-receita/in-progress';

    if (!shouldRenderHeader) {
      return null;
    }

    return (
      <header>
        <Link to="/profile" data-testid="profile-top-btn">
          <img src={ profileIcon } alt="Profile" />
        </Link>
        {this.renderSearchIcon()}
        {this.renderTitle()}
        {this.renderSearchInput()}
        <RecipeList recipes={ searchResults } />
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Header); */
