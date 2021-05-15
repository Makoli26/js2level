const goods = [
    { title: 'MP-3 плеер', price: 1500 },
    { title: 'Кофемашина Siemens', price: 20000 },
    { title: 'Музыкальная колонка', price: 3500 },
    { title: 'Холодильник AEG', price: 100250 },
    { title: 'Кофемашина SAECO', price: 1002 },
    { title: 'Mикроволновая печь', price: 10250 },
    { title: 'Наушники', price: 11250 },
    { title: 'МФУ', price: 11250 },
    { title: 'Вафельница', price: 15000 },
    { title: 'Ветнилятор', price: 4000 },

];


const renderGoodsItem = (title = 'product', price = 0) => {
    return `<div class="goods-item"><a>${title}</a><p class="price">${price}</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);



