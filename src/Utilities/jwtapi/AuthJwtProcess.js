//sob jaigai share korar jorno alada jaigai akta function toiri kore log in oage google log in and reg page a share kora hoyec ajate code duplicate na hoi
export const setAuthJwt = (user) => {

    const userInfo = {
        email: user.email
    }

    fetch(`https://service-review-website-server-jade.vercel.app/jwt`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json()
            .then(data => {
                localStorage.setItem('service-review', data.token);
                // 

            }))
}