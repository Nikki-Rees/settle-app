import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_ROOM,
    REMOVE_ROOM,
    UPDATE_ROOMS,
    ADD_ROOM,
    ADD_FEATURE,
    UPDATE_FEATURES,
    REMOVE_FEATURE,
    LOADING,
    REMOVE_FEATURE
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_ROOM:
            return {
                ...state,
                currentRoom: action.room,
                loading: false
            };

        case UPDATE_ROOMS:
            return {
                ...state,
                rooms: [...action.rooms],
                loading: false
            };

        case ADD_ROOM:
            return {
                ...state,
                rooms: [action.room, ...state.ROOMs],
                loading: false
            };

        case REMOVE_ROOM:
            return {
                ...state,
                rooms: state.rooms.filter((room) => {
                    return room._id !== action._id;
                })
            };

        case ADD_FEATURE:
            return {
                ...state,
                features: [action.room, ...state.features],
                loading: false
            };

        case UPDATE_FEATURES:
            return {
                ...state,
                features: [...state.features],
                loading: false
            };

        case REMOVE_FEATURE:
            return {
                ...state,
                features: state.features.filter((room) => {
                    return room._id !== action._id;
                })
            };

        case LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        rooms: [],
        currentRoom: {
            _id: 0,
            title: "",
            body: "",
            author: ""
        },
        features: [],
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
