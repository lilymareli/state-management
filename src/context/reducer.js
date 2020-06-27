// state = store'daki nesnelerim
// action = dispatch'e gönderdiğim veri

export function reducer(state, action) {
    switch (action.type) {
        case "SET_USER":
            state.user = action.userOBJ
            return { ...state } //güncellenmiş veriyi böyle göndeririz

        case "SET_CATS":
            state.catFacts = action.catFactsARR
            return { ...state }

        default:
            return state
    }
}