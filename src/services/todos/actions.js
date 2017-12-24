
import * as types from "./constants";

export function todos_add_todo(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.TODOS_ADD_TODO,
			payload: payload
		});

	}
}


export function todos_finishTodo(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.TODOS_FINISH_TODO,
			payload: payload
		});

	}
}

export function todos_removeTodo(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.TODOS_REMOVE_TODO,
			payload: payload
		});

	}
}

export function todos_toggle_edit_todo(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_TOGGLE_EDIT,
			payload
		});
	};
};




export function todos_change_edit_todo(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_CHANGE_EDIT,
			payload: payload
		})
	};
};



export function todos_confirm_edit_todo(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_CONFIRM_EDIT,
			payload
	})
	};
};

export function todos_increment(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_INCREMENT,
			payload
		})
	}
}

export function todos_increment_achat(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_INCREMENT_ACHAT,
			payload
		})
	}
}


export function todos_decrement(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_DECREMENT,
			payload
		})
	}
}

export function todos_decrement_achat(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_DECREMENT_ACHAT,
			payload
		})
	}
}

export function todos_valider_achat(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.TODOS_VALIDER_ACHAT,
			payload
		})
	}
}

