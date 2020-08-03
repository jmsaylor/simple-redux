const NEW_PLAYER = "NEW_PLAYER";
const ADD_TEN = "ADD_TEN";
const SUBTRACT_TEN = "SUBTRACT_TEN";

const initialState = {
  newPlayerId: 1000,
  scores: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PLAYER: {
      const player = state.newPlayerId;
      return {
        ...state,
        newPlayerId: player + 1,
        scores: {
          ...state.scores,
          [player]: 0,
        },
      };
    }
    case ADD_TEN: {
      const { player } = action;
      const score = state.scores[player] + 10;
      return {
        ...state,
        scores: {
          ...state.scores,
          [player]: score,
        },
      };
    }

    case SUBTRACT_TEN: {
      const { player } = action;
      const score = state.scores[player] - 10;
      return {
        ...state,
        scores: {
          ...state.scores,
          [player]: score,
        },
      };
    }

    default:
      return state;
  }
};

const actions = [
  { type: NEW_PLAYER },
  { type: NEW_PLAYER },
  { type: NEW_PLAYER },
  { type: ADD_TEN, player: 1000 },
  { type: ADD_TEN, player: 1002 },
  { type: ADD_TEN, player: 1002 },
  { type: SUBTRACT_TEN, player: 1001 },
  { type: SUBTRACT_TEN, player: 1000 },
];

const state = actions.reduce(reducer, undefined);

const scores = JSON.stringify(state);

ReactDOM.render(
  React.createElement("div", null, scores),
  document.getElementById("root")
);
