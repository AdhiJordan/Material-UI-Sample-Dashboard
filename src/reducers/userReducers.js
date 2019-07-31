const userReducers = (state = {user: [], name: null, count: 0}, action) => {
	switch(action.type){
		case "ADD_USER_DATA":
		return {user: [...state.user.concat(action.payload)]};
		break;

		case "UPDATE_USER_DATA":

			return {user: [...state.user].map((item, index) => {
		    if (index !== action.payload.id) {
		    	console.log("ites\m ------>", item)
		      return item
		    }
		    console.log("comapre1", {...state.user, ...action.payload.userUpdatedData})
		    return {
		    	...action.payload.userUpdatedData,
		     	...state.user
		      
		    }
		  })}
		break;



		case "DELETE_USER_DATA":
		return {
			user: [
				...state.user.slice(0, action.payload),
				...state.user.slice(action.payload + 1)
			]
		}
		break;

		default:
		return state;
	}
}

export default userReducers;