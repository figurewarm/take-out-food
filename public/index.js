function calculatePrice() {
    var theFormatOrder = formatInput();
    var bill = bestCharge(theFormatOrder);
    document.getElementById('message').innerHTML = bill;
}

function changeSelected() {
    var menusArray = [];
    menusArray.push({
        id: 'ITEM0001',
        number: document.getElementById('ITEM0001').value,
        name: '黄焖鸡'
    })
    menusArray.push({
        id: 'ITEM0013',
        number: document.getElementById('ITEM0013').value,
        name: '肉夹馍'
    })
    menusArray.push({
        id: 'ITEM0022',
        number: document.getElementById('ITEM0022').value,
        name: '凉皮'
    })
    menusArray.push({
        id: 'ITEM0030',
        number: document.getElementById('ITEM0030').value,
        name: '冰锋'
    })
    var orderOption = '所点的菜有：';
    for (let i = 0; i < menusArray.length; i++) {
        if (menusArray[i].number > 0)
            orderOption += '\n' + menusArray[i].name + ' x ' + menusArray[i].number + '\n';
    }
    document.getElementById('selectedmenus').innerHTML = orderOption;
    return menusArray;
}

function formatInput() {
    var menusArray = changeSelected();
    var finalOrder = [];
    for (let i = 0, j = 0; i < menusArray.length; i++) {
        if (menusArray[i].number > 0) {
            var partOrder = '';
            partOrder += menusArray[i].id + ' x ' + menusArray[i].number;
            finalOrder[j] = partOrder;
            j++;
        }
    }
    return finalOrder;
}
window.onload = function() {
    var items = loadAllItems();
    var itemsHtml = '';
    for (let i = 0; i < items.length; i++) {
        itemsHtml += '<div class="menuStyle"><span value=' + items[i].id + '>' + items[i].name + " " +
            items[i].price + '元:&nbsp;&nbsp</span>' + '<input class="input"id=' + items[i].id + ' type="text">' + "&nbsp;&nbsp;&nbsp;&nbsp;" + '</div>';
    }
    document.getElementById('menus').innerHTML = itemsHtml;
    //加载优惠方式
    var promotions = loadPromotions();
    var promotionsHtml = '';
    promotionsHtml = '优惠方式有:\n'
    promotionsHtml += '<p>方式一：' + promotions[0].type + '</p>';
    promotionsHtml += '<p>方式二：' + promotions[1].type + " (" + items[0].name + "，" + items[2].name + ')</p>';
    document.getElementById('promotions').innerHTML = promotionsHtml
}

function enclear() {
    location.reload();
}