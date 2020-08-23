var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1884",
        "ok": "1884",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1090",
        "ok": "1090",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1115",
        "ok": "1115",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1550",
        "ok": "1550",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1781",
        "ok": "1781",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1842",
        "ok": "1842",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 41,
    "percentage": 41
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 48,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1169",
        "ok": "1169",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1884",
        "ok": "1884",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1542",
        "ok": "1542",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "188",
        "ok": "188",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1560",
        "ok": "1560",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1685",
        "ok": "1685",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1819",
        "ok": "1819",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1863",
        "ok": "1863",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 48,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1060",
        "ok": "1060",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "187",
        "ok": "187",
        "ko": "-"
    },
    "percentiles1": {
        "total": "620",
        "ok": "620",
        "ko": "-"
    },
    "percentiles2": {
        "total": "770",
        "ok": "770",
        "ko": "-"
    },
    "percentiles3": {
        "total": "976",
        "ok": "976",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1053",
        "ok": "1053",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 41,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 18
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
        "total": "16.667",
        "ok": "16.667",
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
