module.exports = {

    "#row": {
        focusable: false
    },

    "#row[platform=ios]": {
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
    },

    "#check": {
        image: '/tick_gray_64.png',
        left: 0
    },

    "#task": {
        left: '50dp',
        right: '50dp',
        height: Ti.UI.SIZE,
        font: {
            fontSize: '18dp'
        }
    },

    "#remove": {
        image: '/deleten.png',
        right: 0
    }
};