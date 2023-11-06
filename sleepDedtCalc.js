function getSleepHours(day) {
    switch (day) {
      case 'Monday'.toLowerCase():
        return 8
        break
      case 'Tuesday'.toLowerCase():
        return 6
        break
      case 'Wednesday'.toLowerCase():
        return 2.5
        break
      case 'Thursday'.toLowerCase():
        return 7.5
        break
      case 'Friday'.toLowerCase():
        return 8
        break
      case 'Saturday'.toLowerCase():
        return 5
        break
      case 'Sunday'.toLowerCase():
        return 5.5
        break
      default:
        return 'Go and sleep'
    }
  }
  // console.log(getSleepHours('sunday'))
  
  function getActualSleepHours() {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  }
  // console.log(getActualSleepHours())
  
  function getIdealSleepHours() {
    const idealHours = 8
    return idealHours * 7
  }
  // console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getIdealSleepHours()
    const idealSleepHours = getActualSleepHours()
    const result = - idealSleepHours + actualSleepHours
  
    if (idealSleepHours === actualSleepHours) {
      console.log('user got the perfect amount of sleep')
    }else if (idealSleepHours < actualSleepHours) {
      console.log(`user got more sleep than needed by ${result} hours`)
    } else if (idealSleepHours > actualSleepHours) {
      console.log(`user should get some rest by ${result} hours`)
    }
  }
  
  calculateSleepDebt()