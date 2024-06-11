export const getImageUrl = (name, prefix) => {
    return new URL(`../assets/${prefix}/${name}.jpg`, import.meta.url).href
}

export const dataImages = [
    'img-01',
    'img-02',
    'img-03',
    'img-04',
    'img-05',
    'img-06',
    'img-07',
]