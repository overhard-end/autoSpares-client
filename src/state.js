export const init = {
  gridType: 'grid',

  sortOption: 'по популярности',
  darkMode: true,

  isFilterOpen: false,
  isFavoriteOpen: false,
  isCartOpen: false,
  isProductOpen: false,

  allProducts: [],
  filters: [],
  itemsInCart: [],
  itemsInFavorite: [],
  selectedProduct: {},
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case 'favorite_toggle':
      return {
        ...state,
        isFilterOpen: false,
        isCartOpen: false,
        isCardOpen: false,
        isFavoriteOpen: !state.isFavoriteOpen,
      };
    case 'favorite_remove':
      return {
        ...state,
        itemsInFavorite: state.itemsInFavorite.filter((item) => item.id !== action.payload.id),
      };
    case 'favorite_add':
      return {
        ...state,
        itemsInFavorite: state.itemsInFavorite.some((item) => item.id === action.payload.id)
          ? state.itemsInFavorite
          : [...state.itemsInFavorite, action.payload],
      };
    case 'grid_set':
      return {
        ...state,
        gridType: state.gridType === 'grid' ? 'list' : 'grid',
      };
    case 'sort_set':
      return {
        ...state,
        sortOption: action.payload,
      };
    case 'filter_remove':
      const newFileters = state.filters.filter((item) => item !== action.payload);
      return {
        ...state,
        filters: newFileters,
      };
    case 'filter_set':
      return {
        ...state,
        filters: !state.filters.includes(action.payload)
          ? [...state.filters, action.payload]
          : [...state.filters],
      };

    case 'filter_toggle':
      return {
        ...state,
        isFavoriteOpen: false,
        isCartOpen: false,
        isFilterOpen: !state.isFilterOpen,
      };
    case 'change_theme':
      return {
        ...state,
        darkMode: state.darkMode ? false : true,
      };
    case 'set_products':
      return {
        ...state,
        allProducts: action.payload,
      };

    case 'add_cart_item':
      return {
        ...state,
        itemsInCart: state.itemsInCart.some((item) => item.id === action.payload.id)
          ? state.itemsInCart
          : [...state.itemsInCart, action.payload],
      };
    case 'remove_cart_item':
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter((item) => item.id !== action.payload),
      };
    case 'cart_toggle':
      return {
        ...state,
        isFilterOpen: false,
        isFavoriteOpen: false,
        isProductOpen: false,
        isCartOpen: !state.isCartOpen,
      };

    case 'product_open':
      return {
        ...state,
        selectedProduct: action.payload,
        isProductOpen: true,
      };
    case 'product_close':
      return {
        ...state,
        selectedProduct: {},
        isProductOpen: false,
      };

    default:
      return state;
  }
};
