

export const initialUserState= {
    userName:null,
    money:null,
    isUserCreated:null
}

export const LoadUserState=()=>{
    const userData=localStorage.getItem("userState");
    if (userData){
        return JSON.parse(userData)
    }
    return{ initialUserState}
}
export const UserReducer=(state,action)=>{
    switch(action.type) {
        case "SET_USERNAME":
            return {...state,userName:action.payload};
        case "SET_MONEY":
            return{...state, money: parseInt(action.payload)};
        case "SET_USER_CREATED":
            return {...state, isUserCreated: action.payload};
        default :
            return state;

    }
}

