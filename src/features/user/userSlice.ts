import { getAddress } from "../../services/apiGeocoding";
import {
  // ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { InitalStateProp, positionGeo, positionType } from "../../types";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchUserAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = (await getPosition()) as positionGeo;

    const position: positionType = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };
    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  }
);

const initialState: InitalStateProp = {
  userName: "",
  status: "idle",
  position: {} as positionGeo["coords"],
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserAddress.pending, (state) => {
        state.status = "loading" as string;
      })
      .addCase(fetchUserAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchUserAddress.rejected, (state) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address. Make sure to fill this field!";
      });
  },
});

//  ActionReducerMapBuilder<AuthState>;
export const { updateName } = userSlice.actions;
export default userSlice.reducer;
