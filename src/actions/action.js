//ACTION CREATOR AND ACTION 
export const selectItem = (item) => {
    return {
        type: 'ITEM_SELECTED',
        payload: item
    }
};