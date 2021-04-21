import { createSlice } from "@reduxjs/toolkit";

const FostererSlice = createSlice({
  name: "fosterers",
  initialState: {
    value: [
      {
        id: 1,
        name: "Jackson O'Doherty",
        image: "/static/images/avatar.png",
        rating: "4.9/5.0",
        phoneNum: "123-456-7890",
        email: "jackson@odoherty.com",
        bio: "I live for pet animals!",
        message:
          "I love dogs and I have one myself - a Retriever. He's good with other dogs, hence I'm willing to foster your pet as well.",
      },
      {
        id: 2,
        name: "John Krasinski",
        image: "/static/images/avatar2.jpg",
        rating: "4.2/5.0",
        phoneNum: "123-456-7890",
        email: "John@krasinski.com",
        bio: "Grew up with 3 dogs and a cat. Love pets!",
        message:
          "I grew up with 3 dogs, 2 cats and a horse. I'm very good with pets.",
      },
      {
        id: 3,
        name: "Matthew Perry",
        image: "/static/images/avatar3.jpg",
        rating: "4.7/5.0",
        phoneNum: "123-456-7890",
        email: "chandler@bing.com",
        bio: "Great with pets!",
        message:
          "I love dogs and I have one myself. Willing to take care of yours - please reach out.",
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value.append(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter(
        profile => profile.id !== action.payload
      );
    },
  },
});

export const { add, remove } = FostererSlice.actions;
export default FostererSlice.reducer;
