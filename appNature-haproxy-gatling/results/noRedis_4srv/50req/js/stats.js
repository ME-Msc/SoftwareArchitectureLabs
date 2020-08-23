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
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2182",
        "ok": "2182",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1064",
        "ok": "1064",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "667",
        "ok": "667",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1071",
        "ok": "1071",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1656",
        "ok": "1656",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2019",
        "ok": "2019",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2088",
        "ok": "2088",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 50,
    "percentage": 50
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
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2182",
        "ok": "2182",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1702",
        "ok": "1702",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "218",
        "ok": "218",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1659",
        "ok": "1659",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1891",
        "ok": "1891",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2043",
        "ok": "2043",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2135",
        "ok": "2135",
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
    "count": 50,
    "percentage": 100
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
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "426",
        "ok": "426",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "169",
        "ok": "169",
        "ko": "-"
    },
    "percentiles1": {
        "total": "410",
        "ok": "410",
        "ko": "-"
    },
    "percentiles2": {
        "total": "519",
        "ok": "519",
        "ko": "-"
    },
    "percentiles3": {
        "total": "725",
        "ok": "725",
        "ko": "-"
    },
    "percentiles4": {
        "total": "834",
        "ok": "834",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 2
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
