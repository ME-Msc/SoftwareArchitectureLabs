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
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5193",
        "ok": "5193",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1285",
        "ok": "1285",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1497",
        "ok": "1497",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1094",
        "ok": "1094",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1158",
        "ok": "1158",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5009",
        "ok": "5009",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5156",
        "ok": "5156",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.222",
        "ok": "2.222",
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
        "total": "1068",
        "ok": "1068",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2807",
        "ok": "2807",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1456",
        "ok": "1456",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "676",
        "ok": "676",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1138",
        "ok": "1138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1159",
        "ok": "1159",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2806",
        "ok": "2806",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2807",
        "ok": "2807",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 80
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.111",
        "ok": "1.111",
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
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5193",
        "ok": "5193",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1114",
        "ok": "1114",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1992",
        "ok": "1992",
        "ko": "-"
    },
    "percentiles1": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles2": {
        "total": "201",
        "ok": "201",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5106",
        "ok": "5106",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5176",
        "ok": "5176",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.111",
        "ok": "1.111",
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
