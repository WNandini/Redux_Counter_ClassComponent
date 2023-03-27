function addValue(data) {
    return {
        type: "ADD_VALUE",
        payload: {value: data.value+1}
    }
}

function decreaseValue(data) {
    return {
        type: "DECREASE_VALUE",
        payload: {value: data.value-1}
    }
}
export { addValue, decreaseValue }