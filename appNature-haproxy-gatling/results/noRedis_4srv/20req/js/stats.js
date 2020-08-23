var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1488",
        "ok": "1488",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "761",
        "ok": "761",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "532",
        "ok": "532",
        "ko": "-"
    },
    "percentiles1": {
        "total": "771",
        "ok": "771",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1475",
        "ok": "1475",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1486",
        "ok": "1486",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "20",
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1108",
        "ok": "1108",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1488",
        "ok": "1488",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1283",
        "ok": "1283",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "115",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1265",
        "ok": "1265",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1339",
        "ok": "1339",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1482",
        "ok": "1482",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1487",
        "ok": "1487",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "10",
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "434",
        "ok": "434",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "percentiles1": {
        "total": "229",
        "ok": "229",
        "ko": "-"
    },
    "percentiles2": {
        "total": "312",
        "ok": "312",
        "ko": "-"
    },
    "percentiles3": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "percentiles4": {
        "total": "422",
        "ok": "422",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "10",
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
