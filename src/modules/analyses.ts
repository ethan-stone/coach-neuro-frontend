import Analysis from "../interfaces/analysis";

interface AnalysesState {
  analyses: Analysis[];
}

const analysesState: AnalysesState = {
  analyses: []
};

export const analysesModule = {
  state: analysesState,
  getters: {
    analyses(state: AnalysesState) {
      return state.analyses;
    }
  },
  mutations: {
    setAnalyses(state: AnalysesState, payload: {});
  }
};
