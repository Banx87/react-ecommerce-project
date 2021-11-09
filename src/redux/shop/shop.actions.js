import ShopActionTypes from "./shop.types";

import { onSnapshot, collection } from "@firebase/firestore";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
  payload: collectionsMap,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = collection(db, "collections");
    dispatch(fetchCollectionsStart());

    onSnapshot(
      collectionRef,
      (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      },
      (error) => dispatch(fetchCollectionsFailure(error.message))
    );
  };
};
