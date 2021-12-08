const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			details: []
		},
		actions: {
			addFav: name => {
				setStore({ favorites: [...getStore().favorites, name] });
			},
			addDetails: detail => {
				setStore({ details: [...getStore().details, detail] });
			},
			deleteFavorite: name => {
				let store = getStore();
				let index = store.favorites.indexOf(name);

				const arr = store.favorites.filter(function(item) {
					return item !== name;
				});
				setStore({ favorites: arr });
			},
			deleteDetails: detail => {
				let store = getStore();
				let index = store.details.indexOf(detail);

				const arr = store.details.filter(function(item) {
					return item === 0;
				});
				setStore({ details: arr });
			}
		}
	};
};

export default getState;
