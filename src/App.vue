<template>
  <div id="app">
    <FlexSetTable ref="custable" :rows="10" :cols="10" :origin-data="originData" @on-click-col="clickCol" @on-update="updateData">
      <div slot-scope="col">{{col.data}}</div>
    </FlexSetTable>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentKeys: {},
      originData: {
        row1: {
          col1: 'hello'
        },
        row7: {
          col3: 'world'
        }
      }
    }
  },
  methods: {
    clickCol(keys) {
      this.currentKeys = keys
      this.setData()
    },
    setData() {
      this.$refs.custable.setCol(this.currentKeys, '牛牛牛')
    },
    updateData(data) {
      this.originData = data
    }
  }
}
</script>

<style>

</style>
