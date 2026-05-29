import React, { useRef, useState } from 'react';

const Products = () => {
  const catalog = [
    {
      category: 'Хлеб',
      items: [
        { 
          id: 1, 
          title: 'Багет французский', 
          price: '90 ₽', 
          desc: 'Классический хрустящий багет с пористым мякишем.', 
          fullDesc: 'Традиционный французский багет, приготовленный по классическому рецепту на натуральной закваске. Отличается хрустящей золотистой корочкой и крупнопористым мякишем.',
          weight: '250 г',
          kbju: 'К: 260 | Б: 7.5 | Ж: 1.0 | У: 52.0',
          allergens: 'Глютен',
          img: '/images/products/baguette.jpg' 
        },
        { 
          id: 2, 
          title: 'Ржаной хлеб', 
          price: '75 ₽', 
          desc: 'Ароматный ржаной хлеб.', 
          fullDesc: 'Плотный ржаной хлеб с насыщенным вкусом, приготовленный с использованием солода. Идеально подходит для бутербродов и супов.',
          weight: '400 г',
          kbju: 'К: 210 | Б: 6.0 | Ж: 1.2 | У: 41.0',
          allergens: 'Глютен',
          img: '/images/products/rjanoi-bread.jpg' 
        },
        { 
          id: 3, 
          title: 'Чиабатта', 
          price: '95 ₽', 
          desc: 'Итальянский белый хлеб с крупной пористостью.', 
          fullDesc: 'Традиционный итальянский белый хлеб, изготовленный с добавлением оливкового масла. Имеет нежный мякиш с большими порами и тонкую корочку.',
          weight: '300 г',
          kbju: 'К: 240 | Б: 7.0 | Ж: 3.5 | У: 46.0',
          allergens: 'Глютен',
          img: '/images/products/ciabatta.jpg' 
        },
        { 
          id: 4, 
          title: 'Пшеничный цельнозерновой', 
          price: '110 ₽', 
          desc: 'Полезный хлеб из цельного зерна.', 
          fullDesc: 'Полезный хлеб из цельнозерновой пшеничной муки грубого помола. Богат клетчаткой, витаминами и минералами.',
          weight: '350 г',
          kbju: 'К: 220 | Б: 8.0 | Ж: 1.5 | У: 42.0',
          allergens: 'Глютен',
          img: '/images/products/Whole-wheat-bread.jpg' 
        },
        { 
          id: 5, 
          title: 'Чесночный хлеб', 
          price: '85 ₽', 
          desc: 'Хлеб с ароматным чесночным маслом.', 
          fullDesc: 'Ароматный мини-багет, пропитанный смесью сливочного масла, свежего чеснока и мелко порубленной зелени петрушки.',
          weight: '200 г',
          kbju: 'К: 310 | Б: 6.5 | Ж: 12.0 | У: 44.0',
          allergens: 'Глютен, Лактоза',
          img: '/images/products/garlic-bread.jpg' 
        }
      ]
    },
    {
      category: 'Выпечка и Десерты',
      items: [
        { 
          id: 6, 
          title: 'Круассан классический', 
          price: '120 ₽', 
          desc: 'Слоёное тесто на французском масле.', 
          fullDesc: 'Воздушный классический круассан без начинки, приготовленный из многослойного сдобного теста на натуральном сливочном масле 82.5% жирности.',
          weight: '70 г',
          kbju: 'К: 410 | Б: 7.0 | Ж: 22.0 | У: 45.0',
          allergens: 'Глютен, Яйца, Лактоза',
          img: '/images/products/croissant.jpg' 
        },
        { 
          id: 7, 
          title: 'Улитка с корицей', 
          price: '110 ₽', 
          desc: 'Сладкая улитка с корицей и глазурью.', 
          fullDesc: 'Сдобная выпечка в форме улитки с обильной начинкой из ароматной цейлонской корицы, политая нежной сахарной глазурью.',
          weight: '90 г',
          kbju: 'К: 360 | Б: 5.5 | Ж: 14.0 | У: 53.0',
          allergens: 'Глютен, Яйца, Лактоза',
          img: '/images/products/cinnamon-bun.jpg' 
        },
        { 
          id: 8, 
          title: 'Маковый рулет', 
          price: '130 ₽', 
          desc: 'Мягкое тесто с обилием сочной маковой начинки.', 
          fullDesc: 'Знаменитый рулет из мягкого дрожжевого теста, внутри которого находится сочная, предварительно проваренная маковая начинка с добавлением мёда.',
          weight: '150 г',
          kbju: 'К: 390 | Б: 8.0 | Ж: 16.0 | У: 52.0',
          allergens: 'Глютен, Яйца',
          img: '/images/products/makovii.jpg' 
        },
        { 
          id: 9, 
          title: 'Сосиска в тесте', 
          price: '95 ₽', 
          desc: 'Классическая сытная выпечка.', 
          fullDesc: 'Натуральная свино-говяжья сосиска высшего сорта, запеченная в нежном и пышном сдобном тесте.',
          weight: '110 г',
          kbju: 'К: 320 | Б: 11.0 | Ж: 18.0 | У: 29.0',
          allergens: 'Глютен, Яйца, Лактоза',
          img: '/images/products/sausage-in-dough.jpg' 
        },
        { 
          id: 10, 
          title: 'Пирог с курицей', 
          price: '160 ₽', 
          desc: 'Сытный домашний пирог.', 
          fullDesc: 'Закрытый пирог из слоеного теста с сочной начинкой из куриного филе, пассерованного лука и легкого сливочного соуса.',
          weight: '180 г',
          kbju: 'К: 280 | Б: 14.0 | Ж: 13.0 | У: 26.0',
          allergens: 'Глютен, Яйца, Лактоза',
          img: '/images/products/chicken-pie.jpg' 
        },
        { 
          id: 11, 
          title: 'Киш Лорен', 
          price: '180 ₽', 
          desc: 'Открытый французский пирог с начинкой.', 
          fullDesc: 'Классический открытый пирог на песочной основе с начинкой из копченой грудинки, залитый яично-сливочной смесью с тертым сыром.',
          weight: '150 г',
          kbju: 'К: 370 | Б: 12.0 | Ж: 26.0 | У: 22.0',
          allergens: 'Глютен, Яйца, Лактоза',
          img: '/images/products/quiche-lorraine.jpg' 
        },
        { 
          id: 12, 
          title: 'Эклер', 
          price: '110 ₽', 
          desc: 'Нежное заварное пирожное с кремом.', 
          fullDesc: 'Пирожное из заварного теста, наполненное воздушным заварным ванильным кремом и покрытое сверху шоколадной помадкой.',
          weight: '60 г',
          kbju: 'К: 340 | Б: 5.0 | Ж: 19.0 | У: 38.0',
          allergens: 'Глютен, Яйца, Лактоза',
          img: '/images/products/eclair.jpg' 
        },
        { 
          id: 13, 
          title: 'Чизкейк', 
          price: '190 ₽', 
          desc: 'Нежный творожно-сливочный десерт.', 
          fullDesc: 'Классический чизкейк Нью-Йорк на подложке из песочного печенья со сливочно-творожной начинкой из нежного сыра и натуральной ванили.',
          weight: '120 г',
          kbju: 'К: 380 | Б: 6.0 | Ж: 24.0 | У: 35.0',
          allergens: 'Глютен, Яйца, Лактоза',
          img: '/images/products/cheesecake.jpg' 
        }
      ]
    },
    {
      category: 'Напитки',
      items: [
        { 
          id: 14, 
          title: 'Капучино', 
          price: '150 ₽', 
          desc: 'Классический кофейный напиток с пенкой.', 
          fullDesc: 'Кофейный напиток на основе порции эспрессо из свежеобжаренной арабики и вспененного молока с плотной шелковистой текстурой.',
          weight: '300 мл',
          kbju: 'К: 120 | Б: 6.0 | Ж: 6.5 | У: 10.0',
          allergens: 'Лактоза',
          img: '/images/products/cappuccino.jpg' 
        },
        { 
          id: 15, 
          title: 'Латте', 
          price: '160 ₽', 
          desc: 'Нежный кофейный напиток с обилием молока.', 
          fullDesc: 'Классический мягкий кофейный напиток, состоящий из эспрессо и большого количества горячего пропаренного молока с тонким слоем пенки.',
          weight: '350 мл',
          kbju: 'К: 140 | Б: 7.0 | Ж: 7.0 | У: 12.0',
          allergens: 'Лактоза',
          img: '/images/products/latte.jpg' 
        },
        { 
          id: 16, 
          title: 'Матча латте', 
          price: '180 ₽', 
          desc: 'Японский зелёный чай матча с нежным молоком.', 
          fullDesc: 'Тонизирующий напиток, приготовленный из церемониального японского зеленого чая матча, растертого в пудру, и нежного горячего молока.',
          weight: '300 мл',
          kbju: 'К: 130 | Б: 5.0 | Ж: 6.0 | У: 14.0',
          allergens: 'Лактоза',
          img: '/images/products/matcha.jpg' 
        },
        { 
          id: 17, 
          title: 'Чай', 
          price: '100 ₽', 
          desc: 'Горячий бодрящий чай.', 
          fullDesc: 'Листовой черный или зеленый чай на выбор, заваренный очищенной водой оптимальной температуры для полного раскрытия купажа.',
          weight: '400 мл',
          kbju: 'К: 2 | Б: 0.1 | Ж: 0.0 | У: 0.2',
          allergens: 'Нет',
          img: '/images/products/tea.jpg' 
        },
        { 
          id: 18, 
          title: 'Сок', 
          price: '90 ₽', 
          desc: 'Освежающий фруктовый сок.', 
          fullDesc: 'Освежающий пакетированный сок в ассортименте (апельсин, яблоко, вишня, мультифрукт) с высоким содержанием фруктовой части.',
          weight: '250 мл',
          kbju: 'К: 110 | Б: 1.0 | Ж: 0.0 | У: 26.0',
          allergens: 'Нет',
          img: '/images/products/juice.jpg' 
        },
        { 
          id: 19, 
          title: 'Глинтвейн', 
          price: '190 ₽', 
          desc: 'Пряный согревающий напиток.', 
          fullDesc: 'Горячий безалкогольный напиток на основе вишневого сока, сваренный с добавлением долек свежего апельсина, яблока, палочек корицы, гвоздики и бадьяна.',
          weight: '300 мл',
          kbju: 'К: 180 | Б: 1.0 | Ж: 0.2 | У: 42.0',
          allergens: 'Нет',
          img: '/images/products/mulled-wine.jpg' 
        }
      ]
    }
  ];

  const scrollRefs = useRef([]);
  // новое состояние для хранения товара, открытого в окне
  const [activeProduct, setActiveProduct] = useState(null);

  const handleScroll = (index, direction) => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  // Добавляем в корзину
  const handleAddToCart = (productName) => {
    alert(`Товар "${productName}" добавлен в корзину!`);
  };

  return (
    <main className="container">
      <h1>Наша продукция</h1>

      {catalog.map((cat, index) => (
        <section key={index} className="category-section">
          <div className="category-header">
            <h2>{cat.category}</h2>
            <div className="scroll-buttons">
              <button className="scroll-btn" aria-label="Назад" onClick={() => handleScroll(index, 'left')}>←</button>
              <button className="scroll-btn" aria-label="Вперед" onClick={() => handleScroll(index, 'right')}>→</button>
            </div>
          </div>

          <div className="horizontal-scroll" ref={(el) => (scrollRefs.current[index] = el)}>
            <div className="scroll-container">
              {cat.items.map((item) => (
                <div key={item.id} className="product-card">
                  <img src={item.img} alt={item.title} />
                  <div className="product-card-content">
                    <h3>{item.title}</h3>
                    <p className="price">{item.price}</p>
                    <p>{item.desc}</p>
                    
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => setActiveProduct(item)}
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      
      {activeProduct && (
        <div className="vsplivashka-overlay" onClick={() => setActiveProduct(null)}>
          <div className="vsplivashka-card" onClick={(e) => e.stopPropagation()}>
            <button className="vsplivashka-close" onClick={() => setActiveProduct(null)} aria-label="Закрыть">×</button>
            
            <div className="vsplivashka-grid">
              <div className="vsplivashka-image">
                <img src={activeProduct.img} alt={activeProduct.title} />
              </div>
              <div className="modal-info">
                <h2>{activeProduct.title}</h2>
                <p className="modal-price">{activeProduct.price}</p>
                
                <div className="modaldetails">
                  <p><strong>Описание:</strong> {activeProduct.fullDesc}</p>
                  <p><strong>Вес/Объем:</strong> {activeProduct.weight}</p>
                  <p><strong>КБЖУ:</strong> <span className="kbju-badge">{activeProduct.kbju}</span></p>
                  <p><strong>Аллергены:</strong> <span className="allergen-badge">{activeProduct.allergens}</span></p>
                </div>

                <button 
                  className="btn btn-primary modal-buy-btn"
                  onClick={() => {
                    handleAddToCart(activeProduct.title);
                    setActiveProduct(null); // Закрываем после добавления
                  }}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;