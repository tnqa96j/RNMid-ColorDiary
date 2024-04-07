import React from 'react';
import { View ,Text} from "react-native";
import { SketchPicker } from 'react-color';

export default function PickColorScreen(){
    return(
        <>
            <SketchPicker 
            color="#ff0000"
            onChange={color => console.log(color)}
            />
        </>
    );
}