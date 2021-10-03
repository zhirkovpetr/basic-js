export default function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!'
  }
  if(isNaN(Date.parse(date)) || Object.prototype.toString.call(date) !== '[object Date]' || Object.keys(date).length !== Object.keys(new Date()).length){
    throw new Error('Invalid date!')
  }

  let month = date.getMonth()

  if(month === 0 || month === 1 || month === 11){
    return 'winter'
  } else if(month >= 2 && month <= 4){
    return 'spring'
  } else if(month >= 5 && month <= 7){
    return 'summer'
  } else {
    return 'autumn'
  }
}