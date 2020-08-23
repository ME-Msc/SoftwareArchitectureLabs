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
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1320",
        "ok": "1320",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "percentiles1": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1234",
        "ok": "1234",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1280",
        "ok": "1280",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1310",
        "ok": "1310",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 40
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
        "total": "1155",
        "ok": "1155",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1320",
        "ok": "1320",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1232",
        "ok": "1232",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1235",
        "ok": "1235",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1251",
        "ok": "1251",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1295",
        "ok": "1295",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1315",
        "ok": "1315",
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
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 80
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
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "357",
        "ok": "357",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "243",
        "ok": "243",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles1": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "percentiles2": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "percentiles3": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "percentiles4": {
        "total": "352",
        "ok": "352",
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
