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
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1369",
        "ok": "1369",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "698",
        "ok": "698",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "510",
        "ok": "510",
        "ko": "-"
    },
    "percentiles1": {
        "total": "668",
        "ok": "668",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1207",
        "ok": "1207",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1291",
        "ok": "1291",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1340",
        "ok": "1340",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 28
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
        "total": "1086",
        "ok": "1086",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1369",
        "ok": "1369",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1205",
        "ok": "1205",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1210",
        "ok": "1210",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1228",
        "ok": "1228",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1298",
        "ok": "1298",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1355",
        "ok": "1355",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 45
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 55
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
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "44",
        "ok": "44",
        "ko": "-"
    },
    "percentiles1": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles2": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "percentiles3": {
        "total": "248",
        "ok": "248",
        "ko": "-"
    },
    "percentiles4": {
        "total": "249",
        "ok": "249",
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
