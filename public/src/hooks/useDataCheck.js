import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../globalState/context";

export default function useDataCheck() {
    const { globalState, dispatch } = useContext(GlobalContext);
    let temp = [];

    const check = () => {
        if (globalState.userData) {
            const { username, firstname, lastname, address, role } =
                globalState.userData;
            if (!username || !firstname || !lastname || !address || !role) {
                for (const [key, value] of Object.entries(
                    globalState.userData
                )) {
                    !value ? (temp = [...temp, key]) : null;
                }

                dispatch({ type: "MISSING_DATA", payload: [...temp] });
            } else {
                dispatch({ type: "MISSING_DATA", payload: null });
            }
        }
    };

    return check;
}
