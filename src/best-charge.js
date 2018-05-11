function bestCharge(selectedItems) {
    var orderName = [];
    var orderID = [];
    var orderNumber = [];
    var orderPrice = [];
    var finalOrder;
    var menu = loadAllItems();
    //获取所点菜单的信息（数量，id等等）
    for (var i = 0; i < selectedItems.length; i++) {
        for (var j = 0; j < menu.length; j++) {
            if (selectedItems[i].substring(0, 8) == menu[j].id) {
                orderID[i] = selectedItems[i].substring(0, 8); //记录所点菜的id
                orderNumber[i] = selectedItems[i].substring(11); //数量
                orderPrice[i] = menu[j].price; //price
                orderName[i] = menu[j].name; //name
            }
        }
    }
    finalOrder = "============= 订餐明细 ============="
    for (var i = 0; i < orderID.length; i++) {
        finalOrder += "\n" + orderName[i] + " x " + orderNumber[i] + " = " + orderPrice[i] * orderNumber[i] + "元";
    }
    //确定优惠方式
    var discountStytle = loadPromotions();
    var priceWithoutDiscount = 0;
    var discount1 = 0;
    var discount2 = 0;
    for (var i = 0; i < orderName.length; i++) {
        if (orderID[i] == discountStytle[1].items[0] || orderID[i] == discountStytle[1].items[1]) {
            discount1 += orderPrice[i] * orderNumber[i] / 2;
        }
        priceWithoutDiscount += orderPrice[i] * orderNumber[i];
    }
    if (priceWithoutDiscount >= 30) {
        discount2 = Math.floor(priceWithoutDiscount / 30) * 6;
    }
    if (discount1 > discount2) {
        finalOrder += "\n-----------------------------------\n使用优惠:\n" + discountStytle[1].type + "(黄焖鸡，凉皮)，省" + discount1 + "元";
        finalOrder += "\n-----------------------------------\n总计：" +
            (priceWithoutDiscount - discount1) + "元\n===================================";
    } else if (discount1 < discount2) {
        finalOrder += "\n-----------------------------------\n使用优惠:\n" + discountStytle[0].type + "，省" + discount2 + "元";
        finalOrder += "\n-----------------------------------\n总计：" +
            (priceWithoutDiscount - discount2) + "元\n===================================";
    } else if (discount1 == discount2) {
        finalOrder += "\n-----------------------------------\n总计：" +
            (priceWithoutDiscount - discount2) + "元\n===================================";
    }
    return finalOrder;
}