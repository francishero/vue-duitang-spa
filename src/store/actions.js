import * as types from './mutation_types'
export default {
  
  // 社团增加
  add_club: ({ commit }, obj) => {
    commit(types.ADD_CLUB, obj)
  },
  // 社团减少
  delete_club: ({ commit }, obj) => {
    commit(types.DELETE_CLUB, obj)
  },
}
