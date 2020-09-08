const { default: AddedFeature } = require("../components/AddedFeature");

const ADD_FEATURE = 'ADD_FEATURE';
const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function addFeature(feature){
    return {type: ADD_FEATURE, payload: feature}
}

export function removeFeature(feature){
    return {type: REMOVE_FEATURE, payload: feature}
}