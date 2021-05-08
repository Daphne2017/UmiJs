export default {

    state: {
        count:{
            num:{
                value:1
            }
        }
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        dispatch({type:'update'})
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save', });
      },
    },
  /**
   * redux存在的问题是不允许直接修改state
   *  {...state,...payload}
   *  concat
   *  深度拷贝
  */
    reducers: {
      update(state, action) {
        // return { ...state, ...action.payload };
        // return state.count.num.value +=1
         state.count.num.value +=1
      },
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  