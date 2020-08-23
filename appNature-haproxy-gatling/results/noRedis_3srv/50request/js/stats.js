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
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1938",
        "ok": "1938",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1029",
        "ok": "1029",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "513",
        "ok": "513",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1025",
        "ok": "1025",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1467",
        "ok": "1467",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1763",
        "ok": "1763",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1934",
        "ok": "1934",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46,
    "percentage": 46
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 46,
    "percentage": 46
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
        "total": "1113",
        "ok": "1113",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1938",
        "ok": "1938",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1501",
        "ok": "1501",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1479",
        "ok": "1479",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1668",
        "ok": "1668",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1844",
        "ok": "1844",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1936",
        "ok": "1936",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 46,
    "percentage": 92
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
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "937",
        "ok": "937",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "185",
        "ok": "185",
        "ko": "-"
    },
    "percentiles1": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles2": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "percentiles3": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "percentiles4": {
        "total": "912",
        "ok": "912",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 8
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
