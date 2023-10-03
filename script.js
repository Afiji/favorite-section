const data =  [
    {
        number: 'Номер один',
        name: 'Лютер Харгривз',
        img: './images/лютер.jpeg',
        ability: 'Повышенная физическая сила и выносливость',
        nickname: 'Космобой',
    },
    {
        number: 'Номер два',
        name: 'Диего Харгривз',
        img: './images/диего.jpeg',
        ability: 'Изменение траектории полета предметов',
        nickname: 'Кракен',
    },
    {
        number: 'Номер три',
        name: 'Эллисон Харгривз',
        img: './images/эллисон.jpeg',
        ability: 'Воплощение в реальность любого сказанного ею слуха/сплетни',
        nickname: 'Слух',
    },
    {
        number: 'Номер четыре',
        name: 'Клаус Харгривз',
        img: './images/клаус.jpeg',
        ability: 'Общение с мертвыми и их призыв',
        nickname: 'Сеанс',
    },
    {
        number: 'Номер пять',
        name: 'Пять',
        img: './images/пять.jpeg',
        ability: 'Возможность прыгать сквозь пространство и время',
        nickname: 'Мальчик',
    },
    {
        number: 'Номер шесть',
        name: 'Бен Харгривз',
        img: './images/бен.jpeg',
        ability: 'Способность призыва монстров из иного измерения',
        nickname: 'Ужас',
    },
    {
        number: 'Номер семь',
        name: 'Ваня Харгривз',
        img: './images/ваня.jpeg',
        ability: 'Преобразование звука в энергию',
        nickname: 'Белая скрипка',
    },
]



const miniBlocks = document.querySelector('.container__for__miniBlocks')
const main__block = document.querySelector('.main__block')


data.forEach(el => {
    const box = document.createElement('div')
    const img = document.createElement('img')

    box.className = 'box'
    img.className = 'img'
    img.src = el.img


    img.addEventListener('click', () => {
        main__block.innerHTML = ''

        const boxMain = document.createElement('div')
        const clonedImage = document.createElement('img')
        const name = document.createElement('p')
        const number = document.createElement('p')
        const ability = document.createElement('p')
        const nickname = document.createElement('p')


        name.className = 'name'
        number.className = 'number'
        ability.className = 'ability'
        nickname.className = 'nickname'
        clonedImage.className = 'clonedImage'
        boxMain.className = 'boxMain'

        name.textContent = el.name
        number.textContent = el.number
        ability.textContent = el.ability
        nickname.textContent = el.nickname

        clonedImage.src = el.img

        boxMain.append(clonedImage, name, number, ability, nickname)
        main__block.append(boxMain)
    })

    box.append(img)
    miniBlocks.append(box)
})


