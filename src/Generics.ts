function userInfo<T>(userId: T) {
    console.log(`user id: ${userId}`)
}

userInfo(123) // number
userInfo("hello") // string
userInfo(true) // boolean
userInfo({x: 10}) // object
userInfo(null)
userInfo(undefined)
userInfo(-1)
