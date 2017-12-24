import * as types from "./constants";


const initialState = {
	items: [],
	edits: [],
};


export default function reducer(state = initialState, action)
{
	switch (action.type) {

		case types.TODOS_ADD_TODO:
			var {items} = state;

			items.push(
				{
					id: Date.now(),
					nom: action.payload.nom,
					description: action.payload.description,
					prix: action.payload.prix,
					image: action.payload.image,
					quantite: 0,
					completed: false,
					acheter: 0,
				}
			);

			return {
				...state,
				items: items
			};
			break;


		case types.TODOS_INCREMENT:
			var {items} = state;
			console.log(state);
			items[action.payload.index].quantite ++ ;

			return {
				...state,
				items: items
			}
			break;

		case types.TODOS_DECREMENT:
			var {items} = state;
			console.log("test");
			if ( items[action.payload.index].quantite >0){
			items[action.payload.index].quantite --;
			return {
				...state,
				items: items
			}}
			else{
			items[action.payload.index].quantite = 0 ;
			return {
				...state,
				items: items
			}

				};
			break;

		case types.TODOS_INCREMENT_ACHAT:
			var {items} = state;
			items[action.payload.index].acheter++ ;

			return {
				...state,
				items: items
			};
			break;

		case types.TODOS_DECREMENT_ACHAT:
			var {items} = state;
			console.log("test");
			if ( items[action.payload.index].quantite >0){
			items[action.payload.index].acheter --;
			return {
				...state,
				items: items
			}}
			else{
			items[action.payload.index].acheter = 0 ;
			return {
				...state,
				items: items
			}

				};
			break;

		case types.TODOS_FINISH_TODO:
			var { items } = state;

			var index = items.findIndex((obj) => obj.id == action.payload)
			items[index].completed = true;
			//console.log("TODOS_FINISH_TODO", items);
			return {
				...state,
				items: items
			};
			break;

		case types.TODOS_REMOVE_TODO:
			var { items } = state;

			var index = items.findIndex((obj) => obj.id == action.payload)
			items.splice(index, 1)
			return {
				...state,
				items: items
			};
			break;

		case types.TODOS_CONFIRM_EDIT:

			var {edits, items} = state;

			var indexEdit = edits.findIndex((obj) => obj.id == action.payload.id);
			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);

			items[indexItems] = edits[indexEdit];

			return {
				...state,
				edits
			}
			break;

		case types.TODOS_CHANGE_EDIT:
			console.log("change");
			var {edits} = state;
			var indexEdit = edits.findIndex((obj) => obj.id == action.payload.id);
			edits[indexEdit].nom= action.payload.nom ;
			edits[indexEdit].description= action.payload.description ;
			edits[indexEdit].prix= action.payload.prix ;
			edits[indexEdit].image= action.payload.image ;
			return {
				...state,
				edits: edits
			};

			break;

		case types.TODOS_TOGGLE_EDIT:
			console.log("edit");
			var {edits} = state;

			var indexEdit = edits.findIndex((obj) => obj.id == action.payload.id);

			if (indexEdit > -1) {
				edits.splice(indexEdit, 1);
			} else {
				edits.push(action.payload);
				
			}

			return {
				...state,
				edits: edits
			}
			break;




		case types.TODOS_VALIDER_ACHAT:
			var {items} = state;
			items[action.payload.index].acheter=0 ;
			return {
				...state,
				items: items
			};
			break;

		default:
			return state;

	}
};

