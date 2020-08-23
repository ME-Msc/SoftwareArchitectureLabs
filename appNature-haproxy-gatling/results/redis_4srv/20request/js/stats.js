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
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1387",
        "ok": "1387",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "702",
        "ok": "702",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "percentiles1": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1223",
        "ok": "1223",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1357",
        "ok": "1357",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 38
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
        "total": "1132",
        "ok": "1132",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1387",
        "ok": "1387",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1234",
        "ok": "1234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1223",
        "ok": "1223",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1263",
        "ok": "1263",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1314",
        "ok": "1314",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1372",
        "ok": "1372",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 25
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 75
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
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "287",
        "ok": "287",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "170",
        "ok": "170",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "percentiles1": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "percentiles2": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "percentiles3": {
        "total": "268",
        "ok": "268",
        "ko": "-"
    },
    "percentiles4": {
        "total": "283",
        "ok": "283",
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
