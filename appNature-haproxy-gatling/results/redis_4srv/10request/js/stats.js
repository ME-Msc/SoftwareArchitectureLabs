var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2689",
        "ok": "2689",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7394",
        "ok": "7394",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4770",
        "ok": "4770",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1996",
        "ok": "1996",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4223",
        "ok": "4223",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6991",
        "ok": "6991",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7363",
        "ok": "7363",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7388",
        "ok": "7388",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.818",
        "ok": "1.818",
        "ko": "-"
    }
},
contents: {
"req_nature-login-6dcd5": {
        type: "REQUEST",
        name: "nature_login",
path: "nature_login",
pathFormatted: "req_nature-login-6dcd5",
stats: {
    "name": "nature_login",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2689",
        "ok": "2689",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2961",
        "ok": "2961",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2832",
        "ok": "2832",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2855",
        "ok": "2855",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2890",
        "ok": "2890",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2957",
        "ok": "2957",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2960",
        "ok": "2960",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.909",
        "ok": "0.909",
        "ko": "-"
    }
}
    },"req_nature-request-f7938": {
        type: "REQUEST",
        name: "nature_request",
path: "nature_request",
pathFormatted: "req_nature-request-f7938",
stats: {
    "name": "nature_request",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5485",
        "ok": "5485",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7394",
        "ok": "7394",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6707",
        "ok": "6707",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "671",
        "ok": "671",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6992",
        "ok": "6992",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7249",
        "ok": "7249",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7379",
        "ok": "7379",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7391",
        "ok": "7391",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.909",
        "ok": "0.909",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
