// Mixin - states - actions
import { mapGetters, mapActions } from 'vuex';

export const  ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible'
    ])
  },
  method: {
    ...mapActions([
      'setMenuVisible'
    ])
  }
}
