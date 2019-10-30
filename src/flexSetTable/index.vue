<template>
  <div class="custom-table">
    <div class="custom-table-row" :style="{borderColor: borderColor, border: noBorder}" v-for="(row, rowKey) in tableData" :key="rowKey">
      <div class="custom-table-col" :style="{borderColor: borderColor, border: noBorder}" v-for="(col, colKey) in row" :key="colKey" @click="onClickCol(rowKey, colKey)">
        <slot :data="col"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .custom-table{
    width: 100%;
    height: 100%;
    &-row{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: stretch;
      border-top: 1px solid #e7e7e7;
      border-right: 1px solid #e7e7e7;
      &:last-of-type{
        border-bottom: 1px solid #e7e7e7;
      }
    }
    &-col{
      width: 100%;
      min-height: 50px;
      box-sizing: border-box;
      border-left: 1px solid #e7e7e7;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
<script>
  export default {
    name: "FlexSetTable",
    props: {
      noBorder: {
        type: Boolean,
        defalut: false
      },
      borderColor: {
        type: String,
        default: '#e7e7e7'
      },
      rows: {
        type: Number,
        required: true
      },
      cols: {
        type: Number,
        required: true
      },
      originData: {
        type: Object,
        default() {
          return {
          }
        }
      }
    },
    data() {
      return {
        tableData: {}
      }
    },
    created() {
      this.initModal()
    },
    methods: {
      initModal() {
        let tableData = {}
        for(let i = 1; i <= this.rows; i++) {
          tableData['row' + i] = {}
          for(let j = 1; j <= this.cols; j++) {
            if (this.originData['row' + i]) {
              tableData['row' + i]['col' + j] = this.originData['row' + i]['col' + j]
            } else {
              tableData['row' + i]['col' + j] = null
            }
          }
        }
        this.tableData = tableData
        this.$emit('on-update', this.tableData)
      },
      onClickCol(rowKey, colKey) {
        this.tableData[rowKey][colKey] = 'c'
        this.$emit('on-click-col', { rowKey, colKey })
      },
      setCol({rowKey,colKey}, value) {
        this.tableData[rowKey][colKey] = value
        this.$emit('on-update', this.tableData)
      }
    }
  }
</script>
