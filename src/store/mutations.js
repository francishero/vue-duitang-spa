import * as types from './mutation_types'

export default {
  // 添加社团
  [types.ADD_CLUB] (state, obj) {
    if(!state.clubs.includes(obj)) state.clubs.push(obj)
    return
  },
  // 删除社团
  [types.DELETE_CLUB] (state, obj) {
    let oIndex = state.clubs.findIndex((item) => {
      return item.name == obj.name
    })
    state.clubs.splice(oIndex, 1)
  },
  
}
