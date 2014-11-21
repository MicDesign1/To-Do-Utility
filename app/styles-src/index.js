module.exports = {

    "#todoWin": {
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true
    },

    "#todoTable": {
        top: Alloy.Globals.tableTop,
        bottom: '46dp'
    },

    "#header": {
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: { x: "0%", y:"0%"},
            endPoint:   { x: "0%", y:"100%"},
            colors: [
                { color: "#5DA9F5", offset: 0.0 },
                { color: "#1964B0", offset: 1.0 }
            ]
        }
    },

    "#title": {
        left: "10dp",
        color: "#fff",
        font: {
            fontSize: '24dp',
            fontWeight: 'bold'
        }
    },

    ".divider": {
        height: "48dp",
        width: "3dp",
        top: "1dp",
        right: "50dp",
        backgroundGradient: {
            type: "linear",
            startPoint: { x: "0%",   y:"0%"},
            endPoint:   { x: "100%", y:"0%"},
            colors: [
                { color: "#666", offset: 0.0 },
                { color: "#ccc", offset: 0.5 },
                { color: "#666", offset: 1.0 }
            ]
        }
    },

    "#addView": {
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp"
    },

    "#addImage": {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/adding.png",
        touchEnabled: false
    },

    "#footer": {
        bottom: 0,
        height: '46dp',
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: { x: "0%", y:"0%"},
            endPoint:   { x: "0%", y:"100%"},
            colors: [
                { color: "#5DA9F5", offset: 0.0 },
                { color: "#1964B0", offset: 1.0 }
            ]
        }
    },

    "#tabbedbar": {
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        backgroundColor: '#fff',
        index: 0,
        height: 40,
        left: 20,
        right: 20
    }
};