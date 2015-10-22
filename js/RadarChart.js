﻿var data1 = {
    labels: ["JS", "JS Frameworks*", "Ruby", "HTML", "C++", "Python", "PHP"],
    datasets: [
        
        {
            label: "Web Dev Languages",
            fillColor: "rgba(162, 255, 122, 0.3)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

var WebChart = new Chart(document.getElementById("canvasWeb").getContext("2d")).Radar(data1, { scaleFontSize: 13, scaleFontColor: "#ddd", pointDot: false, pointLabelFontColor: "#ddd", responsive: true, angleLineColor: "rgba(0,0,0,.2)", scaleLineColor: "rgba(0,0,0,0.1)" });

var data3 = {
    labels: ["ASPEN Tech*", "MATLAB", "AUTOCAD**", "MS Project Management", "MS Visio", "Data Infographics", "Economic Analysis"],
    /*labels: ["Process and Equipment Design", "Process and Equipment Simulation", "Numerical Data Analysis", "Cost Optimization", "Computational Mathematical Modelling", "Safety and Quality", "Project Management"],*/
    datasets: [
        {
            label: "Chemical Engineering Skills",
            fillColor: "rgba(255, 122, 228, 0.3)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        },
    ]
};

var EngChart = new Chart(document.getElementById("canvasEng").getContext("2d")).Radar(data3, { scaleFontSize: 13, scaleFontColor: "#ddd", pointDot: false, pointLabelFontColor: "#ddd", responsive: true, angleLineColor: "rgba(0,0,0,.2)", scaleLineColor: "rgba(0,0,0,0.1)" });