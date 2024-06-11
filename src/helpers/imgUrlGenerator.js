const prefix = "../assets/ourHouse/"

export const imgUrlGenerator = () => {
    let imgUrl = []

    for (let i = 1; i <= 6; i++) {
        imgUrl.push(`${prefix}img-0${i}.jpg`)
    }
    return imgUrl
}

