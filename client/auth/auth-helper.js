/**
 * Để lưu thông tin đăng nhập JWT nhận được từ máy chủ khi đăng nhập thành công, chúng tôi sử dụng phương thức xác thực (authenticate)
 */

authenticate(jwt, cb); {
    if(typeof window !== "undefined")
        sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
}


/**
 * Trong các thành phần giao diện người dùng của chúng tôi, chúng tôi sẽ cần truy xuất thông tin đăng nhập được lưu trữ để kiểm tra xem người dùng hiện tại đã đăng nhập hay chưa. Trong phương thức isAuthenticated (), chúng ta có thể truy xuất các thông tin đăng nhập này từ sessionStorage.
 */

isAuthenticated(); {
    if (typeof window == "undefined")
        return false

    if (sessionStorage.getItem('jwt'))
        return JSON.parse(sessionStorage.getItem('jwt'))
    else
        return false
}

/**
 * Khi người dùng đăng xuất thành công khỏi ứng dụng, chúng tôi muốn xóa thông tin đăng nhập JWT đã lưu trữ khỏi sessionStorage
 */

clearJWT(cb); {
    if(typeof window !== "undefined")
        sessionStorage.removeItem('jwt')
    cb()
    signout().then((data) => {
        document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
}