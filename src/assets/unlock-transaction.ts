// public pagingData(event) {

//     try {

//       //hide progress bar
//       // if (!this.isSpinnerLoad) {
//       //   this.isSpinnerLoad = true;
//       // }
//       this.isSpinnerLoad = true;
//       //this.hiddenProgress = false;
//       //get select page size
//       this.tableConfig.pageSize = event.rows;

//       if (this.tableConfig.serverPaging) {
//         this.pageConfig.pageOffset = event.first / this.tableConfig.pageSize;

//         const keys = Object.getOwnPropertyNames(event.filters);

//         if (keys.length > 0) {
//           const searchs = [];

//           for (let index = 0; index < keys.length; index++) {
//             const elementSearch = event.filters[keys[index]];
//             let searchValue = elementSearch.value;
//             const colInfo = this.tableConfig.columnConfig.find(p => p.prop === keys[index]);

//             if (colInfo.prop === 'Time') {
//                 console.log(colInfo);
//               const timeVal = event.filters.Time.value as Date;

//               //   let isValidDate = moment(timeVal, DateFormat.SHORT_DATE, true);
//               //   if (!isValidDate.isValid()) {
//               //     isValidDate = moment(timeVal, DateFormat.LONG_DATE, true);

//               //     if (isValidDate.isValid()) {
//               //       searchValue = isValidDate.format(DateFormat.LONG_DATE);
//               //     } else {
//               //       continue;
//               //     }
//               //   } else {
//               //     searchValue = isValidDate.format(DateFormat.LONG_DATE);      
//               //   }

//               const beginTimeVal = new Date(timeVal.getFullYear(), timeVal.getMonth(), timeVal.getDate());
//               const endTimeVal = new Date(timeVal.getFullYear(), timeVal.getMonth(), timeVal.getDate(), 23, 59, 59);
//               searchValue = [beginTimeVal, endTimeVal];
//               searchs.push({
//                 SearchCondition: SearchCondition.DatePart,
//                 SearchField: keys[index],
//                 SearchValue: searchValue
//               });
//             } else if(colInfo.prop == 'CompanyName') {
//                 console.log(colInfo);
//               searchs.push({
//                 SearchCondition: SearchCondition.Contains,
//                 SearchField: keys[index],
//                 SearchValue: searchValue
//               });
//             }


//             // if (colInfo.type === 'datetime') {
//             //   const val = moment(searchValue, DateFormat.LONG_DATE, true);
//             //   const isValid = val.isValid();

//             //   if (!isValid) {
//             //     continue;
//             //   } else {
//             //     searchs.push({
//             //       SearchCondition: SearchCondition.Equal,
//             //       SearchField: keys[index],
//             //       SearchValue: val.toDate()
//             //     });
//             //   }
//             // } else if (colInfo.type === 'date') {
//             //   const val = moment(searchValue, DateFormat.SHORT_DATE, true);
//             //   const isValid = val.isValid();

//             //   if (isValid) {
//             //     searchValue = val;
//             //   } else {
//             //     continue;
//             //   }
//             // } else {

//             // }
//           }

//           const pageOffset = this.pageConfig.pageOffset + 1;
//           const pageSize = this.tableConfig.pageSize;

//           let fields = null;

//           if (!this.isLoadAllData) {
//             fields = this.tableConfig.columnConfig.map(x => x.prop);

//             if (!fields.find(x => x === PrimaryKey.Code)) {
//               fields.push(PrimaryKey.Code);
//             }

//             if (!fields.find(x => x === PrimaryKey.COMPANY_CODE)) {
//               fields.push(PrimaryKey.COMPANY_CODE);
//             }
//           }

//           if (searchs.length === 0) {
//             this.isSpinnerLoad = false;
//             return;
//           }

//           this.baseService.searchWithPaging(this.url_search_list, this.selectedCompanyCode, searchs,
//             pageOffset, pageSize, this.tableConfig.tableSort, null, fields).subscribe(response => {
//               //hide progress bar
//               //this.hiddenProgress = true;

//               if (response.Code === ResponseCode.Ok) {
//                 //store
//                 this.baseData = response.Data;
//                 this.tableConfig.data = response.Data;
//                 this.pageConfig.total = response.Total;
//               } else {
//                 //this.hiddenProgress = true;
//                 MessageUtitlity.showErrorServer();
//               }

//               this.isSpinnerLoad = false;
//             },
//               error => {
//                 //this.hiddenProgress = true;
//                 if (error.Code === ResponseCode.ServerError) {
//                   MessageUtitlity.showErrorServer();
//                 }

//                 this.isSpinnerLoad = false;
//               }
//             );

//           return;
//         }

//         //if search by search tool is true
//         if (this.isSearching) {
//           this.serverSearch();
//         } else {
//           this.loadDataByPaging(event.sortField, event.sortOrder);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }



//   @presentation({
//     tableDisplay: true,
//     displayName: VARIABLES.G_lblDateTime,
//     addForm: { isDisplay: false, isDisable: false },
//     viewForm: { isDisplay: true, isDisable: true },
//     editForm: { isDisplay: true, isDisable: true },
//     controlType: ControlType.DateTime,
//     searchCondition: SearchCondition.DateTimeRange,
//     orderNo: 12,
//     colWidth: ColumnWidth.DATETIME_LONG,
//     isFilter: true,
//     isCalendarFilter: true
//   })
//   public Time: Date;