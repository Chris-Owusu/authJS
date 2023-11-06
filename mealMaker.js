const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if(typeof mealToCheck === 'string') {
        return this._meal
      }
    },
    set price(priceToCheck) {
      if(typeof priceToCheck === 'number') {
        return this._price
      }
    },
    get todaysSpecial() {
      if(this._meal && this._price) {
        return `Today’s Special is ${_meal} for ${_price}`
      }
      return `Meal or price was not set correctly!`
    }
  }
  
  menu.meal = 'werty'
  menu.price = 9
  console.log(menu)
  console.log(menu.todaysSpecial)