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
        "total": "167",
        "ok": "167",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1648",
        "ok": "1648",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "473",
        "ok": "473",
        "ko": "-"
    },
    "percentiles1": {
        "total": "962",
        "ok": "962",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1337",
        "ok": "1337",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1489",
        "ok": "1489",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1588",
        "ok": "1588",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 4
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
        "total": "1176",
        "ok": "1176",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1648",
        "ok": "1648",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1349",
        "ok": "1349",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1340",
        "ok": "1340",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1400",
        "ok": "1400",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1496",
        "ok": "1496",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1618",
        "ok": "1618",
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
        "total": "167",
        "ok": "167",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "748",
        "ok": "748",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "435",
        "ok": "435",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "percentiles1": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "percentiles2": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "percentiles3": {
        "total": "665",
        "ok": "665",
        "ko": "-"
    },
    "percentiles4": {
        "total": "721",
        "ok": "721",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50,
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
