export default {


    // 

    // USD Symbol
    currencyUSD(value) {
      return '$' + value
    },

    // Cent Symbol
    currencyCent(value) {
        return '¢' + value
      },

    // Time Stamp
    timestampFormatted(time) {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const timestamp = new Date(time);
        const date = timestamp.getDate();
        const month = monthNames[timestamp.getMonth()];
        const year = timestamp.getFullYear();
        const timeValue = timestamp.getHours() + ':' + timestamp.getMinutes() + ':' + timestamp.getSeconds() + 's';
      
        return [date, month, year, timeValue];
      },




  }